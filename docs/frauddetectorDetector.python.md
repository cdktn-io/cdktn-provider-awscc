# `frauddetectorDetector` Submodule <a name="`frauddetectorDetector` Submodule" id="@cdktn/provider-awscc.frauddetectorDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrauddetectorDetector <a name="FrauddetectorDetector" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector awscc_frauddetector_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  detector_id: str,
  event_type: FrauddetectorDetectorEventType,
  rules: IResolvable | typing.List[FrauddetectorDetectorRules],
  associated_models: IResolvable | typing.List[FrauddetectorDetectorAssociatedModels] = None,
  description: str = None,
  detector_version_status: str = None,
  rule_execution_mode: str = None,
  tags: IResolvable | typing.List[FrauddetectorDetectorTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.detectorId">detector_id</a></code> | <code>str</code> | The ID of the detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.eventType">event_type</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a></code> | The event type to associate this detector with. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#rules FrauddetectorDetector#rules}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.associatedModels">associated_models</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>]</code> | The models to associate with this detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.detectorVersionStatus">detector_version_status</a></code> | <code>str</code> | The desired detector version status for the detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.ruleExecutionMode">rule_execution_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#rule_execution_mode FrauddetectorDetector#rule_execution_mode}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>]</code> | Tags associated with this detector. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `detector_id`<sup>Required</sup> <a name="detector_id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.detectorId"></a>

- *Type:* str

The ID of the detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#detector_id FrauddetectorDetector#detector_id}

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.eventType"></a>

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a>

The event type to associate this detector with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#event_type FrauddetectorDetector#event_type}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#rules FrauddetectorDetector#rules}.

---

##### `associated_models`<sup>Optional</sup> <a name="associated_models" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.associatedModels"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>]

The models to associate with this detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#associated_models FrauddetectorDetector#associated_models}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.description"></a>

- *Type:* str

The description of the detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `detector_version_status`<sup>Optional</sup> <a name="detector_version_status" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.detectorVersionStatus"></a>

- *Type:* str

The desired detector version status for the detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#detector_version_status FrauddetectorDetector#detector_version_status}

---

##### `rule_execution_mode`<sup>Optional</sup> <a name="rule_execution_mode" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.ruleExecutionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#rule_execution_mode FrauddetectorDetector#rule_execution_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>]

Tags associated with this detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putAssociatedModels">put_associated_models</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putEventType">put_event_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetAssociatedModels">reset_associated_models</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetDetectorVersionStatus">reset_detector_version_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetRuleExecutionMode">reset_rule_execution_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_associated_models` <a name="put_associated_models" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putAssociatedModels"></a>

```python
def put_associated_models(
  value: IResolvable | typing.List[FrauddetectorDetectorAssociatedModels]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putAssociatedModels.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>]

---

##### `put_event_type` <a name="put_event_type" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putEventType"></a>

```python
def put_event_type(
  description: str = None,
  entity_types: IResolvable | typing.List[FrauddetectorDetectorEventTypeEntityTypes] = None,
  event_variables: IResolvable | typing.List[FrauddetectorDetectorEventTypeEventVariables] = None,
  inline: bool | IResolvable = None,
  labels: IResolvable | typing.List[FrauddetectorDetectorEventTypeLabels] = None,
  name: str = None,
  tags: IResolvable | typing.List[FrauddetectorDetectorEventTypeTags] = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putEventType.parameter.description"></a>

- *Type:* str

The description of the event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

###### `entity_types`<sup>Optional</sup> <a name="entity_types" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putEventType.parameter.entityTypes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#entity_types FrauddetectorDetector#entity_types}.

---

###### `event_variables`<sup>Optional</sup> <a name="event_variables" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putEventType.parameter.eventVariables"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#event_variables FrauddetectorDetector#event_variables}.

---

###### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putEventType.parameter.inline"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}.

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putEventType.parameter.labels"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#labels FrauddetectorDetector#labels}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putEventType.parameter.name"></a>

- *Type:* str

The name for the event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putEventType.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>]

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

##### `put_rules` <a name="put_rules" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[FrauddetectorDetectorRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[FrauddetectorDetectorTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>]

---

##### `reset_associated_models` <a name="reset_associated_models" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetAssociatedModels"></a>

```python
def reset_associated_models() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_detector_version_status` <a name="reset_detector_version_status" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetDetectorVersionStatus"></a>

```python
def reset_detector_version_status() -> None
```

##### `reset_rule_execution_mode` <a name="reset_rule_execution_mode" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetRuleExecutionMode"></a>

```python
def reset_rule_execution_mode() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FrauddetectorDetector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isConstruct"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isTerraformElement"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isTerraformResource"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FrauddetectorDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FrauddetectorDetector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FrauddetectorDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FrauddetectorDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.associatedModels">associated_models</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList">FrauddetectorDetectorAssociatedModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorVersionId">detector_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.eventType">event_type</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference">FrauddetectorDetectorEventTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList">FrauddetectorDetectorRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList">FrauddetectorDetectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.associatedModelsInput">associated_models_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorIdInput">detector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorVersionStatusInput">detector_version_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.eventTypeInput">event_type_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.ruleExecutionModeInput">rule_execution_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorId">detector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorVersionStatus">detector_version_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.ruleExecutionMode">rule_execution_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `associated_models`<sup>Required</sup> <a name="associated_models" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.associatedModels"></a>

```python
associated_models: FrauddetectorDetectorAssociatedModelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList">FrauddetectorDetectorAssociatedModelsList</a>

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `detector_version_id`<sup>Required</sup> <a name="detector_version_id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorVersionId"></a>

```python
detector_version_id: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.eventType"></a>

```python
event_type: FrauddetectorDetectorEventTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference">FrauddetectorDetectorEventTypeOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.rules"></a>

```python
rules: FrauddetectorDetectorRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList">FrauddetectorDetectorRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.tags"></a>

```python
tags: FrauddetectorDetectorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList">FrauddetectorDetectorTagsList</a>

---

##### `associated_models_input`<sup>Optional</sup> <a name="associated_models_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.associatedModelsInput"></a>

```python
associated_models_input: IResolvable | typing.List[FrauddetectorDetectorAssociatedModels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `detector_id_input`<sup>Optional</sup> <a name="detector_id_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorIdInput"></a>

```python
detector_id_input: str
```

- *Type:* str

---

##### `detector_version_status_input`<sup>Optional</sup> <a name="detector_version_status_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorVersionStatusInput"></a>

```python
detector_version_status_input: str
```

- *Type:* str

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.eventTypeInput"></a>

```python
event_type_input: IResolvable | FrauddetectorDetectorEventType
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a>

---

##### `rule_execution_mode_input`<sup>Optional</sup> <a name="rule_execution_mode_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.ruleExecutionModeInput"></a>

```python
rule_execution_mode_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[FrauddetectorDetectorRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[FrauddetectorDetectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `detector_id`<sup>Required</sup> <a name="detector_id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorId"></a>

```python
detector_id: str
```

- *Type:* str

---

##### `detector_version_status`<sup>Required</sup> <a name="detector_version_status" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.detectorVersionStatus"></a>

```python
detector_version_status: str
```

- *Type:* str

---

##### `rule_execution_mode`<sup>Required</sup> <a name="rule_execution_mode" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.ruleExecutionMode"></a>

```python
rule_execution_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FrauddetectorDetectorAssociatedModels <a name="FrauddetectorDetectorAssociatedModels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorAssociatedModels(
  arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}.

