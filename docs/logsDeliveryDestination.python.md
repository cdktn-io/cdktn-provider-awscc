# `logsDeliveryDestination` Submodule <a name="`logsDeliveryDestination` Submodule" id="@cdktn/provider-awscc.logsDeliveryDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsDeliveryDestination <a name="LogsDeliveryDestination" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination awscc_logs_delivery_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer"></a>

```python
from cdktn_provider_awscc import logs_delivery_destination

logsDeliveryDestination.LogsDeliveryDestination(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  delivery_destination_policy: LogsDeliveryDestinationDeliveryDestinationPolicy = None,
  delivery_destination_type: str = None,
  destination_resource_arn: str = None,
  output_format: str = None,
  tags: IResolvable | typing.List[LogsDeliveryDestinationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of this delivery destination. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.deliveryDestinationPolicy">delivery_destination_policy</a></code> | <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a></code> | IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.deliveryDestinationType">delivery_destination_type</a></code> | <code>str</code> | Displays whether this delivery destination is CloudWatch Logs, Amazon S3, Kinesis Data Firehose, or XRay. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.destinationResourceArn">destination_resource_arn</a></code> | <code>str</code> | The ARN of the Amazon Web Services destination that this delivery destination represents. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.outputFormat">output_format</a></code> | <code>str</code> | The format of the logs that are sent to this delivery destination. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>]</code> | The tags that have been assigned to this delivery destination. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.name"></a>

- *Type:* str

The name of this delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination#name LogsDeliveryDestination#name}

---

##### `delivery_destination_policy`<sup>Optional</sup> <a name="delivery_destination_policy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.deliveryDestinationPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a>

IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account.

The policy must be in JSON string format.

Length Constraints: Maximum length of 51200

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination#delivery_destination_policy LogsDeliveryDestination#delivery_destination_policy}

---

##### `delivery_destination_type`<sup>Optional</sup> <a name="delivery_destination_type" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.deliveryDestinationType"></a>

- *Type:* str

Displays whether this delivery destination is CloudWatch Logs, Amazon S3, Kinesis Data Firehose, or XRay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination#delivery_destination_type LogsDeliveryDestination#delivery_destination_type}

---

##### `destination_resource_arn`<sup>Optional</sup> <a name="destination_resource_arn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.destinationResourceArn"></a>

- *Type:* str

The ARN of the Amazon Web Services destination that this delivery destination represents.

That Amazon Web Services destination can be a log group in CloudWatch Logs, an Amazon S3 bucket, or a delivery stream in Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination#destination_resource_arn LogsDeliveryDestination#destination_resource_arn}

---

##### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.outputFormat"></a>

- *Type:* str

The format of the logs that are sent to this delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination#output_format LogsDeliveryDestination#output_format}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>]

The tags that have been assigned to this delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination#tags LogsDeliveryDestination#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putDeliveryDestinationPolicy">put_delivery_destination_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDeliveryDestinationPolicy">reset_delivery_destination_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDeliveryDestinationType">reset_delivery_destination_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDestinationResourceArn">reset_destination_resource_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetOutputFormat">reset_output_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_delivery_destination_policy` <a name="put_delivery_destination_policy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putDeliveryDestinationPolicy"></a>

```python
def put_delivery_destination_policy(
  delivery_destination_name: str = None,
  delivery_destination_policy: str = None
) -> None
```

###### `delivery_destination_name`<sup>Optional</sup> <a name="delivery_destination_name" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putDeliveryDestinationPolicy.parameter.deliveryDestinationName"></a>

- *Type:* str

The name of the delivery destination to assign this policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination#delivery_destination_name LogsDeliveryDestination#delivery_destination_name}

---

###### `delivery_destination_policy`<sup>Optional</sup> <a name="delivery_destination_policy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putDeliveryDestinationPolicy.parameter.deliveryDestinationPolicy"></a>

- *Type:* str

The contents of the policy attached to the delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination#delivery_destination_policy LogsDeliveryDestination#delivery_destination_policy}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LogsDeliveryDestinationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>]

---

##### `reset_delivery_destination_policy` <a name="reset_delivery_destination_policy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDeliveryDestinationPolicy"></a>

```python
def reset_delivery_destination_policy() -> None
```

##### `reset_delivery_destination_type` <a name="reset_delivery_destination_type" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDeliveryDestinationType"></a>

```python
def reset_delivery_destination_type() -> None
```

