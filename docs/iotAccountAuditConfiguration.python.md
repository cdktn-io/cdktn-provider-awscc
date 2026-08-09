# `iotAccountAuditConfiguration` Submodule <a name="`iotAccountAuditConfiguration` Submodule" id="@cdktn/provider-awscc.iotAccountAuditConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotAccountAuditConfiguration <a name="IotAccountAuditConfiguration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration awscc_iot_account_audit_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  audit_check_configurations: IotAccountAuditConfigurationAuditCheckConfigurations,
  role_arn: str,
  audit_notification_target_configurations: IotAccountAuditConfigurationAuditNotificationTargetConfigurations = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Your 12-digit account ID (used as the primary identifier for the CloudFormation resource). |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.auditCheckConfigurations">audit_check_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations">IotAccountAuditConfigurationAuditCheckConfigurations</a></code> | Specifies which audit checks are enabled and disabled for this account. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as required when performing an audit. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.auditNotificationTargetConfigurations">audit_notification_target_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations">IotAccountAuditConfigurationAuditNotificationTargetConfigurations</a></code> | Information about the targets to which audit notifications are sent. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.accountId"></a>

- *Type:* str

Your 12-digit account ID (used as the primary identifier for the CloudFormation resource).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#account_id IotAccountAuditConfiguration#account_id}

---

##### `audit_check_configurations`<sup>Required</sup> <a name="audit_check_configurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.auditCheckConfigurations"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations">IotAccountAuditConfigurationAuditCheckConfigurations</a>

Specifies which audit checks are enabled and disabled for this account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#audit_check_configurations IotAccountAuditConfiguration#audit_check_configurations}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.roleArn"></a>

- *Type:* str

The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as required when performing an audit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#role_arn IotAccountAuditConfiguration#role_arn}

---

##### `audit_notification_target_configurations`<sup>Optional</sup> <a name="audit_notification_target_configurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.auditNotificationTargetConfigurations"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations">IotAccountAuditConfigurationAuditNotificationTargetConfigurations</a>

Information about the targets to which audit notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#audit_notification_target_configurations IotAccountAuditConfiguration#audit_notification_target_configurations}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations">put_audit_check_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditNotificationTargetConfigurations">put_audit_notification_target_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.resetAuditNotificationTargetConfigurations">reset_audit_notification_target_configurations</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_audit_check_configurations` <a name="put_audit_check_configurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations"></a>

```python
def put_audit_check_configurations(
  authenticated_cognito_role_overly_permissive_check: IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck = None,
  ca_certificate_expiring_check: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck = None,
  ca_certificate_key_quality_check: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck = None,
  conflicting_client_ids_check: IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck = None,
  device_certificate_age_check: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck = None,
  device_certificate_expiring_check: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck = None,
  device_certificate_key_quality_check: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck = None,
  device_certificate_shared_check: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck = None,
  intermediate_ca_revoked_for_active_device_certificates_check: IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck = None,
  iot_policy_overly_permissive_check: IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck = None,
  io_t_policy_potential_mis_configuration_check: IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck = None,
  iot_role_alias_allows_access_to_unused_services_check: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck = None,
  iot_role_alias_overly_permissive_check: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck = None,
  logging_disabled_check: IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck = None,
  revoked_ca_certificate_still_active_check: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck = None,
  revoked_device_certificate_still_active_check: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck = None,
  unauthenticated_cognito_role_overly_permissive_check: IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck = None
) -> None
```

###### `authenticated_cognito_role_overly_permissive_check`<sup>Optional</sup> <a name="authenticated_cognito_role_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations.parameter.authenticatedCognitoRoleOverlyPermissiveCheck"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#authenticated_cognito_role_overly_permissive_check IotAccountAuditConfiguration#authenticated_cognito_role_overly_permissive_check}

---

###### `ca_certificate_expiring_check`<sup>Optional</sup> <a name="ca_certificate_expiring_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations.parameter.caCertificateExpiringCheck"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#ca_certificate_expiring_check IotAccountAuditConfiguration#ca_certificate_expiring_check}

---

###### `ca_certificate_key_quality_check`<sup>Optional</sup> <a name="ca_certificate_key_quality_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations.parameter.caCertificateKeyQualityCheck"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#ca_certificate_key_quality_check IotAccountAuditConfiguration#ca_certificate_key_quality_check}

---

###### `conflicting_client_ids_check`<sup>Optional</sup> <a name="conflicting_client_ids_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations.parameter.conflictingClientIdsCheck"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck">IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#conflicting_client_ids_check IotAccountAuditConfiguration#conflicting_client_ids_check}

---

###### `device_certificate_age_check`<sup>Optional</sup> <a name="device_certificate_age_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations.parameter.deviceCertificateAgeCheck"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck</a>

A structure containing the configName and corresponding configValue for configuring DeviceCertAgeCheck.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#device_certificate_age_check IotAccountAuditConfiguration#device_certificate_age_check}

---

###### `device_certificate_expiring_check`<sup>Optional</sup> <a name="device_certificate_expiring_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations.parameter.deviceCertificateExpiringCheck"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck</a>

A structure containing the configName and corresponding configValue for configuring DeviceCertExpirationCheck.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#device_certificate_expiring_check IotAccountAuditConfiguration#device_certificate_expiring_check}

---

###### `device_certificate_key_quality_check`<sup>Optional</sup> <a name="device_certificate_key_quality_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations.parameter.deviceCertificateKeyQualityCheck"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#device_certificate_key_quality_check IotAccountAuditConfiguration#device_certificate_key_quality_check}

---

###### `device_certificate_shared_check`<sup>Optional</sup> <a name="device_certificate_shared_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations.parameter.deviceCertificateSharedCheck"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#device_certificate_shared_check IotAccountAuditConfiguration#device_certificate_shared_check}

---

###### `intermediate_ca_revoked_for_active_device_certificates_check`<sup>Optional</sup> <a name="intermediate_ca_revoked_for_active_device_certificates_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations.parameter.intermediateCaRevokedForActiveDeviceCertificatesCheck"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#intermediate_ca_revoked_for_active_device_certificates_check IotAccountAuditConfiguration#intermediate_ca_revoked_for_active_device_certificates_check}

---

###### `iot_policy_overly_permissive_check`<sup>Optional</sup> <a name="iot_policy_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations.parameter.iotPolicyOverlyPermissiveCheck"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#iot_policy_overly_permissive_check IotAccountAuditConfiguration#iot_policy_overly_permissive_check}

---

