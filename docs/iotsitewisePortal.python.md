# `iotsitewisePortal` Submodule <a name="`iotsitewisePortal` Submodule" id="@cdktn/provider-awscc.iotsitewisePortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewisePortal <a name="IotsitewisePortal" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal awscc_iotsitewise_portal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_portal

iotsitewisePortal.IotsitewisePortal(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  portal_contact_email: str,
  portal_name: str,
  role_arn: str,
  alarms: IotsitewisePortalAlarms = None,
  notification_sender_email: str = None,
  portal_auth_mode: str = None,
  portal_description: str = None,
  portal_type: str = None,
  portal_type_configuration: IResolvable | typing.Mapping[IotsitewisePortalPortalTypeConfiguration] = None,
  tags: IResolvable | typing.List[IotsitewisePortalTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalContactEmail">portal_contact_email</a></code> | <code>str</code> | The AWS administrator's contact email address. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalName">portal_name</a></code> | <code>str</code> | A friendly name for the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a></code> | Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.notificationSenderEmail">notification_sender_email</a></code> | <code>str</code> | The email address that sends alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalAuthMode">portal_auth_mode</a></code> | <code>str</code> | The service to use to authenticate users to the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalDescription">portal_description</a></code> | <code>str</code> | A description for the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalType">portal_type</a></code> | <code>str</code> | The type of portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalTypeConfiguration">portal_type_configuration</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>]</code> | Map to associate detail of configuration related with a PortalType. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>]</code> | A list of key-value pairs that contain metadata for the portal. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `portal_contact_email`<sup>Required</sup> <a name="portal_contact_email" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalContactEmail"></a>

- *Type:* str

The AWS administrator's contact email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_contact_email IotsitewisePortal#portal_contact_email}

---

##### `portal_name`<sup>Required</sup> <a name="portal_name" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalName"></a>

- *Type:* str

A friendly name for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_name IotsitewisePortal#portal_name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.roleArn"></a>

- *Type:* str

The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#role_arn IotsitewisePortal#role_arn}

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.alarms"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a>

Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal.

You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#alarms IotsitewisePortal#alarms}

---

##### `notification_sender_email`<sup>Optional</sup> <a name="notification_sender_email" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.notificationSenderEmail"></a>

- *Type:* str

The email address that sends alarm notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#notification_sender_email IotsitewisePortal#notification_sender_email}

---

##### `portal_auth_mode`<sup>Optional</sup> <a name="portal_auth_mode" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalAuthMode"></a>

- *Type:* str

The service to use to authenticate users to the portal.

Choose from SSO or IAM. You can't change this value after you create a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_auth_mode IotsitewisePortal#portal_auth_mode}

---

##### `portal_description`<sup>Optional</sup> <a name="portal_description" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalDescription"></a>

- *Type:* str

A description for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_description IotsitewisePortal#portal_description}

---

##### `portal_type`<sup>Optional</sup> <a name="portal_type" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalType"></a>

- *Type:* str

The type of portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_type IotsitewisePortal#portal_type}

---

##### `portal_type_configuration`<sup>Optional</sup> <a name="portal_type_configuration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.portalTypeConfiguration"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>]

Map to associate detail of configuration related with a PortalType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_type_configuration IotsitewisePortal#portal_type_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>]

A list of key-value pairs that contain metadata for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#tags IotsitewisePortal#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putAlarms">put_alarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putPortalTypeConfiguration">put_portal_type_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetAlarms">reset_alarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetNotificationSenderEmail">reset_notification_sender_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalAuthMode">reset_portal_auth_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalDescription">reset_portal_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalType">reset_portal_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalTypeConfiguration">reset_portal_type_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_alarms` <a name="put_alarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putAlarms"></a>

```python
def put_alarms(
  alarm_role_arn: str = None,
  notification_lambda_arn: str = None
) -> None
```

###### `alarm_role_arn`<sup>Optional</sup> <a name="alarm_role_arn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putAlarms.parameter.alarmRoleArn"></a>

- *Type:* str

The ARN of the IAM role that allows the alarm to perform actions and access AWS resources and services, such as AWS IoT Events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#alarm_role_arn IotsitewisePortal#alarm_role_arn}

---

###### `notification_lambda_arn`<sup>Optional</sup> <a name="notification_lambda_arn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putAlarms.parameter.notificationLambdaArn"></a>

- *Type:* str

The ARN of the AWS Lambda function that manages alarm notifications.

For more information, see Managing alarm notifications in the AWS IoT Events Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#notification_lambda_arn IotsitewisePortal#notification_lambda_arn}

---

##### `put_portal_type_configuration` <a name="put_portal_type_configuration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putPortalTypeConfiguration"></a>

```python
def put_portal_type_configuration(
  value: IResolvable | typing.Mapping[IotsitewisePortalPortalTypeConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putPortalTypeConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotsitewisePortalTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>]

---

##### `reset_alarms` <a name="reset_alarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetAlarms"></a>

```python
def reset_alarms() -> None
```

##### `reset_notification_sender_email` <a name="reset_notification_sender_email" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetNotificationSenderEmail"></a>

```python
def reset_notification_sender_email() -> None
```

##### `reset_portal_auth_mode` <a name="reset_portal_auth_mode" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalAuthMode"></a>

```python
def reset_portal_auth_mode() -> None
```

##### `reset_portal_description` <a name="reset_portal_description" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalDescription"></a>

```python
def reset_portal_description() -> None
```

##### `reset_portal_type` <a name="reset_portal_type" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalType"></a>

```python
def reset_portal_type() -> None
```

##### `reset_portal_type_configuration` <a name="reset_portal_type_configuration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetPortalTypeConfiguration"></a>

```python
def reset_portal_type_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotsitewisePortal resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isConstruct"></a>

```python
from cdktn_provider_awscc import iotsitewise_portal

iotsitewisePortal.IotsitewisePortal.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotsitewise_portal

iotsitewisePortal.IotsitewisePortal.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotsitewise_portal

iotsitewisePortal.IotsitewisePortal.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotsitewise_portal

iotsitewisePortal.IotsitewisePortal.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotsitewisePortal resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotsitewisePortal to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotsitewisePortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewisePortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference">IotsitewisePortalAlarmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalArn">portal_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalClientId">portal_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalId">portal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalStartUrl">portal_start_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfiguration">portal_type_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap">IotsitewisePortalPortalTypeConfigurationMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList">IotsitewisePortalTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarmsInput">alarms_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmailInput">notification_sender_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthModeInput">portal_auth_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmailInput">portal_contact_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescriptionInput">portal_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalNameInput">portal_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfigurationInput">portal_type_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeInput">portal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmail">notification_sender_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthMode">portal_auth_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmail">portal_contact_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescription">portal_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalName">portal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalType">portal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarms"></a>

```python
alarms: IotsitewisePortalAlarmsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference">IotsitewisePortalAlarmsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `portal_arn`<sup>Required</sup> <a name="portal_arn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalArn"></a>

```python
portal_arn: str
```

- *Type:* str

---

##### `portal_client_id`<sup>Required</sup> <a name="portal_client_id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalClientId"></a>

```python
portal_client_id: str
```

- *Type:* str

---

##### `portal_id`<sup>Required</sup> <a name="portal_id" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalId"></a>

```python
portal_id: str
```

- *Type:* str

---

##### `portal_start_url`<sup>Required</sup> <a name="portal_start_url" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalStartUrl"></a>

```python
portal_start_url: str
```

- *Type:* str

---

##### `portal_type_configuration`<sup>Required</sup> <a name="portal_type_configuration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfiguration"></a>

```python
portal_type_configuration: IotsitewisePortalPortalTypeConfigurationMap
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap">IotsitewisePortalPortalTypeConfigurationMap</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tags"></a>

```python
tags: IotsitewisePortalTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList">IotsitewisePortalTagsList</a>

---

##### `alarms_input`<sup>Optional</sup> <a name="alarms_input" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.alarmsInput"></a>

```python
alarms_input: IResolvable | IotsitewisePortalAlarms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a>

---

##### `notification_sender_email_input`<sup>Optional</sup> <a name="notification_sender_email_input" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmailInput"></a>

```python
notification_sender_email_input: str
```

- *Type:* str

---

##### `portal_auth_mode_input`<sup>Optional</sup> <a name="portal_auth_mode_input" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthModeInput"></a>

```python
portal_auth_mode_input: str
```

- *Type:* str

---

##### `portal_contact_email_input`<sup>Optional</sup> <a name="portal_contact_email_input" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmailInput"></a>

```python
portal_contact_email_input: str
```

- *Type:* str

---

##### `portal_description_input`<sup>Optional</sup> <a name="portal_description_input" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescriptionInput"></a>

```python
portal_description_input: str
```

- *Type:* str

---

##### `portal_name_input`<sup>Optional</sup> <a name="portal_name_input" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalNameInput"></a>

```python
portal_name_input: str
```

- *Type:* str

---

##### `portal_type_configuration_input`<sup>Optional</sup> <a name="portal_type_configuration_input" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeConfigurationInput"></a>

```python
portal_type_configuration_input: IResolvable | typing.Mapping[IotsitewisePortalPortalTypeConfiguration]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>]

---

##### `portal_type_input`<sup>Optional</sup> <a name="portal_type_input" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalTypeInput"></a>

```python
portal_type_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotsitewisePortalTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>]

---

##### `notification_sender_email`<sup>Required</sup> <a name="notification_sender_email" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.notificationSenderEmail"></a>

```python
notification_sender_email: str
```

- *Type:* str

---

##### `portal_auth_mode`<sup>Required</sup> <a name="portal_auth_mode" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalAuthMode"></a>

```python
portal_auth_mode: str
```

- *Type:* str

---

##### `portal_contact_email`<sup>Required</sup> <a name="portal_contact_email" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalContactEmail"></a>

```python
portal_contact_email: str
```

- *Type:* str

---

##### `portal_description`<sup>Required</sup> <a name="portal_description" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalDescription"></a>

```python
portal_description: str
```

- *Type:* str

---

##### `portal_name`<sup>Required</sup> <a name="portal_name" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalName"></a>

```python
portal_name: str
```

- *Type:* str

---

##### `portal_type`<sup>Required</sup> <a name="portal_type" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.portalType"></a>

```python
portal_type: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortal.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewisePortalAlarms <a name="IotsitewisePortalAlarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_portal

iotsitewisePortal.IotsitewisePortalAlarms(
  alarm_role_arn: str = None,
  notification_lambda_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.alarmRoleArn">alarm_role_arn</a></code> | <code>str</code> | The ARN of the IAM role that allows the alarm to perform actions and access AWS resources and services, such as AWS IoT Events. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.notificationLambdaArn">notification_lambda_arn</a></code> | <code>str</code> | The ARN of the AWS Lambda function that manages alarm notifications. |

---

##### `alarm_role_arn`<sup>Optional</sup> <a name="alarm_role_arn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.alarmRoleArn"></a>

```python
alarm_role_arn: str
```

- *Type:* str

The ARN of the IAM role that allows the alarm to perform actions and access AWS resources and services, such as AWS IoT Events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#alarm_role_arn IotsitewisePortal#alarm_role_arn}

---

##### `notification_lambda_arn`<sup>Optional</sup> <a name="notification_lambda_arn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms.property.notificationLambdaArn"></a>

```python
notification_lambda_arn: str
```

- *Type:* str

The ARN of the AWS Lambda function that manages alarm notifications.

For more information, see Managing alarm notifications in the AWS IoT Events Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#notification_lambda_arn IotsitewisePortal#notification_lambda_arn}

---

### IotsitewisePortalConfig <a name="IotsitewisePortalConfig" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_portal

iotsitewisePortal.IotsitewisePortalConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  portal_contact_email: str,
  portal_name: str,
  role_arn: str,
  alarms: IotsitewisePortalAlarms = None,
  notification_sender_email: str = None,
  portal_auth_mode: str = None,
  portal_description: str = None,
  portal_type: str = None,
  portal_type_configuration: IResolvable | typing.Mapping[IotsitewisePortalPortalTypeConfiguration] = None,
  tags: IResolvable | typing.List[IotsitewisePortalTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalContactEmail">portal_contact_email</a></code> | <code>str</code> | The AWS administrator's contact email address. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalName">portal_name</a></code> | <code>str</code> | A friendly name for the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a></code> | Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.notificationSenderEmail">notification_sender_email</a></code> | <code>str</code> | The email address that sends alarm notifications. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalAuthMode">portal_auth_mode</a></code> | <code>str</code> | The service to use to authenticate users to the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalDescription">portal_description</a></code> | <code>str</code> | A description for the portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalType">portal_type</a></code> | <code>str</code> | The type of portal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalTypeConfiguration">portal_type_configuration</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>]</code> | Map to associate detail of configuration related with a PortalType. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>]</code> | A list of key-value pairs that contain metadata for the portal. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `portal_contact_email`<sup>Required</sup> <a name="portal_contact_email" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalContactEmail"></a>

```python
portal_contact_email: str
```

- *Type:* str

The AWS administrator's contact email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_contact_email IotsitewisePortal#portal_contact_email}

---

##### `portal_name`<sup>Required</sup> <a name="portal_name" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalName"></a>

```python
portal_name: str
```

- *Type:* str

A friendly name for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_name IotsitewisePortal#portal_name}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#role_arn IotsitewisePortal#role_arn}

---

##### `alarms`<sup>Optional</sup> <a name="alarms" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.alarms"></a>

```python
alarms: IotsitewisePortalAlarms
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a>

Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal.

You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#alarms IotsitewisePortal#alarms}

---

##### `notification_sender_email`<sup>Optional</sup> <a name="notification_sender_email" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.notificationSenderEmail"></a>

```python
notification_sender_email: str
```

- *Type:* str

The email address that sends alarm notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#notification_sender_email IotsitewisePortal#notification_sender_email}

---

##### `portal_auth_mode`<sup>Optional</sup> <a name="portal_auth_mode" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalAuthMode"></a>

```python
portal_auth_mode: str
```

- *Type:* str

The service to use to authenticate users to the portal.

Choose from SSO or IAM. You can't change this value after you create a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_auth_mode IotsitewisePortal#portal_auth_mode}

---

##### `portal_description`<sup>Optional</sup> <a name="portal_description" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalDescription"></a>

```python
portal_description: str
```

- *Type:* str

A description for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_description IotsitewisePortal#portal_description}

---

##### `portal_type`<sup>Optional</sup> <a name="portal_type" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalType"></a>

```python
portal_type: str
```

- *Type:* str

The type of portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_type IotsitewisePortal#portal_type}

---

##### `portal_type_configuration`<sup>Optional</sup> <a name="portal_type_configuration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.portalTypeConfiguration"></a>

```python
portal_type_configuration: IResolvable | typing.Mapping[IotsitewisePortalPortalTypeConfiguration]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>]

Map to associate detail of configuration related with a PortalType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_type_configuration IotsitewisePortal#portal_type_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotsitewisePortalTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>]

A list of key-value pairs that contain metadata for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#tags IotsitewisePortal#tags}

---

### IotsitewisePortalPortalTypeConfiguration <a name="IotsitewisePortalPortalTypeConfiguration" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_portal

iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration(
  portal_tools: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration.property.portalTools">portal_tools</a></code> | <code>typing.List[str]</code> | List of enabled Tools for a certain portal. |

---

##### `portal_tools`<sup>Optional</sup> <a name="portal_tools" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration.property.portalTools"></a>

```python
portal_tools: typing.List[str]
```

- *Type:* typing.List[str]

List of enabled Tools for a certain portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#portal_tools IotsitewisePortal#portal_tools}

---

### IotsitewisePortalTags <a name="IotsitewisePortalTags" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_portal

iotsitewisePortal.IotsitewisePortalTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#key IotsitewisePortal#key}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#value IotsitewisePortal#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#key IotsitewisePortal#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_portal#value IotsitewisePortal#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewisePortalAlarmsOutputReference <a name="IotsitewisePortalAlarmsOutputReference" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_portal

iotsitewisePortal.IotsitewisePortalAlarmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetAlarmRoleArn">reset_alarm_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetNotificationLambdaArn">reset_notification_lambda_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarm_role_arn` <a name="reset_alarm_role_arn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetAlarmRoleArn"></a>

```python
def reset_alarm_role_arn() -> None
```

##### `reset_notification_lambda_arn` <a name="reset_notification_lambda_arn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.resetNotificationLambdaArn"></a>

```python
def reset_notification_lambda_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArnInput">alarm_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArnInput">notification_lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArn">alarm_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArn">notification_lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_role_arn_input`<sup>Optional</sup> <a name="alarm_role_arn_input" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArnInput"></a>

```python
alarm_role_arn_input: str
```

- *Type:* str

---

##### `notification_lambda_arn_input`<sup>Optional</sup> <a name="notification_lambda_arn_input" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArnInput"></a>

```python
notification_lambda_arn_input: str
```

- *Type:* str

---

##### `alarm_role_arn`<sup>Required</sup> <a name="alarm_role_arn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.alarmRoleArn"></a>

```python
alarm_role_arn: str
```

- *Type:* str

---

##### `notification_lambda_arn`<sup>Required</sup> <a name="notification_lambda_arn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.notificationLambdaArn"></a>

```python
notification_lambda_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarmsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewisePortalAlarms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalAlarms">IotsitewisePortalAlarms</a>

---


### IotsitewisePortalPortalTypeConfigurationMap <a name="IotsitewisePortalPortalTypeConfigurationMap" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_portal

iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.get"></a>

```python
def get(
  key: str
) -> IotsitewisePortalPortalTypeConfigurationOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[IotsitewisePortalPortalTypeConfiguration]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>]

---


### IotsitewisePortalPortalTypeConfigurationOutputReference <a name="IotsitewisePortalPortalTypeConfigurationOutputReference" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_portal

iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resetPortalTools">reset_portal_tools</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_portal_tools` <a name="reset_portal_tools" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.resetPortalTools"></a>

```python
def reset_portal_tools() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalToolsInput">portal_tools_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalTools">portal_tools</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `portal_tools_input`<sup>Optional</sup> <a name="portal_tools_input" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalToolsInput"></a>

```python
portal_tools_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `portal_tools`<sup>Required</sup> <a name="portal_tools" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.portalTools"></a>

```python
portal_tools: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewisePortalPortalTypeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalPortalTypeConfiguration">IotsitewisePortalPortalTypeConfiguration</a>

---


### IotsitewisePortalTagsList <a name="IotsitewisePortalTagsList" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_portal

iotsitewisePortal.IotsitewisePortalTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotsitewisePortalTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotsitewisePortalTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>]

---


### IotsitewisePortalTagsOutputReference <a name="IotsitewisePortalTagsOutputReference" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_portal

iotsitewisePortal.IotsitewisePortalTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewisePortalTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewisePortal.IotsitewisePortalTags">IotsitewisePortalTags</a>

---



