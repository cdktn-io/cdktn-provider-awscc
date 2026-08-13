# `iotTopicRuleDestination` Submodule <a name="`iotTopicRuleDestination` Submodule" id="@cdktn/provider-awscc.iotTopicRuleDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTopicRuleDestination <a name="IotTopicRuleDestination" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination awscc_iot_topic_rule_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer"></a>

```python
from cdktn_provider_awscc import iot_topic_rule_destination

iotTopicRuleDestination.IotTopicRuleDestination(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  http_url_properties: IotTopicRuleDestinationHttpUrlProperties = None,
  status: str = None,
  vpc_properties: IotTopicRuleDestinationVpcProperties = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.httpUrlProperties">http_url_properties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a></code> | HTTP URL destination properties. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.status">status</a></code> | <code>str</code> | The status of the TopicRuleDestination. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.vpcProperties">vpc_properties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a></code> | VPC destination properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `http_url_properties`<sup>Optional</sup> <a name="http_url_properties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.httpUrlProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a>

HTTP URL destination properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#http_url_properties IotTopicRuleDestination#http_url_properties}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.status"></a>

- *Type:* str

The status of the TopicRuleDestination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#status IotTopicRuleDestination#status}

---

##### `vpc_properties`<sup>Optional</sup> <a name="vpc_properties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.vpcProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a>

VPC destination properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#vpc_properties IotTopicRuleDestination#vpc_properties}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putHttpUrlProperties">put_http_url_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putVpcProperties">put_vpc_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetHttpUrlProperties">reset_http_url_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetVpcProperties">reset_vpc_properties</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_http_url_properties` <a name="put_http_url_properties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putHttpUrlProperties"></a>

```python
def put_http_url_properties(
  confirmation_url: str = None
) -> None
```

###### `confirmation_url`<sup>Optional</sup> <a name="confirmation_url" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putHttpUrlProperties.parameter.confirmationUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#confirmation_url IotTopicRuleDestination#confirmation_url}.

---

##### `put_vpc_properties` <a name="put_vpc_properties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putVpcProperties"></a>

```python
def put_vpc_properties(
  role_arn: str = None,
  security_groups: typing.List[str] = None,
  subnet_ids: typing.List[str] = None,
  vpc_id: str = None
) -> None
```

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putVpcProperties.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#role_arn IotTopicRuleDestination#role_arn}.

---

###### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putVpcProperties.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#security_groups IotTopicRuleDestination#security_groups}.

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putVpcProperties.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#subnet_ids IotTopicRuleDestination#subnet_ids}.

---

###### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putVpcProperties.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#vpc_id IotTopicRuleDestination#vpc_id}.

---

##### `reset_http_url_properties` <a name="reset_http_url_properties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetHttpUrlProperties"></a>

```python
def reset_http_url_properties() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_vpc_properties` <a name="reset_vpc_properties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetVpcProperties"></a>

```python
def reset_vpc_properties() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotTopicRuleDestination resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isConstruct"></a>

```python
from cdktn_provider_awscc import iot_topic_rule_destination

iotTopicRuleDestination.IotTopicRuleDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iot_topic_rule_destination

iotTopicRuleDestination.IotTopicRuleDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iot_topic_rule_destination

iotTopicRuleDestination.IotTopicRuleDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iot_topic_rule_destination

iotTopicRuleDestination.IotTopicRuleDestination.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotTopicRuleDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotTopicRuleDestination to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotTopicRuleDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotTopicRuleDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.httpUrlProperties">http_url_properties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference">IotTopicRuleDestinationHttpUrlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcProperties">vpc_properties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference">IotTopicRuleDestinationVpcPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.httpUrlPropertiesInput">http_url_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcPropertiesInput">vpc_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `http_url_properties`<sup>Required</sup> <a name="http_url_properties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.httpUrlProperties"></a>

```python
http_url_properties: IotTopicRuleDestinationHttpUrlPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference">IotTopicRuleDestinationHttpUrlPropertiesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `vpc_properties`<sup>Required</sup> <a name="vpc_properties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcProperties"></a>

```python
vpc_properties: IotTopicRuleDestinationVpcPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference">IotTopicRuleDestinationVpcPropertiesOutputReference</a>