###### `io_t_policy_potential_mis_configuration_check`<sup>Optional</sup> <a name="io_t_policy_potential_mis_configuration_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations.parameter.ioTPolicyPotentialMisConfigurationCheck"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#io_t_policy_potential_mis_configuration_check IotAccountAuditConfiguration#io_t_policy_potential_mis_configuration_check}

---

###### `iot_role_alias_allows_access_to_unused_services_check`<sup>Optional</sup> <a name="iot_role_alias_allows_access_to_unused_services_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations.parameter.iotRoleAliasAllowsAccessToUnusedServicesCheck"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#iot_role_alias_allows_access_to_unused_services_check IotAccountAuditConfiguration#iot_role_alias_allows_access_to_unused_services_check}

---

###### `iot_role_alias_overly_permissive_check`<sup>Optional</sup> <a name="iot_role_alias_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations.parameter.iotRoleAliasOverlyPermissiveCheck"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#iot_role_alias_overly_permissive_check IotAccountAuditConfiguration#iot_role_alias_overly_permissive_check}

---

###### `logging_disabled_check`<sup>Optional</sup> <a name="logging_disabled_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations.parameter.loggingDisabledCheck"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck">IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#logging_disabled_check IotAccountAuditConfiguration#logging_disabled_check}

---

###### `revoked_ca_certificate_still_active_check`<sup>Optional</sup> <a name="revoked_ca_certificate_still_active_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations.parameter.revokedCaCertificateStillActiveCheck"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#revoked_ca_certificate_still_active_check IotAccountAuditConfiguration#revoked_ca_certificate_still_active_check}

---

###### `revoked_device_certificate_still_active_check`<sup>Optional</sup> <a name="revoked_device_certificate_still_active_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations.parameter.revokedDeviceCertificateStillActiveCheck"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#revoked_device_certificate_still_active_check IotAccountAuditConfiguration#revoked_device_certificate_still_active_check}

---

###### `unauthenticated_cognito_role_overly_permissive_check`<sup>Optional</sup> <a name="unauthenticated_cognito_role_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations.parameter.unauthenticatedCognitoRoleOverlyPermissiveCheck"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#unauthenticated_cognito_role_overly_permissive_check IotAccountAuditConfiguration#unauthenticated_cognito_role_overly_permissive_check}

---

##### `put_audit_notification_target_configurations` <a name="put_audit_notification_target_configurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditNotificationTargetConfigurations"></a>

```python
def put_audit_notification_target_configurations(
  sns: IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns = None
) -> None
```

###### `sns`<sup>Optional</sup> <a name="sns" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditNotificationTargetConfigurations.parameter.sns"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#sns IotAccountAuditConfiguration#sns}.

---

##### `reset_audit_notification_target_configurations` <a name="reset_audit_notification_target_configurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.resetAuditNotificationTargetConfigurations"></a>

```python
def reset_audit_notification_target_configurations() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotAccountAuditConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotAccountAuditConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotAccountAuditConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotAccountAuditConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotAccountAuditConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.auditCheckConfigurations">audit_check_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.auditNotificationTargetConfigurations">audit_notification_target_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.auditCheckConfigurationsInput">audit_check_configurations_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations">IotAccountAuditConfigurationAuditCheckConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.auditNotificationTargetConfigurationsInput">audit_notification_target_configurations_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations">IotAccountAuditConfigurationAuditNotificationTargetConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `audit_check_configurations`<sup>Required</sup> <a name="audit_check_configurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.auditCheckConfigurations"></a>

```python
audit_check_configurations: IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference</a>

---

##### `audit_notification_target_configurations`<sup>Required</sup> <a name="audit_notification_target_configurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.auditNotificationTargetConfigurations"></a>

```python
audit_notification_target_configurations: IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `audit_check_configurations_input`<sup>Optional</sup> <a name="audit_check_configurations_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.auditCheckConfigurationsInput"></a>

```python
audit_check_configurations_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations">IotAccountAuditConfigurationAuditCheckConfigurations</a>

---

##### `audit_notification_target_configurations_input`<sup>Optional</sup> <a name="audit_notification_target_configurations_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.auditNotificationTargetConfigurationsInput"></a>

```python
audit_notification_target_configurations_input: IResolvable | IotAccountAuditConfigurationAuditNotificationTargetConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations">IotAccountAuditConfigurationAuditNotificationTargetConfigurations</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotAccountAuditConfigurationAuditCheckConfigurations <a name="IotAccountAuditConfigurationAuditCheckConfigurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations(
  authenticated_cognito_role_overly_permissive_check: IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck = None,
  ca_certificate_expiring_check: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck = None,
  ca_certificate_key_quality_check: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck = None,
  conflicting_client_ids_check: IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck = None,
  device_certificate_age_check: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck = None,
  device_certificate_expiring_check: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck = None,
  device_certificate_key_quality_check: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck = None,
  device_certificate_shared_check: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck = None,
  intermediate_ca_revoked_for_active_device_certificates_check: IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck = None,
  iot_policy_overly_permissive_check: IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck = None,
  io_t_policy_potential_mis_configuration_check: IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck = None,
  iot_role_alias_allows_access_to_unused_services_check: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck = None,
  iot_role_alias_overly_permissive_check: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck = None,
  logging_disabled_check: IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck = None,
  revoked_ca_certificate_still_active_check: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck = None,
  revoked_device_certificate_still_active_check: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck = None,
  unauthenticated_cognito_role_overly_permissive_check: IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.authenticatedCognitoRoleOverlyPermissiveCheck">authenticated_cognito_role_overly_permissive_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.caCertificateExpiringCheck">ca_certificate_expiring_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.caCertificateKeyQualityCheck">ca_certificate_key_quality_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.conflictingClientIdsCheck">conflicting_client_ids_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck">IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.deviceCertificateAgeCheck">device_certificate_age_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck</a></code> | A structure containing the configName and corresponding configValue for configuring DeviceCertAgeCheck. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.deviceCertificateExpiringCheck">device_certificate_expiring_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck</a></code> | A structure containing the configName and corresponding configValue for configuring DeviceCertExpirationCheck. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.deviceCertificateKeyQualityCheck">device_certificate_key_quality_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.deviceCertificateSharedCheck">device_certificate_shared_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.intermediateCaRevokedForActiveDeviceCertificatesCheck">intermediate_ca_revoked_for_active_device_certificates_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.iotPolicyOverlyPermissiveCheck">iot_policy_overly_permissive_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.ioTPolicyPotentialMisConfigurationCheck">io_t_policy_potential_mis_configuration_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.iotRoleAliasAllowsAccessToUnusedServicesCheck">iot_role_alias_allows_access_to_unused_services_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.iotRoleAliasOverlyPermissiveCheck">iot_role_alias_overly_permissive_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.loggingDisabledCheck">logging_disabled_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck">IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.revokedCaCertificateStillActiveCheck">revoked_ca_certificate_still_active_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.revokedDeviceCertificateStillActiveCheck">revoked_device_certificate_still_active_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.unauthenticatedCognitoRoleOverlyPermissiveCheck">unauthenticated_cognito_role_overly_permissive_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | The configuration for a specific audit check. |

---

##### `authenticated_cognito_role_overly_permissive_check`<sup>Optional</sup> <a name="authenticated_cognito_role_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.authenticatedCognitoRoleOverlyPermissiveCheck"></a>

```python
authenticated_cognito_role_overly_permissive_check: IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#authenticated_cognito_role_overly_permissive_check IotAccountAuditConfiguration#authenticated_cognito_role_overly_permissive_check}

