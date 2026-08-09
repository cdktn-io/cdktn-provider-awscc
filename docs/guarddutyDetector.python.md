# `guarddutyDetector` Submodule <a name="`guarddutyDetector` Submodule" id="@cdktn/provider-awscc.guarddutyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyDetector <a name="GuarddutyDetector" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector awscc_guardduty_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enable: bool | IResolvable,
  data_sources: GuarddutyDetectorDataSources = None,
  features: IResolvable | typing.List[GuarddutyDetectorFeatures] = None,
  finding_publishing_frequency: str = None,
  tags: IResolvable | typing.List[GuarddutyDetectorTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.dataSources">data_sources</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources">GuarddutyDetectorDataSources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#data_sources GuarddutyDetector#data_sources}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.features">features</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#features GuarddutyDetector#features}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.findingPublishingFrequency">finding_publishing_frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#tags GuarddutyDetector#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.enable"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}.

---

##### `data_sources`<sup>Optional</sup> <a name="data_sources" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.dataSources"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources">GuarddutyDetectorDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#data_sources GuarddutyDetector#data_sources}.

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.features"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#features GuarddutyDetector#features}.

---

##### `finding_publishing_frequency`<sup>Optional</sup> <a name="finding_publishing_frequency" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.findingPublishingFrequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#tags GuarddutyDetector#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putDataSources">put_data_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putFeatures">put_features</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetDataSources">reset_data_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetFeatures">reset_features</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetFindingPublishingFrequency">reset_finding_publishing_frequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_sources` <a name="put_data_sources" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putDataSources"></a>

```python
def put_data_sources(
  kubernetes: GuarddutyDetectorDataSourcesKubernetes = None,
  malware_protection: GuarddutyDetectorDataSourcesMalwareProtection = None,
  s3_logs: GuarddutyDetectorDataSourcesS3Logs = None
) -> None
```

###### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putDataSources.parameter.kubernetes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes">GuarddutyDetectorDataSourcesKubernetes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#kubernetes GuarddutyDetector#kubernetes}.

---

###### `malware_protection`<sup>Optional</sup> <a name="malware_protection" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putDataSources.parameter.malwareProtection"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection">GuarddutyDetectorDataSourcesMalwareProtection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#malware_protection GuarddutyDetector#malware_protection}.

---

###### `s3_logs`<sup>Optional</sup> <a name="s3_logs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putDataSources.parameter.s3Logs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs">GuarddutyDetectorDataSourcesS3Logs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#s3_logs GuarddutyDetector#s3_logs}.

---

##### `put_features` <a name="put_features" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putFeatures"></a>

```python
def put_features(
  value: IResolvable | typing.List[GuarddutyDetectorFeatures]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putFeatures.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[GuarddutyDetectorTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>]

---

##### `reset_data_sources` <a name="reset_data_sources" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetDataSources"></a>

```python
def reset_data_sources() -> None
```

##### `reset_features` <a name="reset_features" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetFeatures"></a>

```python
def reset_features() -> None
```

##### `reset_finding_publishing_frequency` <a name="reset_finding_publishing_frequency" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetFindingPublishingFrequency"></a>

```python
def reset_finding_publishing_frequency() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GuarddutyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.isConstruct"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.isTerraformElement"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.isTerraformResource"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GuarddutyDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GuarddutyDetector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GuarddutyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GuarddutyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.dataSources">data_sources</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference">GuarddutyDetectorDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.detectorId">detector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.features">features</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList">GuarddutyDetectorFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList">GuarddutyDetectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.dataSourcesInput">data_sources_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources">GuarddutyDetectorDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.enableInput">enable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.featuresInput">features_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequencyInput">finding_publishing_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequency">finding_publishing_frequency</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_sources`<sup>Required</sup> <a name="data_sources" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.dataSources"></a>

```python
data_sources: GuarddutyDetectorDataSourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference">GuarddutyDetectorDataSourcesOutputReference</a>

---

##### `detector_id`<sup>Required</sup> <a name="detector_id" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.detectorId"></a>

```python
detector_id: str
```

- *Type:* str

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.features"></a>

```python
features: GuarddutyDetectorFeaturesList
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList">GuarddutyDetectorFeaturesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.tags"></a>

```python
tags: GuarddutyDetectorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList">GuarddutyDetectorTagsList</a>

---

##### `data_sources_input`<sup>Optional</sup> <a name="data_sources_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.dataSourcesInput"></a>

```python
data_sources_input: IResolvable | GuarddutyDetectorDataSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources">GuarddutyDetectorDataSources</a>

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.enableInput"></a>

```python
enable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `features_input`<sup>Optional</sup> <a name="features_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.featuresInput"></a>

```python
features_input: IResolvable | typing.List[GuarddutyDetectorFeatures]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>]

