# `ec2VpcEndpointConnectionNotification` Submodule <a name="`ec2VpcEndpointConnectionNotification` Submodule" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcEndpointConnectionNotification <a name="Ec2VpcEndpointConnectionNotification" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_endpoint_connection_notification awscc_ec2_vpc_endpoint_connection_notification}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint_connection_notification

ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_events: typing.List[str],
  connection_notification_arn: str,
  service_id: str = None,
  vpc_endpoint_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.connectionEvents">connection_events</a></code> | <code>typing.List[str]</code> | The endpoint events for which to receive notifications. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.connectionNotificationArn">connection_notification_arn</a></code> | <code>str</code> | The ARN of the SNS topic for the notifications. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.serviceId">service_id</a></code> | <code>str</code> | The ID of the endpoint service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | The ID of the endpoint. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_events`<sup>Required</sup> <a name="connection_events" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.connectionEvents"></a>

- *Type:* typing.List[str]

The endpoint events for which to receive notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_endpoint_connection_notification#connection_events Ec2VpcEndpointConnectionNotification#connection_events}

---

##### `connection_notification_arn`<sup>Required</sup> <a name="connection_notification_arn" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.connectionNotificationArn"></a>

- *Type:* str

The ARN of the SNS topic for the notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_endpoint_connection_notification#connection_notification_arn Ec2VpcEndpointConnectionNotification#connection_notification_arn}

---

##### `service_id`<sup>Optional</sup> <a name="service_id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.serviceId"></a>

- *Type:* str

The ID of the endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_endpoint_connection_notification#service_id Ec2VpcEndpointConnectionNotification#service_id}

---

##### `vpc_endpoint_id`<sup>Optional</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.vpcEndpointId"></a>

- *Type:* str

The ID of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_endpoint_connection_notification#vpc_endpoint_id Ec2VpcEndpointConnectionNotification#vpc_endpoint_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.resetServiceId">reset_service_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.resetVpcEndpointId">reset_vpc_endpoint_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_service_id` <a name="reset_service_id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.resetServiceId"></a>

```python
def reset_service_id() -> None
```

##### `reset_vpc_endpoint_id` <a name="reset_vpc_endpoint_id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.resetVpcEndpointId"></a>

```python
def reset_vpc_endpoint_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2VpcEndpointConnectionNotification resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint_connection_notification

ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint_connection_notification

ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint_connection_notification

ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint_connection_notification

ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2VpcEndpointConnectionNotification resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2VpcEndpointConnectionNotification to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2VpcEndpointConnectionNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_endpoint_connection_notification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcEndpointConnectionNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.vpcEndpointConnectionNotificationId">vpc_endpoint_connection_notification_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionEventsInput">connection_events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionNotificationArnInput">connection_notification_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.vpcEndpointIdInput">vpc_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionEvents">connection_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionNotificationArn">connection_notification_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `vpc_endpoint_connection_notification_id`<sup>Required</sup> <a name="vpc_endpoint_connection_notification_id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.vpcEndpointConnectionNotificationId"></a>

```python
vpc_endpoint_connection_notification_id: str
```

- *Type:* str

---

##### `connection_events_input`<sup>Optional</sup> <a name="connection_events_input" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionEventsInput"></a>

```python
connection_events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_notification_arn_input`<sup>Optional</sup> <a name="connection_notification_arn_input" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionNotificationArnInput"></a>

```python
connection_notification_arn_input: str
```

- *Type:* str

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `vpc_endpoint_id_input`<sup>Optional</sup> <a name="vpc_endpoint_id_input" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.vpcEndpointIdInput"></a>

```python
vpc_endpoint_id_input: str
```

- *Type:* str

---

##### `connection_events`<sup>Required</sup> <a name="connection_events" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionEvents"></a>

```python
connection_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_notification_arn`<sup>Required</sup> <a name="connection_notification_arn" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionNotificationArn"></a>

```python
connection_notification_arn: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcEndpointConnectionNotificationConfig <a name="Ec2VpcEndpointConnectionNotificationConfig" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_endpoint_connection_notification

ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_events: typing.List[str],
  connection_notification_arn: str,
  service_id: str = None,
  vpc_endpoint_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.connectionEvents">connection_events</a></code> | <code>typing.List[str]</code> | The endpoint events for which to receive notifications. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.connectionNotificationArn">connection_notification_arn</a></code> | <code>str</code> | The ARN of the SNS topic for the notifications. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.serviceId">service_id</a></code> | <code>str</code> | The ID of the endpoint service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | The ID of the endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_events`<sup>Required</sup> <a name="connection_events" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.connectionEvents"></a>

```python
connection_events: typing.List[str]
```

- *Type:* typing.List[str]

The endpoint events for which to receive notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_endpoint_connection_notification#connection_events Ec2VpcEndpointConnectionNotification#connection_events}

---

##### `connection_notification_arn`<sup>Required</sup> <a name="connection_notification_arn" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.connectionNotificationArn"></a>

```python
connection_notification_arn: str
```

- *Type:* str

The ARN of the SNS topic for the notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_endpoint_connection_notification#connection_notification_arn Ec2VpcEndpointConnectionNotification#connection_notification_arn}

---

##### `service_id`<sup>Optional</sup> <a name="service_id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

The ID of the endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_endpoint_connection_notification#service_id Ec2VpcEndpointConnectionNotification#service_id}

---

##### `vpc_endpoint_id`<sup>Optional</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

The ID of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_endpoint_connection_notification#vpc_endpoint_id Ec2VpcEndpointConnectionNotification#vpc_endpoint_id}

---