##### `reset_destination_resource_arn` <a name="reset_destination_resource_arn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDestinationResourceArn"></a>

```python
def reset_destination_resource_arn() -> None
```

##### `reset_output_format` <a name="reset_output_format" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetOutputFormat"></a>

```python
def reset_output_format() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LogsDeliveryDestination resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isConstruct"></a>

```python
from cdktn_provider_awscc import logs_delivery_destination

logsDeliveryDestination.LogsDeliveryDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformElement"></a>

```python
from cdktn_provider_awscc import logs_delivery_destination

logsDeliveryDestination.LogsDeliveryDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformResource"></a>

```python
from cdktn_provider_awscc import logs_delivery_destination

logsDeliveryDestination.LogsDeliveryDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import logs_delivery_destination

logsDeliveryDestination.LogsDeliveryDestination.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LogsDeliveryDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogsDeliveryDestination to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogsDeliveryDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LogsDeliveryDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationPolicy">delivery_destination_policy</a></code> | <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference">LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList">LogsDeliveryDestinationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationPolicyInput">delivery_destination_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationTypeInput">delivery_destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.destinationResourceArnInput">destination_resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.outputFormatInput">output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationType">delivery_destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.destinationResourceArn">destination_resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `delivery_destination_policy`<sup>Required</sup> <a name="delivery_destination_policy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationPolicy"></a>

```python
delivery_destination_policy: LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference">LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tags"></a>

```python
tags: LogsDeliveryDestinationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList">LogsDeliveryDestinationTagsList</a>

---

##### `delivery_destination_policy_input`<sup>Optional</sup> <a name="delivery_destination_policy_input" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationPolicyInput"></a>

```python
delivery_destination_policy_input: IResolvable | LogsDeliveryDestinationDeliveryDestinationPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a>

---

##### `delivery_destination_type_input`<sup>Optional</sup> <a name="delivery_destination_type_input" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationTypeInput"></a>

```python
delivery_destination_type_input: str
```

- *Type:* str

---

##### `destination_resource_arn_input`<sup>Optional</sup> <a name="destination_resource_arn_input" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.destinationResourceArnInput"></a>

```python
destination_resource_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `output_format_input`<sup>Optional</sup> <a name="output_format_input" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.outputFormatInput"></a>

```python
output_format_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LogsDeliveryDestinationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>]

---

##### `delivery_destination_type`<sup>Required</sup> <a name="delivery_destination_type" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationType"></a>

```python
delivery_destination_type: str
```

- *Type:* str

---

##### `destination_resource_arn`<sup>Required</sup> <a name="destination_resource_arn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.destinationResourceArn"></a>

```python
destination_resource_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogsDeliveryDestinationConfig <a name="LogsDeliveryDestinationConfig" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import logs_delivery_destination