---

##### `ca_certificate_expiring_check`<sup>Optional</sup> <a name="ca_certificate_expiring_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.caCertificateExpiringCheck"></a>

```python
ca_certificate_expiring_check: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#ca_certificate_expiring_check IotAccountAuditConfiguration#ca_certificate_expiring_check}

---

##### `ca_certificate_key_quality_check`<sup>Optional</sup> <a name="ca_certificate_key_quality_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.caCertificateKeyQualityCheck"></a>

```python
ca_certificate_key_quality_check: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#ca_certificate_key_quality_check IotAccountAuditConfiguration#ca_certificate_key_quality_check}

---

##### `conflicting_client_ids_check`<sup>Optional</sup> <a name="conflicting_client_ids_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.conflictingClientIdsCheck"></a>

```python
conflicting_client_ids_check: IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck">IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#conflicting_client_ids_check IotAccountAuditConfiguration#conflicting_client_ids_check}

---

##### `device_certificate_age_check`<sup>Optional</sup> <a name="device_certificate_age_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.deviceCertificateAgeCheck"></a>

```python
device_certificate_age_check: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck</a>

A structure containing the configName and corresponding configValue for configuring DeviceCertAgeCheck.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#device_certificate_age_check IotAccountAuditConfiguration#device_certificate_age_check}

---

##### `device_certificate_expiring_check`<sup>Optional</sup> <a name="device_certificate_expiring_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.deviceCertificateExpiringCheck"></a>

```python
device_certificate_expiring_check: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck</a>

A structure containing the configName and corresponding configValue for configuring DeviceCertExpirationCheck.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#device_certificate_expiring_check IotAccountAuditConfiguration#device_certificate_expiring_check}

---

##### `device_certificate_key_quality_check`<sup>Optional</sup> <a name="device_certificate_key_quality_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.deviceCertificateKeyQualityCheck"></a>

```python
device_certificate_key_quality_check: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#device_certificate_key_quality_check IotAccountAuditConfiguration#device_certificate_key_quality_check}

---

##### `device_certificate_shared_check`<sup>Optional</sup> <a name="device_certificate_shared_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.deviceCertificateSharedCheck"></a>

```python
device_certificate_shared_check: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#device_certificate_shared_check IotAccountAuditConfiguration#device_certificate_shared_check}

---

##### `intermediate_ca_revoked_for_active_device_certificates_check`<sup>Optional</sup> <a name="intermediate_ca_revoked_for_active_device_certificates_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.intermediateCaRevokedForActiveDeviceCertificatesCheck"></a>

```python
intermediate_ca_revoked_for_active_device_certificates_check: IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#intermediate_ca_revoked_for_active_device_certificates_check IotAccountAuditConfiguration#intermediate_ca_revoked_for_active_device_certificates_check}

---

##### `iot_policy_overly_permissive_check`<sup>Optional</sup> <a name="iot_policy_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.iotPolicyOverlyPermissiveCheck"></a>

```python
iot_policy_overly_permissive_check: IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#iot_policy_overly_permissive_check IotAccountAuditConfiguration#iot_policy_overly_permissive_check}

---

##### `io_t_policy_potential_mis_configuration_check`<sup>Optional</sup> <a name="io_t_policy_potential_mis_configuration_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.ioTPolicyPotentialMisConfigurationCheck"></a>

```python
io_t_policy_potential_mis_configuration_check: IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#io_t_policy_potential_mis_configuration_check IotAccountAuditConfiguration#io_t_policy_potential_mis_configuration_check}

---

##### `iot_role_alias_allows_access_to_unused_services_check`<sup>Optional</sup> <a name="iot_role_alias_allows_access_to_unused_services_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.iotRoleAliasAllowsAccessToUnusedServicesCheck"></a>

```python
iot_role_alias_allows_access_to_unused_services_check: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#iot_role_alias_allows_access_to_unused_services_check IotAccountAuditConfiguration#iot_role_alias_allows_access_to_unused_services_check}

---

##### `iot_role_alias_overly_permissive_check`<sup>Optional</sup> <a name="iot_role_alias_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.iotRoleAliasOverlyPermissiveCheck"></a>

```python
iot_role_alias_overly_permissive_check: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#iot_role_alias_overly_permissive_check IotAccountAuditConfiguration#iot_role_alias_overly_permissive_check}

---

##### `logging_disabled_check`<sup>Optional</sup> <a name="logging_disabled_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.loggingDisabledCheck"></a>

```python
logging_disabled_check: IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck">IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#logging_disabled_check IotAccountAuditConfiguration#logging_disabled_check}

---

##### `revoked_ca_certificate_still_active_check`<sup>Optional</sup> <a name="revoked_ca_certificate_still_active_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.revokedCaCertificateStillActiveCheck"></a>

```python
revoked_ca_certificate_still_active_check: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#revoked_ca_certificate_still_active_check IotAccountAuditConfiguration#revoked_ca_certificate_still_active_check}

---

##### `revoked_device_certificate_still_active_check`<sup>Optional</sup> <a name="revoked_device_certificate_still_active_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.revokedDeviceCertificateStillActiveCheck"></a>

```python
revoked_device_certificate_still_active_check: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#revoked_device_certificate_still_active_check IotAccountAuditConfiguration#revoked_device_certificate_still_active_check}

---

##### `unauthenticated_cognito_role_overly_permissive_check`<sup>Optional</sup> <a name="unauthenticated_cognito_role_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.unauthenticatedCognitoRoleOverlyPermissiveCheck"></a>

```python
unauthenticated_cognito_role_overly_permissive_check: IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#unauthenticated_cognito_role_overly_permissive_check IotAccountAuditConfiguration#unauthenticated_cognito_role_overly_permissive_check}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck(
  configuration: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration</a></code> | A structure containing the configName and corresponding configValue for configuring audit checks. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck.property.configuration"></a>