---

### FrauddetectorDetectorConfig <a name="FrauddetectorDetectorConfig" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  detector_id: str,
  event_type: FrauddetectorDetectorEventType,
  rules: IResolvable | typing.List[FrauddetectorDetectorRules],
  associated_models: IResolvable | typing.List[FrauddetectorDetectorAssociatedModels] = None,
  description: str = None,
  detector_version_status: str = None,
  rule_execution_mode: str = None,
  tags: IResolvable | typing.List[FrauddetectorDetectorTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.detectorId">detector_id</a></code> | <code>str</code> | The ID of the detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.eventType">event_type</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a></code> | The event type to associate this detector with. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#rules FrauddetectorDetector#rules}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.associatedModels">associated_models</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>]</code> | The models to associate with this detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.description">description</a></code> | <code>str</code> | The description of the detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.detectorVersionStatus">detector_version_status</a></code> | <code>str</code> | The desired detector version status for the detector. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.ruleExecutionMode">rule_execution_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#rule_execution_mode FrauddetectorDetector#rule_execution_mode}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>]</code> | Tags associated with this detector. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `detector_id`<sup>Required</sup> <a name="detector_id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.detectorId"></a>

```python
detector_id: str
```

- *Type:* str

The ID of the detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#detector_id FrauddetectorDetector#detector_id}

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.eventType"></a>

```python
event_type: FrauddetectorDetectorEventType
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a>

The event type to associate this detector with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#event_type FrauddetectorDetector#event_type}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.rules"></a>

```python
rules: IResolvable | typing.List[FrauddetectorDetectorRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#rules FrauddetectorDetector#rules}.

---

##### `associated_models`<sup>Optional</sup> <a name="associated_models" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.associatedModels"></a>

```python
associated_models: IResolvable | typing.List[FrauddetectorDetectorAssociatedModels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>]

The models to associate with this detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#associated_models FrauddetectorDetector#associated_models}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `detector_version_status`<sup>Optional</sup> <a name="detector_version_status" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.detectorVersionStatus"></a>

```python
detector_version_status: str
```

- *Type:* str

The desired detector version status for the detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#detector_version_status FrauddetectorDetector#detector_version_status}

---

##### `rule_execution_mode`<sup>Optional</sup> <a name="rule_execution_mode" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.ruleExecutionMode"></a>

```python
rule_execution_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#rule_execution_mode FrauddetectorDetector#rule_execution_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[FrauddetectorDetectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>]

Tags associated with this detector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

### FrauddetectorDetectorEventType <a name="FrauddetectorDetectorEventType" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventType(
  description: str = None,
  entity_types: IResolvable | typing.List[FrauddetectorDetectorEventTypeEntityTypes] = None,
  event_variables: IResolvable | typing.List[FrauddetectorDetectorEventTypeEventVariables] = None,
  inline: bool | IResolvable = None,
  labels: IResolvable | typing.List[FrauddetectorDetectorEventTypeLabels] = None,
  name: str = None,
  tags: IResolvable | typing.List[FrauddetectorDetectorEventTypeTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.description">description</a></code> | <code>str</code> | The description of the event type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.entityTypes">entity_types</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#entity_types FrauddetectorDetector#entity_types}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.eventVariables">event_variables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#event_variables FrauddetectorDetector#event_variables}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.inline">inline</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.labels">labels</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#labels FrauddetectorDetector#labels}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.name">name</a></code> | <code>str</code> | The name for the event type. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>]</code> | Tags associated with this event type. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `entity_types`<sup>Optional</sup> <a name="entity_types" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.entityTypes"></a>

```python
entity_types: IResolvable | typing.List[FrauddetectorDetectorEventTypeEntityTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#entity_types FrauddetectorDetector#entity_types}.

---

##### `event_variables`<sup>Optional</sup> <a name="event_variables" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.eventVariables"></a>

```python
event_variables: IResolvable | typing.List[FrauddetectorDetectorEventTypeEventVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#event_variables FrauddetectorDetector#event_variables}.

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.inline"></a>

```python
inline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.labels"></a>

```python
labels: IResolvable | typing.List[FrauddetectorDetectorEventTypeLabels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#labels FrauddetectorDetector#labels}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.name"></a>

```python
name: str
```

- *Type:* str

The name for the event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType.property.tags"></a>

```python
tags: IResolvable | typing.List[FrauddetectorDetectorEventTypeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>]

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

### FrauddetectorDetectorEventTypeEntityTypes <a name="FrauddetectorDetectorEventTypeEntityTypes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes(
  arn: str = None,
  created_time: str = None,
  description: str = None,
  inline: bool | IResolvable = None,
  last_updated_time: str = None,
  name: str = None,
  tags: IResolvable | typing.List[FrauddetectorDetectorEventTypeEntityTypesTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.createdTime">created_time</a></code> | <code>str</code> | The time when the entity type was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.description">description</a></code> | <code>str</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.inline">inline</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | The time when the entity type was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>]</code> | Tags associated with this entity type. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}.

---

##### `created_time`<sup>Optional</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

The time when the entity type was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.description"></a>

```python
description: str
```

- *Type:* str

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.inline"></a>

```python
inline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}.

---

##### `last_updated_time`<sup>Optional</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

The time when the entity type was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes.property.tags"></a>

```python
tags: IResolvable | typing.List[FrauddetectorDetectorEventTypeEntityTypesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>]

Tags associated with this entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

### FrauddetectorDetectorEventTypeEntityTypesTags <a name="FrauddetectorDetectorEventTypeEntityTypesTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

### FrauddetectorDetectorEventTypeEventVariables <a name="FrauddetectorDetectorEventTypeEventVariables" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables(
  arn: str = None,
  created_time: str = None,
  data_source: str = None,
  data_type: str = None,
  default_value: str = None,
  description: str = None,
  inline: bool | IResolvable = None,
  last_updated_time: str = None,
  name: str = None,
  tags: IResolvable | typing.List[FrauddetectorDetectorEventTypeEventVariablesTags] = None,
  variable_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.createdTime">created_time</a></code> | <code>str</code> | The time when the event variable was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.dataSource">data_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#data_source FrauddetectorDetector#data_source}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.dataType">data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#data_type FrauddetectorDetector#data_type}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#default_value FrauddetectorDetector#default_value}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.description">description</a></code> | <code>str</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.inline">inline</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | The time when the event variable was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>]</code> | Tags associated with this event variable. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.variableType">variable_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#variable_type FrauddetectorDetector#variable_type}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}.

---

##### `created_time`<sup>Optional</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

The time when the event variable was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}

---

##### `data_source`<sup>Optional</sup> <a name="data_source" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#data_source FrauddetectorDetector#data_source}.

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#data_type FrauddetectorDetector#data_type}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#default_value FrauddetectorDetector#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.description"></a>

```python
description: str
```

- *Type:* str

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.inline"></a>

```python
inline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}.

---

##### `last_updated_time`<sup>Optional</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

The time when the event variable was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.tags"></a>

```python
tags: IResolvable | typing.List[FrauddetectorDetectorEventTypeEventVariablesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>]

Tags associated with this event variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

##### `variable_type`<sup>Optional</sup> <a name="variable_type" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables.property.variableType"></a>

```python
variable_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#variable_type FrauddetectorDetector#variable_type}.

---

### FrauddetectorDetectorEventTypeEventVariablesTags <a name="FrauddetectorDetectorEventTypeEventVariablesTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

### FrauddetectorDetectorEventTypeLabels <a name="FrauddetectorDetectorEventTypeLabels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeLabels(
  arn: str = None,
  created_time: str = None,
  description: str = None,
  inline: bool | IResolvable = None,
  last_updated_time: str = None,
  name: str = None,
  tags: IResolvable | typing.List[FrauddetectorDetectorEventTypeLabelsTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.createdTime">created_time</a></code> | <code>str</code> | The time when the label was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.description">description</a></code> | <code>str</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.inline">inline</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | The time when the label was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>]</code> | Tags associated with this label. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}.

---

##### `created_time`<sup>Optional</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

The time when the label was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.description"></a>

```python
description: str
```

- *Type:* str

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.inline"></a>

```python
inline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}.

---

##### `last_updated_time`<sup>Optional</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

The time when the label was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels.property.tags"></a>

```python
tags: IResolvable | typing.List[FrauddetectorDetectorEventTypeLabelsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>]

Tags associated with this label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

### FrauddetectorDetectorEventTypeLabelsTags <a name="FrauddetectorDetectorEventTypeLabelsTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

### FrauddetectorDetectorEventTypeTags <a name="FrauddetectorDetectorEventTypeTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

### FrauddetectorDetectorRules <a name="FrauddetectorDetectorRules" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorRules(
  arn: str = None,
  created_time: str = None,
  description: str = None,
  detector_id: str = None,
  expression: str = None,
  language: str = None,
  last_updated_time: str = None,
  outcomes: IResolvable | typing.List[FrauddetectorDetectorRulesOutcomes] = None,
  rule_id: str = None,
  rule_version: str = None,
  tags: IResolvable | typing.List[FrauddetectorDetectorRulesTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.createdTime">created_time</a></code> | <code>str</code> | The time when the event type was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.description">description</a></code> | <code>str</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.detectorId">detector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#detector_id FrauddetectorDetector#detector_id}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#expression FrauddetectorDetector#expression}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.language">language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#language FrauddetectorDetector#language}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | The time when the event type was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.outcomes">outcomes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#outcomes FrauddetectorDetector#outcomes}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.ruleId">rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#rule_id FrauddetectorDetector#rule_id}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.ruleVersion">rule_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#rule_version FrauddetectorDetector#rule_version}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>]</code> | Tags associated with this event type. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}.

---

##### `created_time`<sup>Optional</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

The time when the event type was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.description"></a>

```python
description: str
```

- *Type:* str

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `detector_id`<sup>Optional</sup> <a name="detector_id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.detectorId"></a>

```python
detector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#detector_id FrauddetectorDetector#detector_id}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#expression FrauddetectorDetector#expression}.

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.language"></a>

```python
language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#language FrauddetectorDetector#language}.

---

##### `last_updated_time`<sup>Optional</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

The time when the event type was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}

---

##### `outcomes`<sup>Optional</sup> <a name="outcomes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.outcomes"></a>

```python
outcomes: IResolvable | typing.List[FrauddetectorDetectorRulesOutcomes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#outcomes FrauddetectorDetector#outcomes}.

---

##### `rule_id`<sup>Optional</sup> <a name="rule_id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#rule_id FrauddetectorDetector#rule_id}.

---

##### `rule_version`<sup>Optional</sup> <a name="rule_version" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.ruleVersion"></a>

```python
rule_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#rule_version FrauddetectorDetector#rule_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules.property.tags"></a>

```python
tags: IResolvable | typing.List[FrauddetectorDetectorRulesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>]

Tags associated with this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

### FrauddetectorDetectorRulesOutcomes <a name="FrauddetectorDetectorRulesOutcomes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorRulesOutcomes(
  arn: str = None,
  created_time: str = None,
  description: str = None,
  inline: bool | IResolvable = None,
  last_updated_time: str = None,
  name: str = None,
  tags: IResolvable | typing.List[FrauddetectorDetectorRulesOutcomesTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.createdTime">created_time</a></code> | <code>str</code> | The time when the outcome was created. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.description">description</a></code> | <code>str</code> | The description. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.inline">inline</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | The time when the outcome was last updated. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>]</code> | Tags associated with this outcome. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#arn FrauddetectorDetector#arn}.

---

##### `created_time`<sup>Optional</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

The time when the outcome was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#created_time FrauddetectorDetector#created_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.description"></a>

```python
description: str
```

- *Type:* str

The description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#description FrauddetectorDetector#description}

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.inline"></a>

```python
inline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#inline FrauddetectorDetector#inline}.

---

##### `last_updated_time`<sup>Optional</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

The time when the outcome was last updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#last_updated_time FrauddetectorDetector#last_updated_time}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#name FrauddetectorDetector#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes.property.tags"></a>

```python
tags: IResolvable | typing.List[FrauddetectorDetectorRulesOutcomesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>]

Tags associated with this outcome.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#tags FrauddetectorDetector#tags}

---

### FrauddetectorDetectorRulesOutcomesTags <a name="FrauddetectorDetectorRulesOutcomesTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

### FrauddetectorDetectorRulesTags <a name="FrauddetectorDetectorRulesTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorRulesTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

### FrauddetectorDetectorTags <a name="FrauddetectorDetectorTags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#key FrauddetectorDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/frauddetector_detector#value FrauddetectorDetector#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrauddetectorDetectorAssociatedModelsList <a name="FrauddetectorDetectorAssociatedModelsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorDetectorAssociatedModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorDetectorAssociatedModels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>]

---


### FrauddetectorDetectorAssociatedModelsOutputReference <a name="FrauddetectorDetectorAssociatedModelsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.resetArn">reset_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModelsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorDetectorAssociatedModels
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorAssociatedModels">FrauddetectorDetectorAssociatedModels</a>

---


### FrauddetectorDetectorEventTypeEntityTypesList <a name="FrauddetectorDetectorEventTypeEntityTypesList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorDetectorEventTypeEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorDetectorEventTypeEntityTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>]

---


### FrauddetectorDetectorEventTypeEntityTypesOutputReference <a name="FrauddetectorDetectorEventTypeEntityTypesOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetCreatedTime">reset_created_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetInline">reset_inline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetLastUpdatedTime">reset_last_updated_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[FrauddetectorDetectorEventTypeEntityTypesTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>]

---

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_created_time` <a name="reset_created_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetCreatedTime"></a>

```python
def reset_created_time() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_inline` <a name="reset_inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetInline"></a>

```python
def reset_inline() -> None
```

##### `reset_last_updated_time` <a name="reset_last_updated_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetLastUpdatedTime"></a>

```python
def reset_last_updated_time() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList">FrauddetectorDetectorEventTypeEntityTypesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.createdTimeInput">created_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.inlineInput">inline_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTimeInput">last_updated_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.inline">inline</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.tags"></a>

```python
tags: FrauddetectorDetectorEventTypeEntityTypesTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList">FrauddetectorDetectorEventTypeEntityTypesTagsList</a>

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `created_time_input`<sup>Optional</sup> <a name="created_time_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.createdTimeInput"></a>

```python
created_time_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `inline_input`<sup>Optional</sup> <a name="inline_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.inlineInput"></a>

```python
inline_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `last_updated_time_input`<sup>Optional</sup> <a name="last_updated_time_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTimeInput"></a>

```python
last_updated_time_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[FrauddetectorDetectorEventTypeEntityTypesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.inline"></a>

```python
inline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorDetectorEventTypeEntityTypes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>

---


### FrauddetectorDetectorEventTypeEntityTypesTagsList <a name="FrauddetectorDetectorEventTypeEntityTypesTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorDetectorEventTypeEntityTypesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>]

---


### FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference <a name="FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorDetectorEventTypeEntityTypesTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesTags">FrauddetectorDetectorEventTypeEntityTypesTags</a>

---


### FrauddetectorDetectorEventTypeEventVariablesList <a name="FrauddetectorDetectorEventTypeEventVariablesList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorDetectorEventTypeEventVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorDetectorEventTypeEventVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>]

---


### FrauddetectorDetectorEventTypeEventVariablesOutputReference <a name="FrauddetectorDetectorEventTypeEventVariablesOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetCreatedTime">reset_created_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDataSource">reset_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDataType">reset_data_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetInline">reset_inline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetLastUpdatedTime">reset_last_updated_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetVariableType">reset_variable_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[FrauddetectorDetectorEventTypeEventVariablesTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>]

---

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_created_time` <a name="reset_created_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetCreatedTime"></a>

```python
def reset_created_time() -> None
```

##### `reset_data_source` <a name="reset_data_source" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDataSource"></a>

```python
def reset_data_source() -> None
```

##### `reset_data_type` <a name="reset_data_type" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDataType"></a>

```python
def reset_data_type() -> None
```

##### `reset_default_value` <a name="reset_default_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_inline` <a name="reset_inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetInline"></a>

```python
def reset_inline() -> None
```

##### `reset_last_updated_time` <a name="reset_last_updated_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetLastUpdatedTime"></a>

```python
def reset_last_updated_time() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_variable_type` <a name="reset_variable_type" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.resetVariableType"></a>

```python
def reset_variable_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList">FrauddetectorDetectorEventTypeEventVariablesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.createdTimeInput">created_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataSourceInput">data_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.inlineInput">inline_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTimeInput">last_updated_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.variableTypeInput">variable_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.inline">inline</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.variableType">variable_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.tags"></a>

```python
tags: FrauddetectorDetectorEventTypeEventVariablesTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList">FrauddetectorDetectorEventTypeEventVariablesTagsList</a>

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `created_time_input`<sup>Optional</sup> <a name="created_time_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.createdTimeInput"></a>

```python
created_time_input: str
```

- *Type:* str

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataSourceInput"></a>

```python
data_source_input: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `inline_input`<sup>Optional</sup> <a name="inline_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.inlineInput"></a>

```python
inline_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `last_updated_time_input`<sup>Optional</sup> <a name="last_updated_time_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTimeInput"></a>

```python
last_updated_time_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[FrauddetectorDetectorEventTypeEventVariablesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>]

---

##### `variable_type_input`<sup>Optional</sup> <a name="variable_type_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.variableTypeInput"></a>

```python
variable_type_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.inline"></a>

```python
inline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `variable_type`<sup>Required</sup> <a name="variable_type" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.variableType"></a>

```python
variable_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorDetectorEventTypeEventVariables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>

---


### FrauddetectorDetectorEventTypeEventVariablesTagsList <a name="FrauddetectorDetectorEventTypeEventVariablesTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorDetectorEventTypeEventVariablesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>]

---


### FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference <a name="FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorDetectorEventTypeEventVariablesTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesTags">FrauddetectorDetectorEventTypeEventVariablesTags</a>

---


### FrauddetectorDetectorEventTypeLabelsList <a name="FrauddetectorDetectorEventTypeLabelsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorDetectorEventTypeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorDetectorEventTypeLabels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>]

---


### FrauddetectorDetectorEventTypeLabelsOutputReference <a name="FrauddetectorDetectorEventTypeLabelsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetCreatedTime">reset_created_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetInline">reset_inline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetLastUpdatedTime">reset_last_updated_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[FrauddetectorDetectorEventTypeLabelsTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>]

---

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_created_time` <a name="reset_created_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetCreatedTime"></a>

```python
def reset_created_time() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_inline` <a name="reset_inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetInline"></a>

```python
def reset_inline() -> None
```

##### `reset_last_updated_time` <a name="reset_last_updated_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetLastUpdatedTime"></a>

```python
def reset_last_updated_time() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList">FrauddetectorDetectorEventTypeLabelsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.createdTimeInput">created_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.inlineInput">inline_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.lastUpdatedTimeInput">last_updated_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.inline">inline</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.tags"></a>

```python
tags: FrauddetectorDetectorEventTypeLabelsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList">FrauddetectorDetectorEventTypeLabelsTagsList</a>

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `created_time_input`<sup>Optional</sup> <a name="created_time_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.createdTimeInput"></a>

```python
created_time_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `inline_input`<sup>Optional</sup> <a name="inline_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.inlineInput"></a>

```python
inline_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `last_updated_time_input`<sup>Optional</sup> <a name="last_updated_time_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.lastUpdatedTimeInput"></a>

```python
last_updated_time_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[FrauddetectorDetectorEventTypeLabelsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.inline"></a>

```python
inline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorDetectorEventTypeLabels
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>

---


### FrauddetectorDetectorEventTypeLabelsTagsList <a name="FrauddetectorDetectorEventTypeLabelsTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorDetectorEventTypeLabelsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorDetectorEventTypeLabelsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>]

---


### FrauddetectorDetectorEventTypeLabelsTagsOutputReference <a name="FrauddetectorDetectorEventTypeLabelsTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorDetectorEventTypeLabelsTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsTags">FrauddetectorDetectorEventTypeLabelsTags</a>

---


### FrauddetectorDetectorEventTypeOutputReference <a name="FrauddetectorDetectorEventTypeOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putEntityTypes">put_entity_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putEventVariables">put_event_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetEntityTypes">reset_entity_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetEventVariables">reset_event_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetInline">reset_inline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_entity_types` <a name="put_entity_types" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putEntityTypes"></a>

```python
def put_entity_types(
  value: IResolvable | typing.List[FrauddetectorDetectorEventTypeEntityTypes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>]

---

##### `put_event_variables` <a name="put_event_variables" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putEventVariables"></a>

```python
def put_event_variables(
  value: IResolvable | typing.List[FrauddetectorDetectorEventTypeEventVariables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putEventVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>]

---

##### `put_labels` <a name="put_labels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putLabels"></a>

```python
def put_labels(
  value: IResolvable | typing.List[FrauddetectorDetectorEventTypeLabels]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putLabels.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[FrauddetectorDetectorEventTypeTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_entity_types` <a name="reset_entity_types" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetEntityTypes"></a>

```python
def reset_entity_types() -> None
```

##### `reset_event_variables` <a name="reset_event_variables" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetEventVariables"></a>

```python
def reset_event_variables() -> None
```

##### `reset_inline` <a name="reset_inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetInline"></a>

```python
def reset_inline() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.entityTypes">entity_types</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList">FrauddetectorDetectorEventTypeEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.eventVariables">event_variables</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList">FrauddetectorDetectorEventTypeEventVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList">FrauddetectorDetectorEventTypeLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList">FrauddetectorDetectorEventTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.entityTypesInput">entity_types_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.eventVariablesInput">event_variables_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.inlineInput">inline_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.labelsInput">labels_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.inline">inline</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `entity_types`<sup>Required</sup> <a name="entity_types" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.entityTypes"></a>

```python
entity_types: FrauddetectorDetectorEventTypeEntityTypesList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypesList">FrauddetectorDetectorEventTypeEntityTypesList</a>

---

##### `event_variables`<sup>Required</sup> <a name="event_variables" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.eventVariables"></a>

```python
event_variables: FrauddetectorDetectorEventTypeEventVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariablesList">FrauddetectorDetectorEventTypeEventVariablesList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.labels"></a>

```python
labels: FrauddetectorDetectorEventTypeLabelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabelsList">FrauddetectorDetectorEventTypeLabelsList</a>

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.tags"></a>

```python
tags: FrauddetectorDetectorEventTypeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList">FrauddetectorDetectorEventTypeTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `entity_types_input`<sup>Optional</sup> <a name="entity_types_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.entityTypesInput"></a>

```python
entity_types_input: IResolvable | typing.List[FrauddetectorDetectorEventTypeEntityTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEntityTypes">FrauddetectorDetectorEventTypeEntityTypes</a>]

---

##### `event_variables_input`<sup>Optional</sup> <a name="event_variables_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.eventVariablesInput"></a>

```python
event_variables_input: IResolvable | typing.List[FrauddetectorDetectorEventTypeEventVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeEventVariables">FrauddetectorDetectorEventTypeEventVariables</a>]

---

##### `inline_input`<sup>Optional</sup> <a name="inline_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.inlineInput"></a>

```python
inline_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.labelsInput"></a>

```python
labels_input: IResolvable | typing.List[FrauddetectorDetectorEventTypeLabels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeLabels">FrauddetectorDetectorEventTypeLabels</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[FrauddetectorDetectorEventTypeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.inline"></a>

```python
inline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorDetectorEventType
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventType">FrauddetectorDetectorEventType</a>

---


### FrauddetectorDetectorEventTypeTagsList <a name="FrauddetectorDetectorEventTypeTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorDetectorEventTypeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorDetectorEventTypeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>]

---


### FrauddetectorDetectorEventTypeTagsOutputReference <a name="FrauddetectorDetectorEventTypeTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorDetectorEventTypeTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorEventTypeTags">FrauddetectorDetectorEventTypeTags</a>

---


### FrauddetectorDetectorRulesList <a name="FrauddetectorDetectorRulesList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorDetectorRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorDetectorRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>]

---


### FrauddetectorDetectorRulesOutcomesList <a name="FrauddetectorDetectorRulesOutcomesList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorDetectorRulesOutcomesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorDetectorRulesOutcomes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>]

---


### FrauddetectorDetectorRulesOutcomesOutputReference <a name="FrauddetectorDetectorRulesOutcomesOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetCreatedTime">reset_created_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetInline">reset_inline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetLastUpdatedTime">reset_last_updated_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[FrauddetectorDetectorRulesOutcomesTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>]

---

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_created_time` <a name="reset_created_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetCreatedTime"></a>

```python
def reset_created_time() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_inline` <a name="reset_inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetInline"></a>

```python
def reset_inline() -> None
```

##### `reset_last_updated_time` <a name="reset_last_updated_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetLastUpdatedTime"></a>

```python
def reset_last_updated_time() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList">FrauddetectorDetectorRulesOutcomesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.createdTimeInput">created_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.inlineInput">inline_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.lastUpdatedTimeInput">last_updated_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.inline">inline</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.tags"></a>

```python
tags: FrauddetectorDetectorRulesOutcomesTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList">FrauddetectorDetectorRulesOutcomesTagsList</a>

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `created_time_input`<sup>Optional</sup> <a name="created_time_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.createdTimeInput"></a>

```python
created_time_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `inline_input`<sup>Optional</sup> <a name="inline_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.inlineInput"></a>

```python
inline_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `last_updated_time_input`<sup>Optional</sup> <a name="last_updated_time_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.lastUpdatedTimeInput"></a>

```python
last_updated_time_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[FrauddetectorDetectorRulesOutcomesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.inline"></a>

```python
inline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorDetectorRulesOutcomes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>

---


### FrauddetectorDetectorRulesOutcomesTagsList <a name="FrauddetectorDetectorRulesOutcomesTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorDetectorRulesOutcomesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorDetectorRulesOutcomesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>]

---


### FrauddetectorDetectorRulesOutcomesTagsOutputReference <a name="FrauddetectorDetectorRulesOutcomesTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorDetectorRulesOutcomesTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesTags">FrauddetectorDetectorRulesOutcomesTags</a>

---


### FrauddetectorDetectorRulesOutputReference <a name="FrauddetectorDetectorRulesOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.putOutcomes">put_outcomes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetCreatedTime">reset_created_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetDetectorId">reset_detector_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetLanguage">reset_language</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetLastUpdatedTime">reset_last_updated_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetOutcomes">reset_outcomes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetRuleId">reset_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetRuleVersion">reset_rule_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_outcomes` <a name="put_outcomes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.putOutcomes"></a>

```python
def put_outcomes(
  value: IResolvable | typing.List[FrauddetectorDetectorRulesOutcomes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.putOutcomes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[FrauddetectorDetectorRulesTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>]

---

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_created_time` <a name="reset_created_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetCreatedTime"></a>

```python
def reset_created_time() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_detector_id` <a name="reset_detector_id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetDetectorId"></a>

```python
def reset_detector_id() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_language` <a name="reset_language" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetLanguage"></a>

```python
def reset_language() -> None
```

##### `reset_last_updated_time` <a name="reset_last_updated_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetLastUpdatedTime"></a>

```python
def reset_last_updated_time() -> None
```

##### `reset_outcomes` <a name="reset_outcomes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetOutcomes"></a>

```python
def reset_outcomes() -> None
```

##### `reset_rule_id` <a name="reset_rule_id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetRuleId"></a>

```python
def reset_rule_id() -> None
```

##### `reset_rule_version` <a name="reset_rule_version" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetRuleVersion"></a>

```python
def reset_rule_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.outcomes">outcomes</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList">FrauddetectorDetectorRulesOutcomesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList">FrauddetectorDetectorRulesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.createdTimeInput">created_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.detectorIdInput">detector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.lastUpdatedTimeInput">last_updated_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.outcomesInput">outcomes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleIdInput">rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleVersionInput">rule_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.detectorId">detector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleVersion">rule_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `outcomes`<sup>Required</sup> <a name="outcomes" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.outcomes"></a>

```python
outcomes: FrauddetectorDetectorRulesOutcomesList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomesList">FrauddetectorDetectorRulesOutcomesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.tags"></a>

```python
tags: FrauddetectorDetectorRulesTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList">FrauddetectorDetectorRulesTagsList</a>

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `created_time_input`<sup>Optional</sup> <a name="created_time_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.createdTimeInput"></a>

```python
created_time_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `detector_id_input`<sup>Optional</sup> <a name="detector_id_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.detectorIdInput"></a>

```python
detector_id_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `last_updated_time_input`<sup>Optional</sup> <a name="last_updated_time_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.lastUpdatedTimeInput"></a>

```python
last_updated_time_input: str
```

- *Type:* str

---

##### `outcomes_input`<sup>Optional</sup> <a name="outcomes_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.outcomesInput"></a>

```python
outcomes_input: IResolvable | typing.List[FrauddetectorDetectorRulesOutcomes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutcomes">FrauddetectorDetectorRulesOutcomes</a>]

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleIdInput"></a>

```python
rule_id_input: str
```

- *Type:* str

---

##### `rule_version_input`<sup>Optional</sup> <a name="rule_version_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleVersionInput"></a>

```python
rule_version_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[FrauddetectorDetectorRulesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `detector_id`<sup>Required</sup> <a name="detector_id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.detectorId"></a>

```python
detector_id: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `rule_version`<sup>Required</sup> <a name="rule_version" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.ruleVersion"></a>

```python
rule_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorDetectorRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRules">FrauddetectorDetectorRules</a>

---


### FrauddetectorDetectorRulesTagsList <a name="FrauddetectorDetectorRulesTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorRulesTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorDetectorRulesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorDetectorRulesTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>]

---


### FrauddetectorDetectorRulesTagsOutputReference <a name="FrauddetectorDetectorRulesTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorDetectorRulesTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorRulesTags">FrauddetectorDetectorRulesTags</a>

---


### FrauddetectorDetectorTagsList <a name="FrauddetectorDetectorTagsList" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrauddetectorDetectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FrauddetectorDetectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>]

---


### FrauddetectorDetectorTagsOutputReference <a name="FrauddetectorDetectorTagsOutputReference" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import frauddetector_detector

frauddetectorDetector.FrauddetectorDetectorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FrauddetectorDetectorTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.frauddetectorDetector.FrauddetectorDetectorTags">FrauddetectorDetectorTags</a>

---