---

##### `finding_publishing_frequency_input`<sup>Optional</sup> <a name="finding_publishing_frequency_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequencyInput"></a>

```python
finding_publishing_frequency_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[GuarddutyDetectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `finding_publishing_frequency`<sup>Required</sup> <a name="finding_publishing_frequency" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequency"></a>

```python
finding_publishing_frequency: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyDetectorConfig <a name="GuarddutyDetectorConfig" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enable: bool | IResolvable,
  data_sources: GuarddutyDetectorDataSources = None,
  features: IResolvable | typing.List[GuarddutyDetectorFeatures] = None,
  finding_publishing_frequency: str = None,
  tags: IResolvable | typing.List[GuarddutyDetectorTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.dataSources">data_sources</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources">GuarddutyDetectorDataSources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#data_sources GuarddutyDetector#data_sources}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.features">features</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#features GuarddutyDetector#features}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.findingPublishingFrequency">finding_publishing_frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#tags GuarddutyDetector#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}.

---

##### `data_sources`<sup>Optional</sup> <a name="data_sources" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.dataSources"></a>

```python
data_sources: GuarddutyDetectorDataSources
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources">GuarddutyDetectorDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#data_sources GuarddutyDetector#data_sources}.

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.features"></a>

```python
features: IResolvable | typing.List[GuarddutyDetectorFeatures]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#features GuarddutyDetector#features}.

---

##### `finding_publishing_frequency`<sup>Optional</sup> <a name="finding_publishing_frequency" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.findingPublishingFrequency"></a>

```python
finding_publishing_frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[GuarddutyDetectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#tags GuarddutyDetector#tags}.

---

### GuarddutyDetectorDataSources <a name="GuarddutyDetectorDataSources" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorDataSources(
  kubernetes: GuarddutyDetectorDataSourcesKubernetes = None,
  malware_protection: GuarddutyDetectorDataSourcesMalwareProtection = None,
  s3_logs: GuarddutyDetectorDataSourcesS3Logs = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes">GuarddutyDetectorDataSourcesKubernetes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#kubernetes GuarddutyDetector#kubernetes}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources.property.malwareProtection">malware_protection</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection">GuarddutyDetectorDataSourcesMalwareProtection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#malware_protection GuarddutyDetector#malware_protection}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources.property.s3Logs">s3_logs</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs">GuarddutyDetectorDataSourcesS3Logs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#s3_logs GuarddutyDetector#s3_logs}. |

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources.property.kubernetes"></a>

```python
kubernetes: GuarddutyDetectorDataSourcesKubernetes
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes">GuarddutyDetectorDataSourcesKubernetes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#kubernetes GuarddutyDetector#kubernetes}.

---

##### `malware_protection`<sup>Optional</sup> <a name="malware_protection" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources.property.malwareProtection"></a>

```python
malware_protection: GuarddutyDetectorDataSourcesMalwareProtection
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection">GuarddutyDetectorDataSourcesMalwareProtection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#malware_protection GuarddutyDetector#malware_protection}.

---

##### `s3_logs`<sup>Optional</sup> <a name="s3_logs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources.property.s3Logs"></a>

```python
s3_logs: GuarddutyDetectorDataSourcesS3Logs
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs">GuarddutyDetectorDataSourcesS3Logs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#s3_logs GuarddutyDetector#s3_logs}.

---

### GuarddutyDetectorDataSourcesKubernetes <a name="GuarddutyDetectorDataSourcesKubernetes" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes(
  audit_logs: GuarddutyDetectorDataSourcesKubernetesAuditLogs = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes.property.auditLogs">audit_logs</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs">GuarddutyDetectorDataSourcesKubernetesAuditLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#audit_logs GuarddutyDetector#audit_logs}. |

---

##### `audit_logs`<sup>Optional</sup> <a name="audit_logs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes.property.auditLogs"></a>

```python
audit_logs: GuarddutyDetectorDataSourcesKubernetesAuditLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs">GuarddutyDetectorDataSourcesKubernetesAuditLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#audit_logs GuarddutyDetector#audit_logs}.

---

### GuarddutyDetectorDataSourcesKubernetesAuditLogs <a name="GuarddutyDetectorDataSourcesKubernetesAuditLogs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs(
  enable: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}.

---

### GuarddutyDetectorDataSourcesMalwareProtection <a name="GuarddutyDetectorDataSourcesMalwareProtection" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection(
  scan_ec2_instance_with_findings: GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection.property.scanEc2InstanceWithFindings">scan_ec2_instance_with_findings</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#scan_ec_2_instance_with_findings GuarddutyDetector#scan_ec_2_instance_with_findings}. |

---

##### `scan_ec2_instance_with_findings`<sup>Optional</sup> <a name="scan_ec2_instance_with_findings" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection.property.scanEc2InstanceWithFindings"></a>

```python
scan_ec2_instance_with_findings: GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#scan_ec_2_instance_with_findings GuarddutyDetector#scan_ec_2_instance_with_findings}.

---

### GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings <a name="GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings(
  ebs_volumes: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings.property.ebsVolumes">ebs_volumes</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#ebs_volumes GuarddutyDetector#ebs_volumes}. |

---

##### `ebs_volumes`<sup>Optional</sup> <a name="ebs_volumes" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings.property.ebsVolumes"></a>

```python
ebs_volumes: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#ebs_volumes GuarddutyDetector#ebs_volumes}.

---

### GuarddutyDetectorDataSourcesS3Logs <a name="GuarddutyDetectorDataSourcesS3Logs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs(
  enable: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}.

---

### GuarddutyDetectorFeatures <a name="GuarddutyDetectorFeatures" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorFeatures(
  additional_configuration: IResolvable | typing.List[GuarddutyDetectorFeaturesAdditionalConfiguration] = None,
  name: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures.property.additionalConfiguration">additional_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration">GuarddutyDetectorFeaturesAdditionalConfiguration</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#additional_configuration GuarddutyDetector#additional_configuration}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#name GuarddutyDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#status GuarddutyDetector#status}. |

---

##### `additional_configuration`<sup>Optional</sup> <a name="additional_configuration" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures.property.additionalConfiguration"></a>

```python
additional_configuration: IResolvable | typing.List[GuarddutyDetectorFeaturesAdditionalConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration">GuarddutyDetectorFeaturesAdditionalConfiguration</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#additional_configuration GuarddutyDetector#additional_configuration}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#name GuarddutyDetector#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#status GuarddutyDetector#status}.

---

### GuarddutyDetectorFeaturesAdditionalConfiguration <a name="GuarddutyDetectorFeaturesAdditionalConfiguration" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration(
  name: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#name GuarddutyDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#status GuarddutyDetector#status}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#name GuarddutyDetector#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#status GuarddutyDetector#status}.

---

### GuarddutyDetectorTags <a name="GuarddutyDetectorTags" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#key GuarddutyDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#value GuarddutyDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#key GuarddutyDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#value GuarddutyDetector#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference <a name="GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.resetEnable">reset_enable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable` <a name="reset_enable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.enableInput">enable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs">GuarddutyDetectorDataSourcesKubernetesAuditLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.enableInput"></a>

```python
enable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GuarddutyDetectorDataSourcesKubernetesAuditLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs">GuarddutyDetectorDataSourcesKubernetesAuditLogs</a>

---


### GuarddutyDetectorDataSourcesKubernetesOutputReference <a name="GuarddutyDetectorDataSourcesKubernetesOutputReference" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.putAuditLogs">put_audit_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.resetAuditLogs">reset_audit_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audit_logs` <a name="put_audit_logs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.putAuditLogs"></a>

```python
def put_audit_logs(
  enable: bool | IResolvable = None
) -> None
```

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.putAuditLogs.parameter.enable"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}.

---

##### `reset_audit_logs` <a name="reset_audit_logs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.resetAuditLogs"></a>

```python
def reset_audit_logs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.auditLogs">audit_logs</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference">GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.auditLogsInput">audit_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs">GuarddutyDetectorDataSourcesKubernetesAuditLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes">GuarddutyDetectorDataSourcesKubernetes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audit_logs`<sup>Required</sup> <a name="audit_logs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.auditLogs"></a>

```python
audit_logs: GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference">GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference</a>

---

##### `audit_logs_input`<sup>Optional</sup> <a name="audit_logs_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.auditLogsInput"></a>

```python
audit_logs_input: IResolvable | GuarddutyDetectorDataSourcesKubernetesAuditLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs">GuarddutyDetectorDataSourcesKubernetesAuditLogs</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GuarddutyDetectorDataSourcesKubernetes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes">GuarddutyDetectorDataSourcesKubernetes</a>

---


### GuarddutyDetectorDataSourcesMalwareProtectionOutputReference <a name="GuarddutyDetectorDataSourcesMalwareProtectionOutputReference" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings">put_scan_ec2_instance_with_findings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.resetScanEc2InstanceWithFindings">reset_scan_ec2_instance_with_findings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scan_ec2_instance_with_findings` <a name="put_scan_ec2_instance_with_findings" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings"></a>

```python
def put_scan_ec2_instance_with_findings(
  ebs_volumes: bool | IResolvable = None
) -> None
```

###### `ebs_volumes`<sup>Optional</sup> <a name="ebs_volumes" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings.parameter.ebsVolumes"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#ebs_volumes GuarddutyDetector#ebs_volumes}.

---

##### `reset_scan_ec2_instance_with_findings` <a name="reset_scan_ec2_instance_with_findings" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.resetScanEc2InstanceWithFindings"></a>

```python
def reset_scan_ec2_instance_with_findings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindings">scan_ec2_instance_with_findings</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference">GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindingsInput">scan_ec2_instance_with_findings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection">GuarddutyDetectorDataSourcesMalwareProtection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scan_ec2_instance_with_findings`<sup>Required</sup> <a name="scan_ec2_instance_with_findings" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindings"></a>

```python
scan_ec2_instance_with_findings: GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference">GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference</a>

---

##### `scan_ec2_instance_with_findings_input`<sup>Optional</sup> <a name="scan_ec2_instance_with_findings_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindingsInput"></a>

```python
scan_ec2_instance_with_findings_input: IResolvable | GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GuarddutyDetectorDataSourcesMalwareProtection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection">GuarddutyDetectorDataSourcesMalwareProtection</a>

---


### GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference <a name="GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resetEbsVolumes">reset_ebs_volumes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ebs_volumes` <a name="reset_ebs_volumes" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resetEbsVolumes"></a>

```python
def reset_ebs_volumes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumesInput">ebs_volumes_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumes">ebs_volumes</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs_volumes_input`<sup>Optional</sup> <a name="ebs_volumes_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumesInput"></a>

```python
ebs_volumes_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ebs_volumes`<sup>Required</sup> <a name="ebs_volumes" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumes"></a>

```python
ebs_volumes: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings</a>

---


### GuarddutyDetectorDataSourcesOutputReference <a name="GuarddutyDetectorDataSourcesOutputReference" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.putKubernetes">put_kubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.putMalwareProtection">put_malware_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.putS3Logs">put_s3_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.resetKubernetes">reset_kubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.resetMalwareProtection">reset_malware_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.resetS3Logs">reset_s3_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_kubernetes` <a name="put_kubernetes" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.putKubernetes"></a>

```python
def put_kubernetes(
  audit_logs: GuarddutyDetectorDataSourcesKubernetesAuditLogs = None
) -> None
```

###### `audit_logs`<sup>Optional</sup> <a name="audit_logs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.putKubernetes.parameter.auditLogs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs">GuarddutyDetectorDataSourcesKubernetesAuditLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#audit_logs GuarddutyDetector#audit_logs}.

---

##### `put_malware_protection` <a name="put_malware_protection" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.putMalwareProtection"></a>

```python
def put_malware_protection(
  scan_ec2_instance_with_findings: GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings = None
) -> None
```

###### `scan_ec2_instance_with_findings`<sup>Optional</sup> <a name="scan_ec2_instance_with_findings" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.putMalwareProtection.parameter.scanEc2InstanceWithFindings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#scan_ec_2_instance_with_findings GuarddutyDetector#scan_ec_2_instance_with_findings}.

---

##### `put_s3_logs` <a name="put_s3_logs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.putS3Logs"></a>

```python
def put_s3_logs(
  enable: bool | IResolvable = None
) -> None
```

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.putS3Logs.parameter.enable"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}.

---

##### `reset_kubernetes` <a name="reset_kubernetes" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.resetKubernetes"></a>

```python
def reset_kubernetes() -> None
```

##### `reset_malware_protection` <a name="reset_malware_protection" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.resetMalwareProtection"></a>

```python
def reset_malware_protection() -> None
```

##### `reset_s3_logs` <a name="reset_s3_logs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.resetS3Logs"></a>

```python
def reset_s3_logs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference">GuarddutyDetectorDataSourcesKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.malwareProtection">malware_protection</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference">GuarddutyDetectorDataSourcesMalwareProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.s3Logs">s3_logs</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference">GuarddutyDetectorDataSourcesS3LogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.kubernetesInput">kubernetes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes">GuarddutyDetectorDataSourcesKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.malwareProtectionInput">malware_protection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection">GuarddutyDetectorDataSourcesMalwareProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.s3LogsInput">s3_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs">GuarddutyDetectorDataSourcesS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources">GuarddutyDetectorDataSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.kubernetes"></a>

```python
kubernetes: GuarddutyDetectorDataSourcesKubernetesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference">GuarddutyDetectorDataSourcesKubernetesOutputReference</a>

---

##### `malware_protection`<sup>Required</sup> <a name="malware_protection" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.malwareProtection"></a>

```python
malware_protection: GuarddutyDetectorDataSourcesMalwareProtectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference">GuarddutyDetectorDataSourcesMalwareProtectionOutputReference</a>

---

##### `s3_logs`<sup>Required</sup> <a name="s3_logs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.s3Logs"></a>

```python
s3_logs: GuarddutyDetectorDataSourcesS3LogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference">GuarddutyDetectorDataSourcesS3LogsOutputReference</a>

---

##### `kubernetes_input`<sup>Optional</sup> <a name="kubernetes_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.kubernetesInput"></a>

```python
kubernetes_input: IResolvable | GuarddutyDetectorDataSourcesKubernetes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes">GuarddutyDetectorDataSourcesKubernetes</a>

---

##### `malware_protection_input`<sup>Optional</sup> <a name="malware_protection_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.malwareProtectionInput"></a>

```python
malware_protection_input: IResolvable | GuarddutyDetectorDataSourcesMalwareProtection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection">GuarddutyDetectorDataSourcesMalwareProtection</a>

---

##### `s3_logs_input`<sup>Optional</sup> <a name="s3_logs_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.s3LogsInput"></a>

```python
s3_logs_input: IResolvable | GuarddutyDetectorDataSourcesS3Logs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs">GuarddutyDetectorDataSourcesS3Logs</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GuarddutyDetectorDataSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources">GuarddutyDetectorDataSources</a>

---


### GuarddutyDetectorDataSourcesS3LogsOutputReference <a name="GuarddutyDetectorDataSourcesS3LogsOutputReference" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.resetEnable">reset_enable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable` <a name="reset_enable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.enableInput">enable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.enable">enable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs">GuarddutyDetectorDataSourcesS3Logs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.enableInput"></a>

```python
enable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.enable"></a>

```python
enable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GuarddutyDetectorDataSourcesS3Logs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs">GuarddutyDetectorDataSourcesS3Logs</a>

---


### GuarddutyDetectorFeaturesAdditionalConfigurationList <a name="GuarddutyDetectorFeaturesAdditionalConfigurationList" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration">GuarddutyDetectorFeaturesAdditionalConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GuarddutyDetectorFeaturesAdditionalConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration">GuarddutyDetectorFeaturesAdditionalConfiguration</a>]

---


### GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference <a name="GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration">GuarddutyDetectorFeaturesAdditionalConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GuarddutyDetectorFeaturesAdditionalConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration">GuarddutyDetectorFeaturesAdditionalConfiguration</a>

---


### GuarddutyDetectorFeaturesList <a name="GuarddutyDetectorFeaturesList" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorFeaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GuarddutyDetectorFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GuarddutyDetectorFeatures]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>]

---


### GuarddutyDetectorFeaturesOutputReference <a name="GuarddutyDetectorFeaturesOutputReference" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.putAdditionalConfiguration">put_additional_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.resetAdditionalConfiguration">reset_additional_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_additional_configuration` <a name="put_additional_configuration" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.putAdditionalConfiguration"></a>

```python
def put_additional_configuration(
  value: IResolvable | typing.List[GuarddutyDetectorFeaturesAdditionalConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.putAdditionalConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration">GuarddutyDetectorFeaturesAdditionalConfiguration</a>]

---

##### `reset_additional_configuration` <a name="reset_additional_configuration" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.resetAdditionalConfiguration"></a>

```python
def reset_additional_configuration() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.additionalConfiguration">additional_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList">GuarddutyDetectorFeaturesAdditionalConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.additionalConfigurationInput">additional_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration">GuarddutyDetectorFeaturesAdditionalConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_configuration`<sup>Required</sup> <a name="additional_configuration" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.additionalConfiguration"></a>

```python
additional_configuration: GuarddutyDetectorFeaturesAdditionalConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList">GuarddutyDetectorFeaturesAdditionalConfigurationList</a>

---

##### `additional_configuration_input`<sup>Optional</sup> <a name="additional_configuration_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.additionalConfigurationInput"></a>

```python
additional_configuration_input: IResolvable | typing.List[GuarddutyDetectorFeaturesAdditionalConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration">GuarddutyDetectorFeaturesAdditionalConfiguration</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GuarddutyDetectorFeatures
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>

---


### GuarddutyDetectorTagsList <a name="GuarddutyDetectorTagsList" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GuarddutyDetectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GuarddutyDetectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>]

---


### GuarddutyDetectorTagsOutputReference <a name="GuarddutyDetectorTagsOutputReference" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_detector

guarddutyDetector.GuarddutyDetectorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GuarddutyDetectorTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>

---