```python
configuration: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration</a>

A structure containing the configName and corresponding configValue for configuring audit checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#configuration IotAccountAuditConfiguration#configuration}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration(
  cert_age_threshold_in_days: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration.property.certAgeThresholdInDays">cert_age_threshold_in_days</a></code> | <code>str</code> | The configValue for configuring audit checks. |

---

##### `cert_age_threshold_in_days`<sup>Optional</sup> <a name="cert_age_threshold_in_days" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration.property.certAgeThresholdInDays"></a>

```python
cert_age_threshold_in_days: str
```

- *Type:* str

The configValue for configuring audit checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#cert_age_threshold_in_days IotAccountAuditConfiguration#cert_age_threshold_in_days}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck(
  configuration: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration</a></code> | A structure containing the configName and corresponding configValue for configuring audit checks. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck.property.configuration"></a>

```python
configuration: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration</a>

A structure containing the configName and corresponding configValue for configuring audit checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#configuration IotAccountAuditConfiguration#configuration}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration(
  cert_expiration_threshold_in_days: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration.property.certExpirationThresholdInDays">cert_expiration_threshold_in_days</a></code> | <code>str</code> | The configValue for configuring audit checks. |

---

##### `cert_expiration_threshold_in_days`<sup>Optional</sup> <a name="cert_expiration_threshold_in_days" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration.property.certExpirationThresholdInDays"></a>

```python
cert_expiration_threshold_in_days: str
```

- *Type:* str

The configValue for configuring audit checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#cert_expiration_threshold_in_days IotAccountAuditConfiguration#cert_expiration_threshold_in_days}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditNotificationTargetConfigurations <a name="IotAccountAuditConfigurationAuditNotificationTargetConfigurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations(
  sns: IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations.property.sns">sns</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#sns IotAccountAuditConfiguration#sns}. |

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations.property.sns"></a>

```python
sns: IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#sns IotAccountAuditConfiguration#sns}.

---

### IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns <a name="IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns(
  enabled: bool | IResolvable = None,
  role_arn: str = None,
  target_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if notifications to the target are enabled. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the role that grants permission to send notifications to the target. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns.property.targetArn">target_arn</a></code> | <code>str</code> | The ARN of the target (SNS topic) to which audit notifications are sent. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if notifications to the target are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of the role that grants permission to send notifications to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#role_arn IotAccountAuditConfiguration#role_arn}

---

##### `target_arn`<sup>Optional</sup> <a name="target_arn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

The ARN of the target (SNS topic) to which audit notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#target_arn IotAccountAuditConfiguration#target_arn}

---

### IotAccountAuditConfigurationConfig <a name="IotAccountAuditConfigurationConfig" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  audit_check_configurations: IotAccountAuditConfigurationAuditCheckConfigurations,
  role_arn: str,
  audit_notification_target_configurations: IotAccountAuditConfigurationAuditNotificationTargetConfigurations = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.accountId">account_id</a></code> | <code>str</code> | Your 12-digit account ID (used as the primary identifier for the CloudFormation resource). |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.auditCheckConfigurations">audit_check_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations">IotAccountAuditConfigurationAuditCheckConfigurations</a></code> | Specifies which audit checks are enabled and disabled for this account. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as required when performing an audit. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.auditNotificationTargetConfigurations">audit_notification_target_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations">IotAccountAuditConfigurationAuditNotificationTargetConfigurations</a></code> | Information about the targets to which audit notifications are sent. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Your 12-digit account ID (used as the primary identifier for the CloudFormation resource).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#account_id IotAccountAuditConfiguration#account_id}

---

##### `audit_check_configurations`<sup>Required</sup> <a name="audit_check_configurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.auditCheckConfigurations"></a>

```python
audit_check_configurations: IotAccountAuditConfigurationAuditCheckConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations">IotAccountAuditConfigurationAuditCheckConfigurations</a>

Specifies which audit checks are enabled and disabled for this account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#audit_check_configurations IotAccountAuditConfiguration#audit_check_configurations}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as required when performing an audit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#role_arn IotAccountAuditConfiguration#role_arn}

---

##### `audit_notification_target_configurations`<sup>Optional</sup> <a name="audit_notification_target_configurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.auditNotificationTargetConfigurations"></a>

```python
audit_notification_target_configurations: IotAccountAuditConfigurationAuditNotificationTargetConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations">IotAccountAuditConfigurationAuditNotificationTargetConfigurations</a>

Information about the targets to which audit notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#audit_notification_target_configurations IotAccountAuditConfiguration#audit_notification_target_configurations}

---

## Classes <a name="Classes" id="Classes"></a>

### IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck">IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck">IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.resetCertAgeThresholdInDays">reset_cert_age_threshold_in_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cert_age_threshold_in_days` <a name="reset_cert_age_threshold_in_days" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.resetCertAgeThresholdInDays"></a>

```python
def reset_cert_age_threshold_in_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.certAgeThresholdInDaysInput">cert_age_threshold_in_days_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.certAgeThresholdInDays">cert_age_threshold_in_days</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_age_threshold_in_days_input`<sup>Optional</sup> <a name="cert_age_threshold_in_days_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.certAgeThresholdInDaysInput"></a>

```python
cert_age_threshold_in_days_input: str
```

- *Type:* str

---

##### `cert_age_threshold_in_days`<sup>Required</sup> <a name="cert_age_threshold_in_days" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.certAgeThresholdInDays"></a>

```python
cert_age_threshold_in_days: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.putConfiguration"></a>

```python
def put_configuration(
  cert_age_threshold_in_days: str = None
) -> None
```

###### `cert_age_threshold_in_days`<sup>Optional</sup> <a name="cert_age_threshold_in_days" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.putConfiguration.parameter.certAgeThresholdInDays"></a>

- *Type:* str

The configValue for configuring audit checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#cert_age_threshold_in_days IotAccountAuditConfiguration#cert_age_threshold_in_days}

---

##### `reset_configuration` <a name="reset_configuration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.configuration"></a>

```python
configuration: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference</a>

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.configurationInput"></a>

```python
configuration_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.resetCertExpirationThresholdInDays">reset_cert_expiration_threshold_in_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cert_expiration_threshold_in_days` <a name="reset_cert_expiration_threshold_in_days" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.resetCertExpirationThresholdInDays"></a>

