# `sesConfigurationSetEventDestination` Submodule <a name="`sesConfigurationSetEventDestination` Submodule" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesConfigurationSetEventDestination <a name="SesConfigurationSetEventDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination awscc_ses_configuration_set_event_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set_event_destination

sesConfigurationSetEventDestination.SesConfigurationSetEventDestination(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration_set_name: str,
  event_destination: SesConfigurationSetEventDestinationEventDestination
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.configurationSetName">configuration_set_name</a></code> | <code>str</code> | The name of the configuration set that contains the event destination. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.eventDestination">event_destination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a></code> | The event destination object. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.configurationSetName"></a>

- *Type:* str

The name of the configuration set that contains the event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#configuration_set_name SesConfigurationSetEventDestination#configuration_set_name}

---

##### `event_destination`<sup>Required</sup> <a name="event_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.Initializer.parameter.eventDestination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a>

The event destination object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#event_destination SesConfigurationSetEventDestination#event_destination}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.putEventDestination">put_event_destination</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_event_destination` <a name="put_event_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.putEventDestination"></a>

```python
def put_event_destination(
  matching_event_types: typing.List[str],
  cloudwatch_destination: SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination = None,
  enabled: bool | IResolvable = None,
  event_bridge_destination: SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination = None,
  kinesis_firehose_destination: SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination = None,
  name: str = None,
  sns_destination: SesConfigurationSetEventDestinationEventDestinationSnsDestination = None
) -> None
```

###### `matching_event_types`<sup>Required</sup> <a name="matching_event_types" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.putEventDestination.parameter.matchingEventTypes"></a>

- *Type:* typing.List[str]

The type of email sending events, send, reject, bounce, complaint, delivery, open, click, renderingFailure, deliveryDelay, and subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#matching_event_types SesConfigurationSetEventDestination#matching_event_types}

---

###### `cloudwatch_destination`<sup>Optional</sup> <a name="cloudwatch_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.putEventDestination.parameter.cloudwatchDestination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a>

An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#cloudwatch_destination SesConfigurationSetEventDestination#cloudwatch_destination}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.putEventDestination.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set.

Set to true to enable publishing to this destination; set to false to prevent publishing to this destination. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#enabled SesConfigurationSetEventDestination#enabled}

---

###### `event_bridge_destination`<sup>Optional</sup> <a name="event_bridge_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.putEventDestination.parameter.eventBridgeDestination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

An object that contains Event bus ARN associated with the event bridge destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#event_bridge_destination SesConfigurationSetEventDestination#event_bridge_destination}

---

###### `kinesis_firehose_destination`<sup>Optional</sup> <a name="kinesis_firehose_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.putEventDestination.parameter.kinesisFirehoseDestination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#kinesis_firehose_destination SesConfigurationSetEventDestination#kinesis_firehose_destination}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.putEventDestination.parameter.name"></a>

- *Type:* str

The name of the event destination set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#name SesConfigurationSetEventDestination#name}

---

###### `sns_destination`<sup>Optional</sup> <a name="sns_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.putEventDestination.parameter.snsDestination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a>

An object that contains SNS topic ARN associated event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#sns_destination SesConfigurationSetEventDestination#sns_destination}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SesConfigurationSetEventDestination resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isConstruct"></a>

```python
from cdktn_provider_awscc import ses_configuration_set_event_destination

sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ses_configuration_set_event_destination

sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ses_configuration_set_event_destination

sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ses_configuration_set_event_destination

sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SesConfigurationSetEventDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SesConfigurationSetEventDestination to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SesConfigurationSetEventDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SesConfigurationSetEventDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetEventDestinationId">configuration_set_event_destination_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.eventDestination">event_destination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetNameInput">configuration_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.eventDestinationInput">event_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration_set_event_destination_id`<sup>Required</sup> <a name="configuration_set_event_destination_id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetEventDestinationId"></a>

```python
configuration_set_event_destination_id: str
```

- *Type:* str

---

##### `event_destination`<sup>Required</sup> <a name="event_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.eventDestination"></a>

```python
event_destination: SesConfigurationSetEventDestinationEventDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `configuration_set_name_input`<sup>Optional</sup> <a name="configuration_set_name_input" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetNameInput"></a>

```python
configuration_set_name_input: str
```

- *Type:* str

---

##### `event_destination_input`<sup>Optional</sup> <a name="event_destination_input" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.eventDestinationInput"></a>

```python
event_destination_input: IResolvable | SesConfigurationSetEventDestinationEventDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a>

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SesConfigurationSetEventDestinationConfig <a name="SesConfigurationSetEventDestinationConfig" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set_event_destination

sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration_set_name: str,
  event_destination: SesConfigurationSetEventDestinationEventDestination
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | The name of the configuration set that contains the event destination. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.eventDestination">event_destination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a></code> | The event destination object. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

The name of the configuration set that contains the event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#configuration_set_name SesConfigurationSetEventDestination#configuration_set_name}

---

##### `event_destination`<sup>Required</sup> <a name="event_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationConfig.property.eventDestination"></a>

```python
event_destination: SesConfigurationSetEventDestinationEventDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a>

The event destination object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#event_destination SesConfigurationSetEventDestination#event_destination}

---

### SesConfigurationSetEventDestinationEventDestination <a name="SesConfigurationSetEventDestinationEventDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set_event_destination

sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination(
  matching_event_types: typing.List[str],
  cloudwatch_destination: SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination = None,
  enabled: bool | IResolvable = None,
  event_bridge_destination: SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination = None,
  kinesis_firehose_destination: SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination = None,
  name: str = None,
  sns_destination: SesConfigurationSetEventDestinationEventDestinationSnsDestination = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.matchingEventTypes">matching_event_types</a></code> | <code>typing.List[str]</code> | The type of email sending events, send, reject, bounce, complaint, delivery, open, click, renderingFailure, deliveryDelay, and subscription. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.cloudwatchDestination">cloudwatch_destination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a></code> | An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.eventBridgeDestination">event_bridge_destination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a></code> | An object that contains Event bus ARN associated with the event bridge destination. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.kinesisFirehoseDestination">kinesis_firehose_destination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a></code> | An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.name">name</a></code> | <code>str</code> | The name of the event destination set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.snsDestination">sns_destination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a></code> | An object that contains SNS topic ARN associated event destination. |

---

##### `matching_event_types`<sup>Required</sup> <a name="matching_event_types" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.matchingEventTypes"></a>

```python
matching_event_types: typing.List[str]
```

- *Type:* typing.List[str]

The type of email sending events, send, reject, bounce, complaint, delivery, open, click, renderingFailure, deliveryDelay, and subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#matching_event_types SesConfigurationSetEventDestination#matching_event_types}

---

##### `cloudwatch_destination`<sup>Optional</sup> <a name="cloudwatch_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.cloudwatchDestination"></a>

```python
cloudwatch_destination: SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a>

An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#cloudwatch_destination SesConfigurationSetEventDestination#cloudwatch_destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set.

Set to true to enable publishing to this destination; set to false to prevent publishing to this destination. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#enabled SesConfigurationSetEventDestination#enabled}

---

##### `event_bridge_destination`<sup>Optional</sup> <a name="event_bridge_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.eventBridgeDestination"></a>

```python
event_bridge_destination: SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

An object that contains Event bus ARN associated with the event bridge destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#event_bridge_destination SesConfigurationSetEventDestination#event_bridge_destination}

---

##### `kinesis_firehose_destination`<sup>Optional</sup> <a name="kinesis_firehose_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.kinesisFirehoseDestination"></a>

```python
kinesis_firehose_destination: SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#kinesis_firehose_destination SesConfigurationSetEventDestination#kinesis_firehose_destination}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the event destination set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#name SesConfigurationSetEventDestination#name}

---

##### `sns_destination`<sup>Optional</sup> <a name="sns_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination.property.snsDestination"></a>

```python
sns_destination: SesConfigurationSetEventDestinationEventDestinationSnsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a>

An object that contains SNS topic ARN associated event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#sns_destination SesConfigurationSetEventDestination#sns_destination}

---

### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set_event_destination

sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination(
  dimension_configurations: IResolvable | typing.List[SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination.property.dimensionConfigurations">dimension_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>]</code> | A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch. |

---

##### `dimension_configurations`<sup>Optional</sup> <a name="dimension_configurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination.property.dimensionConfigurations"></a>

```python
dimension_configurations: IResolvable | typing.List[SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>]

A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#dimension_configurations SesConfigurationSetEventDestination#dimension_configurations}

---

### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set_event_destination

sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations(
  default_dimension_value: str = None,
  dimension_name: str = None,
  dimension_value_source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.defaultDimensionValue">default_dimension_value</a></code> | <code>str</code> | The default value of the dimension that is published to Amazon CloudWatch if you do not provide the value of the dimension when you send an email. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.dimensionName">dimension_name</a></code> | <code>str</code> | The name of an Amazon CloudWatch dimension associated with an email sending metric. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.dimensionValueSource">dimension_value_source</a></code> | <code>str</code> | The place where Amazon SES finds the value of a dimension to publish to Amazon CloudWatch. |

---

##### `default_dimension_value`<sup>Optional</sup> <a name="default_dimension_value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.defaultDimensionValue"></a>

```python
default_dimension_value: str
```

- *Type:* str

The default value of the dimension that is published to Amazon CloudWatch if you do not provide the value of the dimension when you send an email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#default_dimension_value SesConfigurationSetEventDestination#default_dimension_value}

---

##### `dimension_name`<sup>Optional</sup> <a name="dimension_name" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.dimensionName"></a>

```python
dimension_name: str
```

- *Type:* str

The name of an Amazon CloudWatch dimension associated with an email sending metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#dimension_name SesConfigurationSetEventDestination#dimension_name}

---

##### `dimension_value_source`<sup>Optional</sup> <a name="dimension_value_source" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.property.dimensionValueSource"></a>

```python
dimension_value_source: str
```

- *Type:* str

The place where Amazon SES finds the value of a dimension to publish to Amazon CloudWatch.

To use the message tags that you specify using an X-SES-MESSAGE-TAGS header or a parameter to the SendEmail/SendRawEmail API, specify messageTag. To use your own email headers, specify emailHeader. To put a custom tag on any link included in your email, specify linkTag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#dimension_value_source SesConfigurationSetEventDestination#dimension_value_source}

---

### SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination <a name="SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set_event_destination

sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination(
  event_bus_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#event_bus_arn SesConfigurationSetEventDestination#event_bus_arn}. |

---

##### `event_bus_arn`<sup>Optional</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#event_bus_arn SesConfigurationSetEventDestination#event_bus_arn}.

---

### SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination <a name="SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set_event_destination

sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination(
  delivery_stream_arn: str = None,
  iam_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.deliveryStreamArn">delivery_stream_arn</a></code> | <code>str</code> | The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | The ARN of the IAM role under which Amazon SES publishes email sending events to the Amazon Kinesis Firehose stream. |

---

##### `delivery_stream_arn`<sup>Optional</sup> <a name="delivery_stream_arn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.deliveryStreamArn"></a>

```python
delivery_stream_arn: str
```

- *Type:* str

The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#delivery_stream_arn SesConfigurationSetEventDestination#delivery_stream_arn}

---

##### `iam_role_arn`<sup>Optional</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

The ARN of the IAM role under which Amazon SES publishes email sending events to the Amazon Kinesis Firehose stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#iam_role_arn SesConfigurationSetEventDestination#iam_role_arn}

---

### SesConfigurationSetEventDestinationEventDestinationSnsDestination <a name="SesConfigurationSetEventDestinationEventDestinationSnsDestination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set_event_destination

sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination(
  topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination.property.topicArn">topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#topic_arn SesConfigurationSetEventDestination#topic_arn}. |

---

##### `topic_arn`<sup>Optional</sup> <a name="topic_arn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#topic_arn SesConfigurationSetEventDestination#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set_event_destination

sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>]

---


### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set_event_destination

sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDefaultDimensionValue">reset_default_dimension_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDimensionName">reset_dimension_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDimensionValueSource">reset_dimension_value_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_dimension_value` <a name="reset_default_dimension_value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDefaultDimensionValue"></a>

```python
def reset_default_dimension_value() -> None
```

##### `reset_dimension_name` <a name="reset_dimension_name" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDimensionName"></a>

```python
def reset_dimension_name() -> None
```

##### `reset_dimension_value_source` <a name="reset_dimension_value_source" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resetDimensionValueSource"></a>

```python
def reset_dimension_value_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValueInput">default_dimension_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionNameInput">dimension_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSourceInput">dimension_value_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValue">default_dimension_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionName">dimension_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSource">dimension_value_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_dimension_value_input`<sup>Optional</sup> <a name="default_dimension_value_input" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValueInput"></a>

```python
default_dimension_value_input: str
```

- *Type:* str

---

##### `dimension_name_input`<sup>Optional</sup> <a name="dimension_name_input" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionNameInput"></a>

```python
dimension_name_input: str
```

- *Type:* str

---

##### `dimension_value_source_input`<sup>Optional</sup> <a name="dimension_value_source_input" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSourceInput"></a>

```python
dimension_value_source_input: str
```

- *Type:* str

---

##### `default_dimension_value`<sup>Required</sup> <a name="default_dimension_value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValue"></a>

```python
default_dimension_value: str
```

- *Type:* str

---

##### `dimension_name`<sup>Required</sup> <a name="dimension_name" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionName"></a>

```python
dimension_name: str
```

- *Type:* str

---

##### `dimension_value_source`<sup>Required</sup> <a name="dimension_value_source" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSource"></a>

```python
dimension_value_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>

---


### SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set_event_destination

sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.putDimensionConfigurations">put_dimension_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resetDimensionConfigurations">reset_dimension_configurations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimension_configurations` <a name="put_dimension_configurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.putDimensionConfigurations"></a>

```python
def put_dimension_configurations(
  value: IResolvable | typing.List[SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.putDimensionConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>]

---

##### `reset_dimension_configurations` <a name="reset_dimension_configurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resetDimensionConfigurations"></a>

```python
def reset_dimension_configurations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurations">dimension_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurationsInput">dimension_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension_configurations`<sup>Required</sup> <a name="dimension_configurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurations"></a>

```python
dimension_configurations: SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList</a>

---

##### `dimension_configurations_input`<sup>Optional</sup> <a name="dimension_configurations_input" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurationsInput"></a>

```python
dimension_configurations_input: IResolvable | typing.List[SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a>

---


### SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set_event_destination

sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resetEventBusArn">reset_event_bus_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_event_bus_arn` <a name="reset_event_bus_arn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resetEventBusArn"></a>

```python
def reset_event_bus_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArnInput">event_bus_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_bus_arn_input`<sup>Optional</sup> <a name="event_bus_arn_input" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArnInput"></a>

```python
event_bus_arn_input: str
```

- *Type:* str

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

---


### SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set_event_destination

sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resetDeliveryStreamArn">reset_delivery_stream_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resetIamRoleArn">reset_iam_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delivery_stream_arn` <a name="reset_delivery_stream_arn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resetDeliveryStreamArn"></a>

```python
def reset_delivery_stream_arn() -> None
```

##### `reset_iam_role_arn` <a name="reset_iam_role_arn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resetIamRoleArn"></a>

```python
def reset_iam_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput">delivery_stream_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn">delivery_stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_stream_arn_input`<sup>Optional</sup> <a name="delivery_stream_arn_input" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput"></a>

```python
delivery_stream_arn_input: str
```

- *Type:* str

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `delivery_stream_arn`<sup>Required</sup> <a name="delivery_stream_arn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn"></a>

```python
delivery_stream_arn: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

---


### SesConfigurationSetEventDestinationEventDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set_event_destination

sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putCloudwatchDestination">put_cloudwatch_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putEventBridgeDestination">put_event_bridge_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putKinesisFirehoseDestination">put_kinesis_firehose_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putSnsDestination">put_sns_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetCloudwatchDestination">reset_cloudwatch_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetEventBridgeDestination">reset_event_bridge_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetKinesisFirehoseDestination">reset_kinesis_firehose_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetSnsDestination">reset_sns_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_destination` <a name="put_cloudwatch_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putCloudwatchDestination"></a>

```python
def put_cloudwatch_destination(
  dimension_configurations: IResolvable | typing.List[SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations] = None
) -> None
```

###### `dimension_configurations`<sup>Optional</sup> <a name="dimension_configurations" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putCloudwatchDestination.parameter.dimensionConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>]

A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#dimension_configurations SesConfigurationSetEventDestination#dimension_configurations}

---

##### `put_event_bridge_destination` <a name="put_event_bridge_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putEventBridgeDestination"></a>

```python
def put_event_bridge_destination(
  event_bus_arn: str = None
) -> None
```

###### `event_bus_arn`<sup>Optional</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putEventBridgeDestination.parameter.eventBusArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#event_bus_arn SesConfigurationSetEventDestination#event_bus_arn}.

---

##### `put_kinesis_firehose_destination` <a name="put_kinesis_firehose_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putKinesisFirehoseDestination"></a>

```python
def put_kinesis_firehose_destination(
  delivery_stream_arn: str = None,
  iam_role_arn: str = None
) -> None
```

###### `delivery_stream_arn`<sup>Optional</sup> <a name="delivery_stream_arn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putKinesisFirehoseDestination.parameter.deliveryStreamArn"></a>

- *Type:* str

The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#delivery_stream_arn SesConfigurationSetEventDestination#delivery_stream_arn}

---

###### `iam_role_arn`<sup>Optional</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putKinesisFirehoseDestination.parameter.iamRoleArn"></a>

- *Type:* str

The ARN of the IAM role under which Amazon SES publishes email sending events to the Amazon Kinesis Firehose stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#iam_role_arn SesConfigurationSetEventDestination#iam_role_arn}

---

##### `put_sns_destination` <a name="put_sns_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putSnsDestination"></a>

```python
def put_sns_destination(
  topic_arn: str = None
) -> None
```

###### `topic_arn`<sup>Optional</sup> <a name="topic_arn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.putSnsDestination.parameter.topicArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_configuration_set_event_destination#topic_arn SesConfigurationSetEventDestination#topic_arn}.

---

##### `reset_cloudwatch_destination` <a name="reset_cloudwatch_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetCloudwatchDestination"></a>

```python
def reset_cloudwatch_destination() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_event_bridge_destination` <a name="reset_event_bridge_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetEventBridgeDestination"></a>

```python
def reset_event_bridge_destination() -> None
```

##### `reset_kinesis_firehose_destination` <a name="reset_kinesis_firehose_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetKinesisFirehoseDestination"></a>

```python
def reset_kinesis_firehose_destination() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_sns_destination` <a name="reset_sns_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.resetSnsDestination"></a>

```python
def reset_sns_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestination">cloudwatch_destination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestination">event_bridge_destination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestination">kinesis_firehose_destination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestination">sns_destination</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestinationInput">cloudwatch_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestinationInput">event_bridge_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestinationInput">kinesis_firehose_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypesInput">matching_event_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestinationInput">sns_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypes">matching_event_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_destination`<sup>Required</sup> <a name="cloudwatch_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestination"></a>

```python
cloudwatch_destination: SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference</a>

---

##### `event_bridge_destination`<sup>Required</sup> <a name="event_bridge_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestination"></a>

```python
event_bridge_destination: SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference</a>

---

##### `kinesis_firehose_destination`<sup>Required</sup> <a name="kinesis_firehose_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestination"></a>

```python
kinesis_firehose_destination: SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference</a>

---

##### `sns_destination`<sup>Required</sup> <a name="sns_destination" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestination"></a>

```python
sns_destination: SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference">SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference</a>

---

##### `cloudwatch_destination_input`<sup>Optional</sup> <a name="cloudwatch_destination_input" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestinationInput"></a>

```python
cloudwatch_destination_input: IResolvable | SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">SesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_bridge_destination_input`<sup>Optional</sup> <a name="event_bridge_destination_input" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestinationInput"></a>

```python
event_bridge_destination_input: IResolvable | SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">SesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

---

##### `kinesis_firehose_destination_input`<sup>Optional</sup> <a name="kinesis_firehose_destination_input" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestinationInput"></a>

```python
kinesis_firehose_destination_input: IResolvable | SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">SesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

---

##### `matching_event_types_input`<sup>Optional</sup> <a name="matching_event_types_input" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypesInput"></a>

```python
matching_event_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sns_destination_input`<sup>Optional</sup> <a name="sns_destination_input" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestinationInput"></a>

```python
sns_destination_input: IResolvable | SesConfigurationSetEventDestinationEventDestinationSnsDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `matching_event_types`<sup>Required</sup> <a name="matching_event_types" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypes"></a>

```python
matching_event_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesConfigurationSetEventDestinationEventDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestination">SesConfigurationSetEventDestinationEventDestination</a>

---


### SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference <a name="SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_configuration_set_event_destination

sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resetTopicArn">reset_topic_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_topic_arn` <a name="reset_topic_arn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resetTopicArn"></a>

```python
def reset_topic_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesConfigurationSetEventDestinationEventDestinationSnsDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesConfigurationSetEventDestination.SesConfigurationSetEventDestinationEventDestinationSnsDestination">SesConfigurationSetEventDestinationEventDestinationSnsDestination</a>

---