---

##### `http_url_properties_input`<sup>Optional</sup> <a name="http_url_properties_input" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.httpUrlPropertiesInput"></a>

```python
http_url_properties_input: IResolvable | IotTopicRuleDestinationHttpUrlProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `vpc_properties_input`<sup>Optional</sup> <a name="vpc_properties_input" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcPropertiesInput"></a>

```python
vpc_properties_input: IResolvable | IotTopicRuleDestinationVpcProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotTopicRuleDestinationConfig <a name="IotTopicRuleDestinationConfig" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_topic_rule_destination

iotTopicRuleDestination.IotTopicRuleDestinationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  http_url_properties: IotTopicRuleDestinationHttpUrlProperties = None,
  status: str = None,
  vpc_properties: IotTopicRuleDestinationVpcProperties = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.httpUrlProperties">http_url_properties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a></code> | HTTP URL destination properties. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.status">status</a></code> | <code>str</code> | The status of the TopicRuleDestination. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.vpcProperties">vpc_properties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a></code> | VPC destination properties. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `http_url_properties`<sup>Optional</sup> <a name="http_url_properties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.httpUrlProperties"></a>

```python
http_url_properties: IotTopicRuleDestinationHttpUrlProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a>

HTTP URL destination properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#http_url_properties IotTopicRuleDestination#http_url_properties}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the TopicRuleDestination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#status IotTopicRuleDestination#status}

---

##### `vpc_properties`<sup>Optional</sup> <a name="vpc_properties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.vpcProperties"></a>

```python
vpc_properties: IotTopicRuleDestinationVpcProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a>

VPC destination properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#vpc_properties IotTopicRuleDestination#vpc_properties}

---

### IotTopicRuleDestinationHttpUrlProperties <a name="IotTopicRuleDestinationHttpUrlProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties.Initializer"></a>

```python
from cdktn_provider_awscc import iot_topic_rule_destination

iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties(
  confirmation_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties.property.confirmationUrl">confirmation_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#confirmation_url IotTopicRuleDestination#confirmation_url}. |

---

##### `confirmation_url`<sup>Optional</sup> <a name="confirmation_url" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties.property.confirmationUrl"></a>

```python
confirmation_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#confirmation_url IotTopicRuleDestination#confirmation_url}.

---

### IotTopicRuleDestinationVpcProperties <a name="IotTopicRuleDestinationVpcProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.Initializer"></a>

```python
from cdktn_provider_awscc import iot_topic_rule_destination

iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties(
  role_arn: str = None,
  security_groups: typing.List[str] = None,
  subnet_ids: typing.List[str] = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#role_arn IotTopicRuleDestination#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#security_groups IotTopicRuleDestination#security_groups}. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#subnet_ids IotTopicRuleDestination#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#vpc_id IotTopicRuleDestination#vpc_id}. |

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#role_arn IotTopicRuleDestination#role_arn}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#security_groups IotTopicRuleDestination#security_groups}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#subnet_ids IotTopicRuleDestination#subnet_ids}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_topic_rule_destination#vpc_id IotTopicRuleDestination#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTopicRuleDestinationHttpUrlPropertiesOutputReference <a name="IotTopicRuleDestinationHttpUrlPropertiesOutputReference" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_topic_rule_destination

iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resetConfirmationUrl">reset_confirmation_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_confirmation_url` <a name="reset_confirmation_url" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resetConfirmationUrl"></a>

```python
def reset_confirmation_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrlInput">confirmation_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrl">confirmation_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confirmation_url_input`<sup>Optional</sup> <a name="confirmation_url_input" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrlInput"></a>

```python
confirmation_url_input: str
```

- *Type:* str

---

##### `confirmation_url`<sup>Required</sup> <a name="confirmation_url" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrl"></a>

```python
confirmation_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotTopicRuleDestinationHttpUrlProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a>

---


### IotTopicRuleDestinationVpcPropertiesOutputReference <a name="IotTopicRuleDestinationVpcPropertiesOutputReference" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_topic_rule_destination

iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotTopicRuleDestinationVpcProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a>

---



