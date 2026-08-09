# `guarddutyThreatEntitySet` Submodule <a name="`guarddutyThreatEntitySet` Submodule" id="@cdktn/provider-awscc.guarddutyThreatEntitySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyThreatEntitySet <a name="GuarddutyThreatEntitySet" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set awscc_guardduty_threat_entity_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_threat_entity_set

guarddutyThreatEntitySet.GuarddutyThreatEntitySet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  format: str,
  location: str,
  activate: bool | IResolvable = None,
  detector_id: str = None,
  expected_bucket_owner: str = None,
  name: str = None,
  tags: IResolvable | typing.List[GuarddutyThreatEntitySetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#format GuarddutyThreatEntitySet#format}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#location GuarddutyThreatEntitySet#location}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.activate">activate</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#activate GuarddutyThreatEntitySet#activate}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.detectorId">detector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#detector_id GuarddutyThreatEntitySet#detector_id}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#expected_bucket_owner GuarddutyThreatEntitySet#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#name GuarddutyThreatEntitySet#name}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTags">GuarddutyThreatEntitySetTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#tags GuarddutyThreatEntitySet#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.format"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#format GuarddutyThreatEntitySet#format}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#location GuarddutyThreatEntitySet#location}.

---

##### `activate`<sup>Optional</sup> <a name="activate" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.activate"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#activate GuarddutyThreatEntitySet#activate}.

---

##### `detector_id`<sup>Optional</sup> <a name="detector_id" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.detectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#detector_id GuarddutyThreatEntitySet#detector_id}.

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.expectedBucketOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#expected_bucket_owner GuarddutyThreatEntitySet#expected_bucket_owner}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#name GuarddutyThreatEntitySet#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTags">GuarddutyThreatEntitySetTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#tags GuarddutyThreatEntitySet#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.resetActivate">reset_activate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.resetDetectorId">reset_detector_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[GuarddutyThreatEntitySetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTags">GuarddutyThreatEntitySetTags</a>]

---

##### `reset_activate` <a name="reset_activate" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.resetActivate"></a>

```python
def reset_activate() -> None
```

##### `reset_detector_id` <a name="reset_detector_id" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.resetDetectorId"></a>

```python
def reset_detector_id() -> None
```

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GuarddutyThreatEntitySet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.isConstruct"></a>

```python
from cdktn_provider_awscc import guardduty_threat_entity_set

guarddutyThreatEntitySet.GuarddutyThreatEntitySet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import guardduty_threat_entity_set

guarddutyThreatEntitySet.GuarddutyThreatEntitySet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.isTerraformResource"></a>

```python
from cdktn_provider_awscc import guardduty_threat_entity_set

guarddutyThreatEntitySet.GuarddutyThreatEntitySet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import guardduty_threat_entity_set

guarddutyThreatEntitySet.GuarddutyThreatEntitySet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GuarddutyThreatEntitySet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GuarddutyThreatEntitySet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GuarddutyThreatEntitySet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GuarddutyThreatEntitySet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.errorDetails">error_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList">GuarddutyThreatEntitySetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.threatEntitySetId">threat_entity_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.activateInput">activate_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.detectorIdInput">detector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTags">GuarddutyThreatEntitySetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.activate">activate</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.detectorId">detector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `error_details`<sup>Required</sup> <a name="error_details" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.errorDetails"></a>

```python
error_details: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.tags"></a>

```python
tags: GuarddutyThreatEntitySetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList">GuarddutyThreatEntitySetTagsList</a>

---

##### `threat_entity_set_id`<sup>Required</sup> <a name="threat_entity_set_id" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.threatEntitySetId"></a>

```python
threat_entity_set_id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `activate_input`<sup>Optional</sup> <a name="activate_input" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.activateInput"></a>

```python
activate_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `detector_id_input`<sup>Optional</sup> <a name="detector_id_input" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.detectorIdInput"></a>

```python
detector_id_input: str
```

- *Type:* str

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[GuarddutyThreatEntitySetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTags">GuarddutyThreatEntitySetTags</a>]

---

##### `activate`<sup>Required</sup> <a name="activate" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.activate"></a>

```python
activate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `detector_id`<sup>Required</sup> <a name="detector_id" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.detectorId"></a>

```python
detector_id: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyThreatEntitySetConfig <a name="GuarddutyThreatEntitySetConfig" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_threat_entity_set

guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  format: str,
  location: str,
  activate: bool | IResolvable = None,
  detector_id: str = None,
  expected_bucket_owner: str = None,
  name: str = None,
  tags: IResolvable | typing.List[GuarddutyThreatEntitySetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#format GuarddutyThreatEntitySet#format}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#location GuarddutyThreatEntitySet#location}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.activate">activate</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#activate GuarddutyThreatEntitySet#activate}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.detectorId">detector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#detector_id GuarddutyThreatEntitySet#detector_id}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#expected_bucket_owner GuarddutyThreatEntitySet#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#name GuarddutyThreatEntitySet#name}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTags">GuarddutyThreatEntitySetTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#tags GuarddutyThreatEntitySet#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#format GuarddutyThreatEntitySet#format}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#location GuarddutyThreatEntitySet#location}.

---

##### `activate`<sup>Optional</sup> <a name="activate" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.activate"></a>

```python
activate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#activate GuarddutyThreatEntitySet#activate}.

---

##### `detector_id`<sup>Optional</sup> <a name="detector_id" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.detectorId"></a>

```python
detector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#detector_id GuarddutyThreatEntitySet#detector_id}.

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#expected_bucket_owner GuarddutyThreatEntitySet#expected_bucket_owner}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#name GuarddutyThreatEntitySet#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[GuarddutyThreatEntitySetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTags">GuarddutyThreatEntitySetTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#tags GuarddutyThreatEntitySet#tags}.

---

### GuarddutyThreatEntitySetTags <a name="GuarddutyThreatEntitySetTags" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTags.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_threat_entity_set

guarddutyThreatEntitySet.GuarddutyThreatEntitySetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#key GuarddutyThreatEntitySet#key}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#value GuarddutyThreatEntitySet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#key GuarddutyThreatEntitySet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_threat_entity_set#value GuarddutyThreatEntitySet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyThreatEntitySetTagsList <a name="GuarddutyThreatEntitySetTagsList" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_threat_entity_set

guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GuarddutyThreatEntitySetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTags">GuarddutyThreatEntitySetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GuarddutyThreatEntitySetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTags">GuarddutyThreatEntitySetTags</a>]

---


### GuarddutyThreatEntitySetTagsOutputReference <a name="GuarddutyThreatEntitySetTagsOutputReference" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_threat_entity_set

guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTags">GuarddutyThreatEntitySetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GuarddutyThreatEntitySetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyThreatEntitySet.GuarddutyThreatEntitySetTags">GuarddutyThreatEntitySetTags</a>

---