```python
def reset_cert_expiration_threshold_in_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.certExpirationThresholdInDaysInput">cert_expiration_threshold_in_days_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.certExpirationThresholdInDays">cert_expiration_threshold_in_days</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_expiration_threshold_in_days_input`<sup>Optional</sup> <a name="cert_expiration_threshold_in_days_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.certExpirationThresholdInDaysInput"></a>

```python
cert_expiration_threshold_in_days_input: str
```

- *Type:* str

---

##### `cert_expiration_threshold_in_days`<sup>Required</sup> <a name="cert_expiration_threshold_in_days" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.certExpirationThresholdInDays"></a>

```python
cert_expiration_threshold_in_days: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.putConfiguration"></a>

```python
def put_configuration(
  cert_expiration_threshold_in_days: str = None
) -> None
```

###### `cert_expiration_threshold_in_days`<sup>Optional</sup> <a name="cert_expiration_threshold_in_days" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.putConfiguration.parameter.certExpirationThresholdInDays"></a>

- *Type:* str

The configValue for configuring audit checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#cert_expiration_threshold_in_days IotAccountAuditConfiguration#cert_expiration_threshold_in_days}

---

##### `reset_configuration` <a name="reset_configuration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.configuration"></a>

```python
configuration: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference</a>

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.configurationInput"></a>

```python
configuration_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck">IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck">IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putAuthenticatedCognitoRoleOverlyPermissiveCheck">put_authenticated_cognito_role_overly_permissive_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putCaCertificateExpiringCheck">put_ca_certificate_expiring_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putCaCertificateKeyQualityCheck">put_ca_certificate_key_quality_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putConflictingClientIdsCheck">put_conflicting_client_ids_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateAgeCheck">put_device_certificate_age_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateExpiringCheck">put_device_certificate_expiring_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateKeyQualityCheck">put_device_certificate_key_quality_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateSharedCheck">put_device_certificate_shared_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIntermediateCaRevokedForActiveDeviceCertificatesCheck">put_intermediate_ca_revoked_for_active_device_certificates_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIotPolicyOverlyPermissiveCheck">put_iot_policy_overly_permissive_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIoTPolicyPotentialMisConfigurationCheck">put_io_t_policy_potential_mis_configuration_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIotRoleAliasAllowsAccessToUnusedServicesCheck">put_iot_role_alias_allows_access_to_unused_services_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIotRoleAliasOverlyPermissiveCheck">put_iot_role_alias_overly_permissive_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putLoggingDisabledCheck">put_logging_disabled_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putRevokedCaCertificateStillActiveCheck">put_revoked_ca_certificate_still_active_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putRevokedDeviceCertificateStillActiveCheck">put_revoked_device_certificate_still_active_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putUnauthenticatedCognitoRoleOverlyPermissiveCheck">put_unauthenticated_cognito_role_overly_permissive_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetAuthenticatedCognitoRoleOverlyPermissiveCheck">reset_authenticated_cognito_role_overly_permissive_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetCaCertificateExpiringCheck">reset_ca_certificate_expiring_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetCaCertificateKeyQualityCheck">reset_ca_certificate_key_quality_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetConflictingClientIdsCheck">reset_conflicting_client_ids_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetDeviceCertificateAgeCheck">reset_device_certificate_age_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetDeviceCertificateExpiringCheck">reset_device_certificate_expiring_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetDeviceCertificateKeyQualityCheck">reset_device_certificate_key_quality_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetDeviceCertificateSharedCheck">reset_device_certificate_shared_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIntermediateCaRevokedForActiveDeviceCertificatesCheck">reset_intermediate_ca_revoked_for_active_device_certificates_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIotPolicyOverlyPermissiveCheck">reset_iot_policy_overly_permissive_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIoTPolicyPotentialMisConfigurationCheck">reset_io_t_policy_potential_mis_configuration_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIotRoleAliasAllowsAccessToUnusedServicesCheck">reset_iot_role_alias_allows_access_to_unused_services_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIotRoleAliasOverlyPermissiveCheck">reset_iot_role_alias_overly_permissive_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetLoggingDisabledCheck">reset_logging_disabled_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetRevokedCaCertificateStillActiveCheck">reset_revoked_ca_certificate_still_active_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetRevokedDeviceCertificateStillActiveCheck">reset_revoked_device_certificate_still_active_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetUnauthenticatedCognitoRoleOverlyPermissiveCheck">reset_unauthenticated_cognito_role_overly_permissive_check</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authenticated_cognito_role_overly_permissive_check` <a name="put_authenticated_cognito_role_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putAuthenticatedCognitoRoleOverlyPermissiveCheck"></a>

