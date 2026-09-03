# `shieldProactiveEngagement` Submodule <a name="`shieldProactiveEngagement` Submodule" id="@cdktn/provider-awscc.shieldProactiveEngagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldProactiveEngagement <a name="ShieldProactiveEngagement" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/shield_proactive_engagement awscc_shield_proactive_engagement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer"></a>

```python
from cdktn_provider_awscc import shield_proactive_engagement

shieldProactiveEngagement.ShieldProactiveEngagement(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  emergency_contact_list: IResolvable | typing.List[ShieldProactiveEngagementEmergencyContactListStruct],
  proactive_engagement_status: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.emergencyContactList">emergency_contact_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>]</code> | A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.proactiveEngagementStatus">proactive_engagement_status</a></code> | <code>str</code> | If `ENABLED`, the Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `emergency_contact_list`<sup>Required</sup> <a name="emergency_contact_list" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.emergencyContactList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>]

A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support.

To enable proactive engagement, the contact list must include at least one phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/shield_proactive_engagement#emergency_contact_list ShieldProactiveEngagement#emergency_contact_list}

---

##### `proactive_engagement_status`<sup>Required</sup> <a name="proactive_engagement_status" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.proactiveEngagementStatus"></a>

- *Type:* str

If `ENABLED`, the Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.

If `DISABLED`, the SRT will not proactively notify contacts about escalations or to initiate proactive customer support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/shield_proactive_engagement#proactive_engagement_status ShieldProactiveEngagement#proactive_engagement_status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContactList">put_emergency_contact_list</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_emergency_contact_list` <a name="put_emergency_contact_list" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContactList"></a>

```python
def put_emergency_contact_list(
  value: IResolvable | typing.List[ShieldProactiveEngagementEmergencyContactListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContactList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ShieldProactiveEngagement resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct"></a>

```python
from cdktn_provider_awscc import shield_proactive_engagement

shieldProactiveEngagement.ShieldProactiveEngagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement"></a>

```python
from cdktn_provider_awscc import shield_proactive_engagement

shieldProactiveEngagement.ShieldProactiveEngagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource"></a>

```python
from cdktn_provider_awscc import shield_proactive_engagement

shieldProactiveEngagement.ShieldProactiveEngagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import shield_proactive_engagement

shieldProactiveEngagement.ShieldProactiveEngagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ShieldProactiveEngagement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ShieldProactiveEngagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ShieldProactiveEngagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/shield_proactive_engagement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ShieldProactiveEngagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactList">emergency_contact_list</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList">ShieldProactiveEngagementEmergencyContactListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactListInput">emergency_contact_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.proactiveEngagementStatusInput">proactive_engagement_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.proactiveEngagementStatus">proactive_engagement_status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `emergency_contact_list`<sup>Required</sup> <a name="emergency_contact_list" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactList"></a>

```python
emergency_contact_list: ShieldProactiveEngagementEmergencyContactListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList">ShieldProactiveEngagementEmergencyContactListStructList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `emergency_contact_list_input`<sup>Optional</sup> <a name="emergency_contact_list_input" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactListInput"></a>

```python
emergency_contact_list_input: IResolvable | typing.List[ShieldProactiveEngagementEmergencyContactListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>]

---

##### `proactive_engagement_status_input`<sup>Optional</sup> <a name="proactive_engagement_status_input" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.proactiveEngagementStatusInput"></a>

```python
proactive_engagement_status_input: str
```

- *Type:* str

---

##### `proactive_engagement_status`<sup>Required</sup> <a name="proactive_engagement_status" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.proactiveEngagementStatus"></a>

```python
proactive_engagement_status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldProactiveEngagementConfig <a name="ShieldProactiveEngagementConfig" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.Initializer"></a>

```python
from cdktn_provider_awscc import shield_proactive_engagement

shieldProactiveEngagement.ShieldProactiveEngagementConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  emergency_contact_list: IResolvable | typing.List[ShieldProactiveEngagementEmergencyContactListStruct],
  proactive_engagement_status: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.emergencyContactList">emergency_contact_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>]</code> | A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.proactiveEngagementStatus">proactive_engagement_status</a></code> | <code>str</code> | If `ENABLED`, the Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `emergency_contact_list`<sup>Required</sup> <a name="emergency_contact_list" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.emergencyContactList"></a>

```python
emergency_contact_list: IResolvable | typing.List[ShieldProactiveEngagementEmergencyContactListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>]

A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support.

To enable proactive engagement, the contact list must include at least one phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/shield_proactive_engagement#emergency_contact_list ShieldProactiveEngagement#emergency_contact_list}

---

##### `proactive_engagement_status`<sup>Required</sup> <a name="proactive_engagement_status" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.proactiveEngagementStatus"></a>

```python
proactive_engagement_status: str
```

- *Type:* str

If `ENABLED`, the Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.

If `DISABLED`, the SRT will not proactively notify contacts about escalations or to initiate proactive customer support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/shield_proactive_engagement#proactive_engagement_status ShieldProactiveEngagement#proactive_engagement_status}

---

### ShieldProactiveEngagementEmergencyContactListStruct <a name="ShieldProactiveEngagementEmergencyContactListStruct" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import shield_proactive_engagement

shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct(
  email_address: str,
  contact_notes: str = None,
  phone_number: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.property.emailAddress">email_address</a></code> | <code>str</code> | The email address for the contact. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.property.contactNotes">contact_notes</a></code> | <code>str</code> | Additional notes regarding the contact. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.property.phoneNumber">phone_number</a></code> | <code>str</code> | The phone number for the contact. |

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

The email address for the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/shield_proactive_engagement#email_address ShieldProactiveEngagement#email_address}

---

##### `contact_notes`<sup>Optional</sup> <a name="contact_notes" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.property.contactNotes"></a>

```python
contact_notes: str
```

- *Type:* str

Additional notes regarding the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/shield_proactive_engagement#contact_notes ShieldProactiveEngagement#contact_notes}

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

The phone number for the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/shield_proactive_engagement#phone_number ShieldProactiveEngagement#phone_number}

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldProactiveEngagementEmergencyContactListStructList <a name="ShieldProactiveEngagementEmergencyContactListStructList" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import shield_proactive_engagement

shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ShieldProactiveEngagementEmergencyContactListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ShieldProactiveEngagementEmergencyContactListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>]

---


### ShieldProactiveEngagementEmergencyContactListStructOutputReference <a name="ShieldProactiveEngagementEmergencyContactListStructOutputReference" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import shield_proactive_engagement

shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resetContactNotes">reset_contact_notes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_contact_notes` <a name="reset_contact_notes" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resetContactNotes"></a>

```python
def reset_contact_notes() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.contactNotesInput">contact_notes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.emailAddressInput">email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.contactNotes">contact_notes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contact_notes_input`<sup>Optional</sup> <a name="contact_notes_input" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.contactNotesInput"></a>

```python
contact_notes_input: str
```

- *Type:* str

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.emailAddressInput"></a>

```python
email_address_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `contact_notes`<sup>Required</sup> <a name="contact_notes" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.contactNotes"></a>

```python
contact_notes: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ShieldProactiveEngagementEmergencyContactListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>

---



