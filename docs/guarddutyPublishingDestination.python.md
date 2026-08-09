# `guarddutyPublishingDestination` Submodule <a name="`guarddutyPublishingDestination` Submodule" id="@cdktn/provider-awscc.guarddutyPublishingDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyPublishingDestination <a name="GuarddutyPublishingDestination" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination awscc_guardduty_publishing_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_publishing_destination

guarddutyPublishingDestination.GuarddutyPublishingDestination(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  destination_properties: GuarddutyPublishingDestinationDestinationProperties,
  destination_type: str,
  detector_id: str,
  tags: IResolvable | typing.List[GuarddutyPublishingDestinationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.destinationProperties">destination_properties</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties">GuarddutyPublishingDestinationDestinationProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#destination_properties GuarddutyPublishingDestination#destination_properties}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.destinationType">destination_type</a></code> | <code>str</code> | The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.detectorId">detector_id</a></code> | <code>str</code> | The ID of the GuardDuty detector associated with the publishing destination. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#tags GuarddutyPublishingDestination#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `destination_properties`<sup>Required</sup> <a name="destination_properties" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.destinationProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties">GuarddutyPublishingDestinationDestinationProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#destination_properties GuarddutyPublishingDestination#destination_properties}.

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.destinationType"></a>

- *Type:* str

The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#destination_type GuarddutyPublishingDestination#destination_type}

---

##### `detector_id`<sup>Required</sup> <a name="detector_id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.detectorId"></a>

- *Type:* str

The ID of the GuardDuty detector associated with the publishing destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#detector_id GuarddutyPublishingDestination#detector_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#tags GuarddutyPublishingDestination#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.putDestinationProperties">put_destination_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination_properties` <a name="put_destination_properties" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.putDestinationProperties"></a>

```python
def put_destination_properties(
  destination_arn: str = None,
  kms_key_arn: str = None
) -> None
```

###### `destination_arn`<sup>Optional</sup> <a name="destination_arn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.putDestinationProperties.parameter.destinationArn"></a>

- *Type:* str

The ARN of the resource to publish to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#destination_arn GuarddutyPublishingDestination#destination_arn}

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.putDestinationProperties.parameter.kmsKeyArn"></a>

- *Type:* str

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#kms_key_arn GuarddutyPublishingDestination#kms_key_arn}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[GuarddutyPublishingDestinationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GuarddutyPublishingDestination resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.isConstruct"></a>

```python
from cdktn_provider_awscc import guardduty_publishing_destination

guarddutyPublishingDestination.GuarddutyPublishingDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.isTerraformElement"></a>

```python
from cdktn_provider_awscc import guardduty_publishing_destination

guarddutyPublishingDestination.GuarddutyPublishingDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.isTerraformResource"></a>

```python
from cdktn_provider_awscc import guardduty_publishing_destination

guarddutyPublishingDestination.GuarddutyPublishingDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import guardduty_publishing_destination

guarddutyPublishingDestination.GuarddutyPublishingDestination.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GuarddutyPublishingDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GuarddutyPublishingDestination to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GuarddutyPublishingDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GuarddutyPublishingDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationProperties">destination_properties</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference">GuarddutyPublishingDestinationDestinationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.publishingDestinationId">publishing_destination_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.publishingFailureStartTimestamp">publishing_failure_start_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList">GuarddutyPublishingDestinationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationPropertiesInput">destination_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties">GuarddutyPublishingDestinationDestinationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationTypeInput">destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.detectorIdInput">detector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.detectorId">detector_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `destination_properties`<sup>Required</sup> <a name="destination_properties" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationProperties"></a>

```python
destination_properties: GuarddutyPublishingDestinationDestinationPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference">GuarddutyPublishingDestinationDestinationPropertiesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `publishing_destination_id`<sup>Required</sup> <a name="publishing_destination_id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.publishingDestinationId"></a>

```python
publishing_destination_id: str
```

- *Type:* str

---

##### `publishing_failure_start_timestamp`<sup>Required</sup> <a name="publishing_failure_start_timestamp" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.publishingFailureStartTimestamp"></a>

```python
publishing_failure_start_timestamp: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.tags"></a>

```python
tags: GuarddutyPublishingDestinationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList">GuarddutyPublishingDestinationTagsList</a>

---

##### `destination_properties_input`<sup>Optional</sup> <a name="destination_properties_input" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationPropertiesInput"></a>

```python
destination_properties_input: IResolvable | GuarddutyPublishingDestinationDestinationProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties">GuarddutyPublishingDestinationDestinationProperties</a>

---

##### `destination_type_input`<sup>Optional</sup> <a name="destination_type_input" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationTypeInput"></a>

```python
destination_type_input: str
```

- *Type:* str

---

##### `detector_id_input`<sup>Optional</sup> <a name="detector_id_input" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.detectorIdInput"></a>

```python
detector_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[GuarddutyPublishingDestinationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>]

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `detector_id`<sup>Required</sup> <a name="detector_id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.detectorId"></a>

```python
detector_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyPublishingDestinationConfig <a name="GuarddutyPublishingDestinationConfig" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_publishing_destination

guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  destination_properties: GuarddutyPublishingDestinationDestinationProperties,
  destination_type: str,
  detector_id: str,
  tags: IResolvable | typing.List[GuarddutyPublishingDestinationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.destinationProperties">destination_properties</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties">GuarddutyPublishingDestinationDestinationProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#destination_properties GuarddutyPublishingDestination#destination_properties}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.destinationType">destination_type</a></code> | <code>str</code> | The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.detectorId">detector_id</a></code> | <code>str</code> | The ID of the GuardDuty detector associated with the publishing destination. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#tags GuarddutyPublishingDestination#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `destination_properties`<sup>Required</sup> <a name="destination_properties" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.destinationProperties"></a>

```python
destination_properties: GuarddutyPublishingDestinationDestinationProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties">GuarddutyPublishingDestinationDestinationProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#destination_properties GuarddutyPublishingDestination#destination_properties}.

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#destination_type GuarddutyPublishingDestination#destination_type}

---

##### `detector_id`<sup>Required</sup> <a name="detector_id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.detectorId"></a>

```python
detector_id: str
```

- *Type:* str

The ID of the GuardDuty detector associated with the publishing destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#detector_id GuarddutyPublishingDestination#detector_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[GuarddutyPublishingDestinationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#tags GuarddutyPublishingDestination#tags}.

---

### GuarddutyPublishingDestinationDestinationProperties <a name="GuarddutyPublishingDestinationDestinationProperties" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_publishing_destination

guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties(
  destination_arn: str = None,
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties.property.destinationArn">destination_arn</a></code> | <code>str</code> | The ARN of the resource to publish to. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of the KMS key to use for encryption. |

---

##### `destination_arn`<sup>Optional</sup> <a name="destination_arn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

The ARN of the resource to publish to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#destination_arn GuarddutyPublishingDestination#destination_arn}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#kms_key_arn GuarddutyPublishingDestination#kms_key_arn}

---

### GuarddutyPublishingDestinationTags <a name="GuarddutyPublishingDestinationTags" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_publishing_destination

guarddutyPublishingDestination.GuarddutyPublishingDestinationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#key GuarddutyPublishingDestination#key}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#value GuarddutyPublishingDestination#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#key GuarddutyPublishingDestination#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#value GuarddutyPublishingDestination#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyPublishingDestinationDestinationPropertiesOutputReference <a name="GuarddutyPublishingDestinationDestinationPropertiesOutputReference" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_publishing_destination

guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.resetDestinationArn">reset_destination_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_arn` <a name="reset_destination_arn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.resetDestinationArn"></a>

```python
def reset_destination_arn() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.destinationArnInput">destination_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.destinationArn">destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties">GuarddutyPublishingDestinationDestinationProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_arn_input`<sup>Optional</sup> <a name="destination_arn_input" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.destinationArnInput"></a>

```python
destination_arn_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GuarddutyPublishingDestinationDestinationProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties">GuarddutyPublishingDestinationDestinationProperties</a>

---


### GuarddutyPublishingDestinationTagsList <a name="GuarddutyPublishingDestinationTagsList" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_publishing_destination

guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GuarddutyPublishingDestinationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GuarddutyPublishingDestinationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>]

---


### GuarddutyPublishingDestinationTagsOutputReference <a name="GuarddutyPublishingDestinationTagsOutputReference" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import guardduty_publishing_destination

guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GuarddutyPublishingDestinationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>

---