logsDeliveryDestination.LogsDeliveryDestinationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  delivery_destination_policy: LogsDeliveryDestinationDeliveryDestinationPolicy = None,
  delivery_destination_type: str = None,
  destination_resource_arn: str = None,
  output_format: str = None,
  tags: IResolvable | typing.List[LogsDeliveryDestinationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.name">name</a></code> | <code>str</code> | The name of this delivery destination. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.deliveryDestinationPolicy">delivery_destination_policy</a></code> | <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a></code> | IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.deliveryDestinationType">delivery_destination_type</a></code> | <code>str</code> | Displays whether this delivery destination is CloudWatch Logs, Amazon S3, Kinesis Data Firehose, or XRay. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.destinationResourceArn">destination_resource_arn</a></code> | <code>str</code> | The ARN of the Amazon Web Services destination that this delivery destination represents. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.outputFormat">output_format</a></code> | <code>str</code> | The format of the logs that are sent to this delivery destination. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>]</code> | The tags that have been assigned to this delivery destination. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination#name LogsDeliveryDestination#name}

---

##### `delivery_destination_policy`<sup>Optional</sup> <a name="delivery_destination_policy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.deliveryDestinationPolicy"></a>

```python
delivery_destination_policy: LogsDeliveryDestinationDeliveryDestinationPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a>

IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account.

The policy must be in JSON string format.

Length Constraints: Maximum length of 51200

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination#delivery_destination_policy LogsDeliveryDestination#delivery_destination_policy}

---

##### `delivery_destination_type`<sup>Optional</sup> <a name="delivery_destination_type" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.deliveryDestinationType"></a>

```python
delivery_destination_type: str
```

- *Type:* str

Displays whether this delivery destination is CloudWatch Logs, Amazon S3, Kinesis Data Firehose, or XRay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination#delivery_destination_type LogsDeliveryDestination#delivery_destination_type}

---

##### `destination_resource_arn`<sup>Optional</sup> <a name="destination_resource_arn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.destinationResourceArn"></a>

```python
destination_resource_arn: str
```

- *Type:* str

The ARN of the Amazon Web Services destination that this delivery destination represents.

That Amazon Web Services destination can be a log group in CloudWatch Logs, an Amazon S3 bucket, or a delivery stream in Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination#destination_resource_arn LogsDeliveryDestination#destination_resource_arn}

---

##### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

The format of the logs that are sent to this delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination#output_format LogsDeliveryDestination#output_format}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LogsDeliveryDestinationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>]

The tags that have been assigned to this delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination#tags LogsDeliveryDestination#tags}

---

### LogsDeliveryDestinationDeliveryDestinationPolicy <a name="LogsDeliveryDestinationDeliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import logs_delivery_destination

logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy(
  delivery_destination_name: str = None,
  delivery_destination_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.property.deliveryDestinationName">delivery_destination_name</a></code> | <code>str</code> | The name of the delivery destination to assign this policy to. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.property.deliveryDestinationPolicy">delivery_destination_policy</a></code> | <code>str</code> | The contents of the policy attached to the delivery destination. |

---

##### `delivery_destination_name`<sup>Optional</sup> <a name="delivery_destination_name" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.property.deliveryDestinationName"></a>

```python
delivery_destination_name: str
```

- *Type:* str

The name of the delivery destination to assign this policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination#delivery_destination_name LogsDeliveryDestination#delivery_destination_name}

---

##### `delivery_destination_policy`<sup>Optional</sup> <a name="delivery_destination_policy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.property.deliveryDestinationPolicy"></a>

```python
delivery_destination_policy: str
```

- *Type:* str

The contents of the policy attached to the delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination#delivery_destination_policy LogsDeliveryDestination#delivery_destination_policy}

---

### LogsDeliveryDestinationTags <a name="LogsDeliveryDestinationTags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.Initializer"></a>

```python
from cdktn_provider_awscc import logs_delivery_destination

logsDeliveryDestination.LogsDeliveryDestinationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination#key LogsDeliveryDestination#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/logs_delivery_destination#value LogsDeliveryDestination#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference <a name="LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import logs_delivery_destination

logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resetDeliveryDestinationName">reset_delivery_destination_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resetDeliveryDestinationPolicy">reset_delivery_destination_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delivery_destination_name` <a name="reset_delivery_destination_name" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resetDeliveryDestinationName"></a>

```python
def reset_delivery_destination_name() -> None
```

##### `reset_delivery_destination_policy` <a name="reset_delivery_destination_policy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resetDeliveryDestinationPolicy"></a>

```python
def reset_delivery_destination_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationNameInput">delivery_destination_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationPolicyInput">delivery_destination_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationName">delivery_destination_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationPolicy">delivery_destination_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_destination_name_input`<sup>Optional</sup> <a name="delivery_destination_name_input" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationNameInput"></a>

```python
delivery_destination_name_input: str
```

- *Type:* str

---

##### `delivery_destination_policy_input`<sup>Optional</sup> <a name="delivery_destination_policy_input" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationPolicyInput"></a>

```python
delivery_destination_policy_input: str
```

- *Type:* str

---

##### `delivery_destination_name`<sup>Required</sup> <a name="delivery_destination_name" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationName"></a>

```python
delivery_destination_name: str
```

- *Type:* str

---

##### `delivery_destination_policy`<sup>Required</sup> <a name="delivery_destination_policy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationPolicy"></a>

```python
delivery_destination_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LogsDeliveryDestinationDeliveryDestinationPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a>

---


### LogsDeliveryDestinationTagsList <a name="LogsDeliveryDestinationTagsList" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import logs_delivery_destination

logsDeliveryDestination.LogsDeliveryDestinationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogsDeliveryDestinationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LogsDeliveryDestinationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>]

---


### LogsDeliveryDestinationTagsOutputReference <a name="LogsDeliveryDestinationTagsOutputReference" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import logs_delivery_destination

logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LogsDeliveryDestinationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>

---