```python
def put_authenticated_cognito_role_overly_permissive_check(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putAuthenticatedCognitoRoleOverlyPermissiveCheck.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

##### `put_ca_certificate_expiring_check` <a name="put_ca_certificate_expiring_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putCaCertificateExpiringCheck"></a>

```python
def put_ca_certificate_expiring_check(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putCaCertificateExpiringCheck.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

##### `put_ca_certificate_key_quality_check` <a name="put_ca_certificate_key_quality_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putCaCertificateKeyQualityCheck"></a>

```python
def put_ca_certificate_key_quality_check(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putCaCertificateKeyQualityCheck.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

##### `put_conflicting_client_ids_check` <a name="put_conflicting_client_ids_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putConflictingClientIdsCheck"></a>

```python
def put_conflicting_client_ids_check(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putConflictingClientIdsCheck.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

##### `put_device_certificate_age_check` <a name="put_device_certificate_age_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateAgeCheck"></a>

```python
def put_device_certificate_age_check(
  configuration: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration = None,
  enabled: bool | IResolvable = None
) -> None
```

###### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateAgeCheck.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration</a>

A structure containing the configName and corresponding configValue for configuring audit checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#configuration IotAccountAuditConfiguration#configuration}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateAgeCheck.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

##### `put_device_certificate_expiring_check` <a name="put_device_certificate_expiring_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateExpiringCheck"></a>

```python
def put_device_certificate_expiring_check(
  configuration: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration = None,
  enabled: bool | IResolvable = None
) -> None
```

###### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateExpiringCheck.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration</a>

A structure containing the configName and corresponding configValue for configuring audit checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#configuration IotAccountAuditConfiguration#configuration}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateExpiringCheck.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

##### `put_device_certificate_key_quality_check` <a name="put_device_certificate_key_quality_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateKeyQualityCheck"></a>

```python
def put_device_certificate_key_quality_check(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateKeyQualityCheck.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

##### `put_device_certificate_shared_check` <a name="put_device_certificate_shared_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateSharedCheck"></a>

```python
def put_device_certificate_shared_check(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateSharedCheck.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

##### `put_intermediate_ca_revoked_for_active_device_certificates_check` <a name="put_intermediate_ca_revoked_for_active_device_certificates_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIntermediateCaRevokedForActiveDeviceCertificatesCheck"></a>

```python
def put_intermediate_ca_revoked_for_active_device_certificates_check(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIntermediateCaRevokedForActiveDeviceCertificatesCheck.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

##### `put_iot_policy_overly_permissive_check` <a name="put_iot_policy_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIotPolicyOverlyPermissiveCheck"></a>

```python
def put_iot_policy_overly_permissive_check(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIotPolicyOverlyPermissiveCheck.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

##### `put_io_t_policy_potential_mis_configuration_check` <a name="put_io_t_policy_potential_mis_configuration_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIoTPolicyPotentialMisConfigurationCheck"></a>

```python
def put_io_t_policy_potential_mis_configuration_check(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIoTPolicyPotentialMisConfigurationCheck.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

##### `put_iot_role_alias_allows_access_to_unused_services_check` <a name="put_iot_role_alias_allows_access_to_unused_services_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIotRoleAliasAllowsAccessToUnusedServicesCheck"></a>

```python
def put_iot_role_alias_allows_access_to_unused_services_check(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIotRoleAliasAllowsAccessToUnusedServicesCheck.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

##### `put_iot_role_alias_overly_permissive_check` <a name="put_iot_role_alias_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIotRoleAliasOverlyPermissiveCheck"></a>

```python
def put_iot_role_alias_overly_permissive_check(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIotRoleAliasOverlyPermissiveCheck.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

##### `put_logging_disabled_check` <a name="put_logging_disabled_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putLoggingDisabledCheck"></a>

```python
def put_logging_disabled_check(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putLoggingDisabledCheck.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

##### `put_revoked_ca_certificate_still_active_check` <a name="put_revoked_ca_certificate_still_active_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putRevokedCaCertificateStillActiveCheck"></a>

```python
def put_revoked_ca_certificate_still_active_check(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putRevokedCaCertificateStillActiveCheck.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

##### `put_revoked_device_certificate_still_active_check` <a name="put_revoked_device_certificate_still_active_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putRevokedDeviceCertificateStillActiveCheck"></a>

```python
def put_revoked_device_certificate_still_active_check(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putRevokedDeviceCertificateStillActiveCheck.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

##### `put_unauthenticated_cognito_role_overly_permissive_check` <a name="put_unauthenticated_cognito_role_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putUnauthenticatedCognitoRoleOverlyPermissiveCheck"></a>

```python
def put_unauthenticated_cognito_role_overly_permissive_check(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putUnauthenticatedCognitoRoleOverlyPermissiveCheck.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

##### `reset_authenticated_cognito_role_overly_permissive_check` <a name="reset_authenticated_cognito_role_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetAuthenticatedCognitoRoleOverlyPermissiveCheck"></a>

```python
def reset_authenticated_cognito_role_overly_permissive_check() -> None
```

##### `reset_ca_certificate_expiring_check` <a name="reset_ca_certificate_expiring_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetCaCertificateExpiringCheck"></a>

```python
def reset_ca_certificate_expiring_check() -> None
```

##### `reset_ca_certificate_key_quality_check` <a name="reset_ca_certificate_key_quality_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetCaCertificateKeyQualityCheck"></a>

```python
def reset_ca_certificate_key_quality_check() -> None
```

##### `reset_conflicting_client_ids_check` <a name="reset_conflicting_client_ids_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetConflictingClientIdsCheck"></a>

```python
def reset_conflicting_client_ids_check() -> None
```

##### `reset_device_certificate_age_check` <a name="reset_device_certificate_age_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetDeviceCertificateAgeCheck"></a>

```python
def reset_device_certificate_age_check() -> None
```

##### `reset_device_certificate_expiring_check` <a name="reset_device_certificate_expiring_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetDeviceCertificateExpiringCheck"></a>

```python
def reset_device_certificate_expiring_check() -> None
```

##### `reset_device_certificate_key_quality_check` <a name="reset_device_certificate_key_quality_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetDeviceCertificateKeyQualityCheck"></a>

```python
def reset_device_certificate_key_quality_check() -> None
```

##### `reset_device_certificate_shared_check` <a name="reset_device_certificate_shared_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetDeviceCertificateSharedCheck"></a>

```python
def reset_device_certificate_shared_check() -> None
```

##### `reset_intermediate_ca_revoked_for_active_device_certificates_check` <a name="reset_intermediate_ca_revoked_for_active_device_certificates_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIntermediateCaRevokedForActiveDeviceCertificatesCheck"></a>

```python
def reset_intermediate_ca_revoked_for_active_device_certificates_check() -> None
```

##### `reset_iot_policy_overly_permissive_check` <a name="reset_iot_policy_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIotPolicyOverlyPermissiveCheck"></a>

```python
def reset_iot_policy_overly_permissive_check() -> None
```

##### `reset_io_t_policy_potential_mis_configuration_check` <a name="reset_io_t_policy_potential_mis_configuration_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIoTPolicyPotentialMisConfigurationCheck"></a>

```python
def reset_io_t_policy_potential_mis_configuration_check() -> None
```

##### `reset_iot_role_alias_allows_access_to_unused_services_check` <a name="reset_iot_role_alias_allows_access_to_unused_services_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIotRoleAliasAllowsAccessToUnusedServicesCheck"></a>

```python
def reset_iot_role_alias_allows_access_to_unused_services_check() -> None
```

##### `reset_iot_role_alias_overly_permissive_check` <a name="reset_iot_role_alias_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIotRoleAliasOverlyPermissiveCheck"></a>

```python
def reset_iot_role_alias_overly_permissive_check() -> None
```

##### `reset_logging_disabled_check` <a name="reset_logging_disabled_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetLoggingDisabledCheck"></a>

```python
def reset_logging_disabled_check() -> None
```

##### `reset_revoked_ca_certificate_still_active_check` <a name="reset_revoked_ca_certificate_still_active_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetRevokedCaCertificateStillActiveCheck"></a>

```python
def reset_revoked_ca_certificate_still_active_check() -> None
```

##### `reset_revoked_device_certificate_still_active_check` <a name="reset_revoked_device_certificate_still_active_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetRevokedDeviceCertificateStillActiveCheck"></a>

```python
def reset_revoked_device_certificate_still_active_check() -> None
```

##### `reset_unauthenticated_cognito_role_overly_permissive_check` <a name="reset_unauthenticated_cognito_role_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetUnauthenticatedCognitoRoleOverlyPermissiveCheck"></a>

```python
def reset_unauthenticated_cognito_role_overly_permissive_check() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.authenticatedCognitoRoleOverlyPermissiveCheck">authenticated_cognito_role_overly_permissive_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.caCertificateExpiringCheck">ca_certificate_expiring_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.caCertificateKeyQualityCheck">ca_certificate_key_quality_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.conflictingClientIdsCheck">conflicting_client_ids_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateAgeCheck">device_certificate_age_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateExpiringCheck">device_certificate_expiring_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateKeyQualityCheck">device_certificate_key_quality_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateSharedCheck">device_certificate_shared_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.intermediateCaRevokedForActiveDeviceCertificatesCheck">intermediate_ca_revoked_for_active_device_certificates_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotPolicyOverlyPermissiveCheck">iot_policy_overly_permissive_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.ioTPolicyPotentialMisConfigurationCheck">io_t_policy_potential_mis_configuration_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotRoleAliasAllowsAccessToUnusedServicesCheck">iot_role_alias_allows_access_to_unused_services_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotRoleAliasOverlyPermissiveCheck">iot_role_alias_overly_permissive_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.loggingDisabledCheck">logging_disabled_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.revokedCaCertificateStillActiveCheck">revoked_ca_certificate_still_active_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.revokedDeviceCertificateStillActiveCheck">revoked_device_certificate_still_active_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.unauthenticatedCognitoRoleOverlyPermissiveCheck">unauthenticated_cognito_role_overly_permissive_check</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.authenticatedCognitoRoleOverlyPermissiveCheckInput">authenticated_cognito_role_overly_permissive_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.caCertificateExpiringCheckInput">ca_certificate_expiring_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.caCertificateKeyQualityCheckInput">ca_certificate_key_quality_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.conflictingClientIdsCheckInput">conflicting_client_ids_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck">IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateAgeCheckInput">device_certificate_age_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateExpiringCheckInput">device_certificate_expiring_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateKeyQualityCheckInput">device_certificate_key_quality_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateSharedCheckInput">device_certificate_shared_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.intermediateCaRevokedForActiveDeviceCertificatesCheckInput">intermediate_ca_revoked_for_active_device_certificates_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotPolicyOverlyPermissiveCheckInput">iot_policy_overly_permissive_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.ioTPolicyPotentialMisConfigurationCheckInput">io_t_policy_potential_mis_configuration_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotRoleAliasAllowsAccessToUnusedServicesCheckInput">iot_role_alias_allows_access_to_unused_services_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotRoleAliasOverlyPermissiveCheckInput">iot_role_alias_overly_permissive_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.loggingDisabledCheckInput">logging_disabled_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck">IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.revokedCaCertificateStillActiveCheckInput">revoked_ca_certificate_still_active_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.revokedDeviceCertificateStillActiveCheckInput">revoked_device_certificate_still_active_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.unauthenticatedCognitoRoleOverlyPermissiveCheckInput">unauthenticated_cognito_role_overly_permissive_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations">IotAccountAuditConfigurationAuditCheckConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authenticated_cognito_role_overly_permissive_check`<sup>Required</sup> <a name="authenticated_cognito_role_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.authenticatedCognitoRoleOverlyPermissiveCheck"></a>

```python
authenticated_cognito_role_overly_permissive_check: IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference</a>

---

##### `ca_certificate_expiring_check`<sup>Required</sup> <a name="ca_certificate_expiring_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.caCertificateExpiringCheck"></a>

```python
ca_certificate_expiring_check: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference</a>

---

##### `ca_certificate_key_quality_check`<sup>Required</sup> <a name="ca_certificate_key_quality_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.caCertificateKeyQualityCheck"></a>

```python
ca_certificate_key_quality_check: IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference</a>

---

##### `conflicting_client_ids_check`<sup>Required</sup> <a name="conflicting_client_ids_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.conflictingClientIdsCheck"></a>

```python
conflicting_client_ids_check: IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference</a>

---

##### `device_certificate_age_check`<sup>Required</sup> <a name="device_certificate_age_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateAgeCheck"></a>

```python
device_certificate_age_check: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference</a>

---

##### `device_certificate_expiring_check`<sup>Required</sup> <a name="device_certificate_expiring_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateExpiringCheck"></a>

```python
device_certificate_expiring_check: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference</a>

---

##### `device_certificate_key_quality_check`<sup>Required</sup> <a name="device_certificate_key_quality_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateKeyQualityCheck"></a>

```python
device_certificate_key_quality_check: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference</a>

---

##### `device_certificate_shared_check`<sup>Required</sup> <a name="device_certificate_shared_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateSharedCheck"></a>

```python
device_certificate_shared_check: IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference</a>

---

##### `intermediate_ca_revoked_for_active_device_certificates_check`<sup>Required</sup> <a name="intermediate_ca_revoked_for_active_device_certificates_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.intermediateCaRevokedForActiveDeviceCertificatesCheck"></a>

```python
intermediate_ca_revoked_for_active_device_certificates_check: IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference</a>

---

##### `iot_policy_overly_permissive_check`<sup>Required</sup> <a name="iot_policy_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotPolicyOverlyPermissiveCheck"></a>

```python
iot_policy_overly_permissive_check: IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference</a>

---

##### `io_t_policy_potential_mis_configuration_check`<sup>Required</sup> <a name="io_t_policy_potential_mis_configuration_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.ioTPolicyPotentialMisConfigurationCheck"></a>

```python
io_t_policy_potential_mis_configuration_check: IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference</a>

---

##### `iot_role_alias_allows_access_to_unused_services_check`<sup>Required</sup> <a name="iot_role_alias_allows_access_to_unused_services_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotRoleAliasAllowsAccessToUnusedServicesCheck"></a>

```python
iot_role_alias_allows_access_to_unused_services_check: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference</a>

---

##### `iot_role_alias_overly_permissive_check`<sup>Required</sup> <a name="iot_role_alias_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotRoleAliasOverlyPermissiveCheck"></a>

```python
iot_role_alias_overly_permissive_check: IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference</a>

---

##### `logging_disabled_check`<sup>Required</sup> <a name="logging_disabled_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.loggingDisabledCheck"></a>

```python
logging_disabled_check: IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference</a>

---

##### `revoked_ca_certificate_still_active_check`<sup>Required</sup> <a name="revoked_ca_certificate_still_active_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.revokedCaCertificateStillActiveCheck"></a>

```python
revoked_ca_certificate_still_active_check: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference</a>

---

##### `revoked_device_certificate_still_active_check`<sup>Required</sup> <a name="revoked_device_certificate_still_active_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.revokedDeviceCertificateStillActiveCheck"></a>

```python
revoked_device_certificate_still_active_check: IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference</a>

---

##### `unauthenticated_cognito_role_overly_permissive_check`<sup>Required</sup> <a name="unauthenticated_cognito_role_overly_permissive_check" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.unauthenticatedCognitoRoleOverlyPermissiveCheck"></a>

```python
unauthenticated_cognito_role_overly_permissive_check: IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference</a>

---

##### `authenticated_cognito_role_overly_permissive_check_input`<sup>Optional</sup> <a name="authenticated_cognito_role_overly_permissive_check_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.authenticatedCognitoRoleOverlyPermissiveCheckInput"></a>

```python
authenticated_cognito_role_overly_permissive_check_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck</a>

---

##### `ca_certificate_expiring_check_input`<sup>Optional</sup> <a name="ca_certificate_expiring_check_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.caCertificateExpiringCheckInput"></a>

```python
ca_certificate_expiring_check_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck</a>

---

##### `ca_certificate_key_quality_check_input`<sup>Optional</sup> <a name="ca_certificate_key_quality_check_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.caCertificateKeyQualityCheckInput"></a>

```python
ca_certificate_key_quality_check_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck</a>

---

##### `conflicting_client_ids_check_input`<sup>Optional</sup> <a name="conflicting_client_ids_check_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.conflictingClientIdsCheckInput"></a>

```python
conflicting_client_ids_check_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck">IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck</a>

---

##### `device_certificate_age_check_input`<sup>Optional</sup> <a name="device_certificate_age_check_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateAgeCheckInput"></a>

```python
device_certificate_age_check_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck</a>

---

##### `device_certificate_expiring_check_input`<sup>Optional</sup> <a name="device_certificate_expiring_check_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateExpiringCheckInput"></a>

```python
device_certificate_expiring_check_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck</a>

---

##### `device_certificate_key_quality_check_input`<sup>Optional</sup> <a name="device_certificate_key_quality_check_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateKeyQualityCheckInput"></a>

```python
device_certificate_key_quality_check_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck</a>

---

##### `device_certificate_shared_check_input`<sup>Optional</sup> <a name="device_certificate_shared_check_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateSharedCheckInput"></a>

```python
device_certificate_shared_check_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck</a>

---

##### `intermediate_ca_revoked_for_active_device_certificates_check_input`<sup>Optional</sup> <a name="intermediate_ca_revoked_for_active_device_certificates_check_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.intermediateCaRevokedForActiveDeviceCertificatesCheckInput"></a>

```python
intermediate_ca_revoked_for_active_device_certificates_check_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck</a>

---

##### `iot_policy_overly_permissive_check_input`<sup>Optional</sup> <a name="iot_policy_overly_permissive_check_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotPolicyOverlyPermissiveCheckInput"></a>

```python
iot_policy_overly_permissive_check_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck</a>

---

##### `io_t_policy_potential_mis_configuration_check_input`<sup>Optional</sup> <a name="io_t_policy_potential_mis_configuration_check_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.ioTPolicyPotentialMisConfigurationCheckInput"></a>

```python
io_t_policy_potential_mis_configuration_check_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck</a>

---

##### `iot_role_alias_allows_access_to_unused_services_check_input`<sup>Optional</sup> <a name="iot_role_alias_allows_access_to_unused_services_check_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotRoleAliasAllowsAccessToUnusedServicesCheckInput"></a>

```python
iot_role_alias_allows_access_to_unused_services_check_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck</a>

---

##### `iot_role_alias_overly_permissive_check_input`<sup>Optional</sup> <a name="iot_role_alias_overly_permissive_check_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotRoleAliasOverlyPermissiveCheckInput"></a>

```python
iot_role_alias_overly_permissive_check_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck</a>

---

##### `logging_disabled_check_input`<sup>Optional</sup> <a name="logging_disabled_check_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.loggingDisabledCheckInput"></a>

```python
logging_disabled_check_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck">IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck</a>

---

##### `revoked_ca_certificate_still_active_check_input`<sup>Optional</sup> <a name="revoked_ca_certificate_still_active_check_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.revokedCaCertificateStillActiveCheckInput"></a>

```python
revoked_ca_certificate_still_active_check_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck</a>

---

##### `revoked_device_certificate_still_active_check_input`<sup>Optional</sup> <a name="revoked_device_certificate_still_active_check_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.revokedDeviceCertificateStillActiveCheckInput"></a>

```python
revoked_device_certificate_still_active_check_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck</a>

---

##### `unauthenticated_cognito_role_overly_permissive_check_input`<sup>Optional</sup> <a name="unauthenticated_cognito_role_overly_permissive_check_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.unauthenticatedCognitoRoleOverlyPermissiveCheckInput"></a>

```python
unauthenticated_cognito_role_overly_permissive_check_input: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations">IotAccountAuditConfigurationAuditCheckConfigurations</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck</a>

---


### IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference <a name="IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.putSns">put_sns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.resetSns">reset_sns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sns` <a name="put_sns" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.putSns"></a>

```python
def put_sns(
  enabled: bool | IResolvable = None,
  role_arn: str = None,
  target_arn: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.putSns.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

True if notifications to the target are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.putSns.parameter.roleArn"></a>

- *Type:* str

The ARN of the role that grants permission to send notifications to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#role_arn IotAccountAuditConfiguration#role_arn}

---

###### `target_arn`<sup>Optional</sup> <a name="target_arn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.putSns.parameter.targetArn"></a>

- *Type:* str

The ARN of the target (SNS topic) to which audit notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_account_audit_configuration#target_arn IotAccountAuditConfiguration#target_arn}

---

##### `reset_sns` <a name="reset_sns" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.resetSns"></a>

```python
def reset_sns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.sns">sns</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.snsInput">sns_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations">IotAccountAuditConfigurationAuditNotificationTargetConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sns`<sup>Required</sup> <a name="sns" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.sns"></a>

```python
sns: IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference</a>

---

##### `sns_input`<sup>Optional</sup> <a name="sns_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.snsInput"></a>

```python
sns_input: IResolvable | IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditNotificationTargetConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations">IotAccountAuditConfigurationAuditNotificationTargetConfigurations</a>

---


### IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference <a name="IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_account_audit_configuration

iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.resetTargetArn">reset_target_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_target_arn` <a name="reset_target_arn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.resetTargetArn"></a>

```python
def reset_target_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.targetArnInput">target_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.targetArn">target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `target_arn_input`<sup>Optional</sup> <a name="target_arn_input" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.targetArnInput"></a>

```python
target_arn_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns</a>

---



