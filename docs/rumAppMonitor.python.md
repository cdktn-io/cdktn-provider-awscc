# `rumAppMonitor` Submodule <a name="`rumAppMonitor` Submodule" id="@cdktn/provider-awscc.rumAppMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumAppMonitor <a name="RumAppMonitor" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor awscc_rum_app_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitor(
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
  app_monitor_configuration: RumAppMonitorAppMonitorConfiguration = None,
  custom_events: RumAppMonitorCustomEvents = None,
  cw_log_enabled: bool | IResolvable = None,
  deobfuscation_configuration: RumAppMonitorDeobfuscationConfiguration = None,
  domain: str = None,
  domain_list: typing.List[str] = None,
  platform: str = None,
  resource_policy: RumAppMonitorResourcePolicy = None,
  tags: IResolvable | typing.List[RumAppMonitorTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.name">name</a></code> | <code>str</code> | A name for the app monitor. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.appMonitorConfiguration">app_monitor_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | AppMonitor configuration. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.customEvents">custom_events</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | AppMonitor custom events configuration. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.cwLogEnabled">cw_log_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Data collected by RUM is kept by RUM for 30 days and then deleted. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.deobfuscationConfiguration">deobfuscation_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a></code> | A structure that contains the configuration for how an app monitor can deobfuscate stack traces. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.domain">domain</a></code> | <code>str</code> | The top-level internet domain name for which your application has administrative authority. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.domainList">domain_list</a></code> | <code>typing.List[str]</code> | The top-level internet domain names for which your application has administrative authority. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.platform">platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#platform RumAppMonitor#platform}. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.resourcePolicy">resource_policy</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a></code> | A structure that defines resource policy attached to your app monitor. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>]</code> | Assigns one or more tags (key-value pairs) to the app monitor. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.name"></a>

- *Type:* str

A name for the app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#name RumAppMonitor#name}

---

##### `app_monitor_configuration`<sup>Optional</sup> <a name="app_monitor_configuration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.appMonitorConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

AppMonitor configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#app_monitor_configuration RumAppMonitor#app_monitor_configuration}

---

##### `custom_events`<sup>Optional</sup> <a name="custom_events" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.customEvents"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

AppMonitor custom events configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#custom_events RumAppMonitor#custom_events}

---

##### `cw_log_enabled`<sup>Optional</sup> <a name="cw_log_enabled" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.cwLogEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Data collected by RUM is kept by RUM for 30 days and then deleted.

This parameter specifies whether RUM sends a copy of this telemetry data to CWLlong in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur CWLlong charges. If you omit this parameter, the default is false

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#cw_log_enabled RumAppMonitor#cw_log_enabled}

---

##### `deobfuscation_configuration`<sup>Optional</sup> <a name="deobfuscation_configuration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.deobfuscationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a>

A structure that contains the configuration for how an app monitor can deobfuscate stack traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#deobfuscation_configuration RumAppMonitor#deobfuscation_configuration}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.domain"></a>

- *Type:* str

The top-level internet domain name for which your application has administrative authority.

The CreateAppMonitor requires either the domain or the domain list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#domain RumAppMonitor#domain}

---

##### `domain_list`<sup>Optional</sup> <a name="domain_list" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.domainList"></a>

- *Type:* typing.List[str]

The top-level internet domain names for which your application has administrative authority.

The CreateAppMonitor requires either the domain or the domain list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#domain_list RumAppMonitor#domain_list}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.platform"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#platform RumAppMonitor#platform}.

---

##### `resource_policy`<sup>Optional</sup> <a name="resource_policy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.resourcePolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a>

A structure that defines resource policy attached to your app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#resource_policy RumAppMonitor#resource_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>]

Assigns one or more tags (key-value pairs) to the app monitor.

Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.You can associate as many as 50 tags with an app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#tags RumAppMonitor#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration">put_app_monitor_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putCustomEvents">put_custom_events</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putDeobfuscationConfiguration">put_deobfuscation_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putResourcePolicy">put_resource_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetAppMonitorConfiguration">reset_app_monitor_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetCustomEvents">reset_custom_events</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetCwLogEnabled">reset_cw_log_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDeobfuscationConfiguration">reset_deobfuscation_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDomainList">reset_domain_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetPlatform">reset_platform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetResourcePolicy">reset_resource_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_app_monitor_configuration` <a name="put_app_monitor_configuration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration"></a>

```python
def put_app_monitor_configuration(
  allow_cookies: bool | IResolvable = None,
  enable_x_ray: bool | IResolvable = None,
  excluded_pages: typing.List[str] = None,
  favorite_pages: typing.List[str] = None,
  guest_role_arn: str = None,
  identity_pool_id: str = None,
  included_pages: typing.List[str] = None,
  metric_destinations: IResolvable | typing.List[RumAppMonitorAppMonitorConfigurationMetricDestinations] = None,
  session_sample_rate: typing.Union[int, float] = None,
  telemetries: typing.List[str] = None
) -> None
```

###### `allow_cookies`<sup>Optional</sup> <a name="allow_cookies" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.allowCookies"></a>

- *Type:* bool | cdktn.IResolvable

If you set this to true, the RUM web client sets two cookies, a session cookie and a user cookie.

The cookies allow the RUM web client to collect data relating to the number of users an application has and the behavior of the application across a sequence of events. Cookies are stored in the top-level domain of the current page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#allow_cookies RumAppMonitor#allow_cookies}

---

###### `enable_x_ray`<sup>Optional</sup> <a name="enable_x_ray" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.enableXRay"></a>

- *Type:* bool | cdktn.IResolvable

If you set this to true, RUM enables xray tracing for the user sessions that RUM samples.

RUM adds an xray trace header to allowed HTTP requests. It also records an xray segment for allowed HTTP requests. You can see traces and segments from these user sessions in the xray console and the CW ServiceLens console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#enable_x_ray RumAppMonitor#enable_x_ray}

---

###### `excluded_pages`<sup>Optional</sup> <a name="excluded_pages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.excludedPages"></a>

- *Type:* typing.List[str]

A list of URLs in your website or application to exclude from RUM data collection.

You can't include both ExcludedPages and IncludedPages in the same operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#excluded_pages RumAppMonitor#excluded_pages}

---

###### `favorite_pages`<sup>Optional</sup> <a name="favorite_pages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.favoritePages"></a>

- *Type:* typing.List[str]

A list of pages in the RUM console that are to be displayed with a favorite icon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#favorite_pages RumAppMonitor#favorite_pages}

---

###### `guest_role_arn`<sup>Optional</sup> <a name="guest_role_arn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.guestRoleArn"></a>

- *Type:* str

The ARN of the guest IAM role that is attached to the identity pool that is used to authorize the sending of data to RUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#guest_role_arn RumAppMonitor#guest_role_arn}

---

###### `identity_pool_id`<sup>Optional</sup> <a name="identity_pool_id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.identityPoolId"></a>

- *Type:* str

The ID of the identity pool that is used to authorize the sending of data to RUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#identity_pool_id RumAppMonitor#identity_pool_id}

---

###### `included_pages`<sup>Optional</sup> <a name="included_pages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.includedPages"></a>

- *Type:* typing.List[str]

If this app monitor is to collect data from only certain pages in your application, this structure lists those pages.

You can't include both ExcludedPages and IncludedPages in the same operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#included_pages RumAppMonitor#included_pages}

---

###### `metric_destinations`<sup>Optional</sup> <a name="metric_destinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.metricDestinations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>]

An array of structures which define the destinations and the metrics that you want to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#metric_destinations RumAppMonitor#metric_destinations}

---

###### `session_sample_rate`<sup>Optional</sup> <a name="session_sample_rate" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.sessionSampleRate"></a>

- *Type:* typing.Union[int, float]

Specifies the percentage of user sessions to use for RUM data collection.

Choosing a higher percentage gives you more data but also incurs more costs. The number you specify is the percentage of user sessions that will be used. If you omit this parameter, the default of 10 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#session_sample_rate RumAppMonitor#session_sample_rate}

---

###### `telemetries`<sup>Optional</sup> <a name="telemetries" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.telemetries"></a>

- *Type:* typing.List[str]

An array that lists the types of telemetry data that this app monitor is to collect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#telemetries RumAppMonitor#telemetries}

---

##### `put_custom_events` <a name="put_custom_events" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putCustomEvents"></a>

```python
def put_custom_events(
  status: str = None
) -> None
```

###### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putCustomEvents.parameter.status"></a>

- *Type:* str

Indicates whether AppMonitor accepts custom events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#status RumAppMonitor#status}

---

##### `put_deobfuscation_configuration` <a name="put_deobfuscation_configuration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putDeobfuscationConfiguration"></a>

```python
def put_deobfuscation_configuration(
  java_script_source_maps: RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps = None
) -> None
```

###### `java_script_source_maps`<sup>Optional</sup> <a name="java_script_source_maps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putDeobfuscationConfiguration.parameter.javaScriptSourceMaps"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a>

A structure that contains the configuration for how an app monitor can unminify JavaScript error stack traces using source maps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#java_script_source_maps RumAppMonitor#java_script_source_maps}

---

##### `put_resource_policy` <a name="put_resource_policy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putResourcePolicy"></a>

```python
def put_resource_policy(
  policy_document: str = None,
  policy_revision_id: str = None
) -> None
```

###### `policy_document`<sup>Optional</sup> <a name="policy_document" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putResourcePolicy.parameter.policyDocument"></a>

- *Type:* str

The JSON to use as the resource policy. The document can be up to 4 KB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#policy_document RumAppMonitor#policy_document}

---

###### `policy_revision_id`<sup>Optional</sup> <a name="policy_revision_id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putResourcePolicy.parameter.policyRevisionId"></a>

- *Type:* str

A string value that you can use to conditionally update your policy.

You can provide the revision ID of your existing policy to make mutating requests against that policy.

When you assign a policy revision ID, then later requests about that policy will be rejected with an InvalidPolicyRevisionIdException error if they don't provide the correct current revision ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#policy_revision_id RumAppMonitor#policy_revision_id}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RumAppMonitorTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>]

---

##### `reset_app_monitor_configuration` <a name="reset_app_monitor_configuration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetAppMonitorConfiguration"></a>

```python
def reset_app_monitor_configuration() -> None
```

##### `reset_custom_events` <a name="reset_custom_events" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetCustomEvents"></a>

```python
def reset_custom_events() -> None
```

##### `reset_cw_log_enabled` <a name="reset_cw_log_enabled" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetCwLogEnabled"></a>

```python
def reset_cw_log_enabled() -> None
```

##### `reset_deobfuscation_configuration` <a name="reset_deobfuscation_configuration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDeobfuscationConfiguration"></a>

```python
def reset_deobfuscation_configuration() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_domain_list` <a name="reset_domain_list" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDomainList"></a>

```python
def reset_domain_list() -> None
```

##### `reset_platform` <a name="reset_platform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetPlatform"></a>

```python
def reset_platform() -> None
```

##### `reset_resource_policy` <a name="reset_resource_policy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetResourcePolicy"></a>

```python
def reset_resource_policy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RumAppMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isConstruct"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformElement"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformResource"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RumAppMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RumAppMonitor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RumAppMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RumAppMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorConfiguration">app_monitor_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference">RumAppMonitorAppMonitorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorId">app_monitor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.customEvents">custom_events</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference">RumAppMonitorCustomEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.deobfuscationConfiguration">deobfuscation_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference">RumAppMonitorDeobfuscationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.resourcePolicy">resource_policy</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference">RumAppMonitorResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList">RumAppMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorConfigurationInput">app_monitor_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.customEventsInput">custom_events_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cwLogEnabledInput">cw_log_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.deobfuscationConfigurationInput">deobfuscation_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainListInput">domain_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.resourcePolicyInput">resource_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cwLogEnabled">cw_log_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainList">domain_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.platform">platform</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_monitor_configuration`<sup>Required</sup> <a name="app_monitor_configuration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorConfiguration"></a>

```python
app_monitor_configuration: RumAppMonitorAppMonitorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference">RumAppMonitorAppMonitorConfigurationOutputReference</a>

---

##### `app_monitor_id`<sup>Required</sup> <a name="app_monitor_id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorId"></a>

```python
app_monitor_id: str
```

- *Type:* str

---

##### `custom_events`<sup>Required</sup> <a name="custom_events" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.customEvents"></a>

```python
custom_events: RumAppMonitorCustomEventsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference">RumAppMonitorCustomEventsOutputReference</a>

---

##### `deobfuscation_configuration`<sup>Required</sup> <a name="deobfuscation_configuration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.deobfuscationConfiguration"></a>

```python
deobfuscation_configuration: RumAppMonitorDeobfuscationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference">RumAppMonitorDeobfuscationConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_policy`<sup>Required</sup> <a name="resource_policy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.resourcePolicy"></a>

```python
resource_policy: RumAppMonitorResourcePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference">RumAppMonitorResourcePolicyOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tags"></a>

```python
tags: RumAppMonitorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList">RumAppMonitorTagsList</a>

---

##### `app_monitor_configuration_input`<sup>Optional</sup> <a name="app_monitor_configuration_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorConfigurationInput"></a>

```python
app_monitor_configuration_input: IResolvable | RumAppMonitorAppMonitorConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

---

##### `custom_events_input`<sup>Optional</sup> <a name="custom_events_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.customEventsInput"></a>

```python
custom_events_input: IResolvable | RumAppMonitorCustomEvents
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

---

##### `cw_log_enabled_input`<sup>Optional</sup> <a name="cw_log_enabled_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cwLogEnabledInput"></a>

```python
cw_log_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `deobfuscation_configuration_input`<sup>Optional</sup> <a name="deobfuscation_configuration_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.deobfuscationConfigurationInput"></a>

```python
deobfuscation_configuration_input: IResolvable | RumAppMonitorDeobfuscationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a>

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `domain_list_input`<sup>Optional</sup> <a name="domain_list_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainListInput"></a>

```python
domain_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `resource_policy_input`<sup>Optional</sup> <a name="resource_policy_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.resourcePolicyInput"></a>

```python
resource_policy_input: IResolvable | RumAppMonitorResourcePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RumAppMonitorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>]

---

##### `cw_log_enabled`<sup>Required</sup> <a name="cw_log_enabled" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cwLogEnabled"></a>

```python
cw_log_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `domain_list`<sup>Required</sup> <a name="domain_list" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainList"></a>

```python
domain_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RumAppMonitorAppMonitorConfiguration <a name="RumAppMonitorAppMonitorConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorAppMonitorConfiguration(
  allow_cookies: bool | IResolvable = None,
  enable_x_ray: bool | IResolvable = None,
  excluded_pages: typing.List[str] = None,
  favorite_pages: typing.List[str] = None,
  guest_role_arn: str = None,
  identity_pool_id: str = None,
  included_pages: typing.List[str] = None,
  metric_destinations: IResolvable | typing.List[RumAppMonitorAppMonitorConfigurationMetricDestinations] = None,
  session_sample_rate: typing.Union[int, float] = None,
  telemetries: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.allowCookies">allow_cookies</a></code> | <code>bool \| cdktn.IResolvable</code> | If you set this to true, the RUM web client sets two cookies, a session cookie and a user cookie. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.enableXRay">enable_x_ray</a></code> | <code>bool \| cdktn.IResolvable</code> | If you set this to true, RUM enables xray tracing for the user sessions that RUM samples. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.excludedPages">excluded_pages</a></code> | <code>typing.List[str]</code> | A list of URLs in your website or application to exclude from RUM data collection. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.favoritePages">favorite_pages</a></code> | <code>typing.List[str]</code> | A list of pages in the RUM console that are to be displayed with a favorite icon. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.guestRoleArn">guest_role_arn</a></code> | <code>str</code> | The ARN of the guest IAM role that is attached to the identity pool that is used to authorize the sending of data to RUM. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | The ID of the identity pool that is used to authorize the sending of data to RUM. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.includedPages">included_pages</a></code> | <code>typing.List[str]</code> | If this app monitor is to collect data from only certain pages in your application, this structure lists those pages. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.metricDestinations">metric_destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>]</code> | An array of structures which define the destinations and the metrics that you want to send. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.sessionSampleRate">session_sample_rate</a></code> | <code>typing.Union[int, float]</code> | Specifies the percentage of user sessions to use for RUM data collection. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.telemetries">telemetries</a></code> | <code>typing.List[str]</code> | An array that lists the types of telemetry data that this app monitor is to collect. |

---

##### `allow_cookies`<sup>Optional</sup> <a name="allow_cookies" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.allowCookies"></a>

```python
allow_cookies: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If you set this to true, the RUM web client sets two cookies, a session cookie and a user cookie.

The cookies allow the RUM web client to collect data relating to the number of users an application has and the behavior of the application across a sequence of events. Cookies are stored in the top-level domain of the current page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#allow_cookies RumAppMonitor#allow_cookies}

---

##### `enable_x_ray`<sup>Optional</sup> <a name="enable_x_ray" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.enableXRay"></a>

```python
enable_x_ray: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If you set this to true, RUM enables xray tracing for the user sessions that RUM samples.

RUM adds an xray trace header to allowed HTTP requests. It also records an xray segment for allowed HTTP requests. You can see traces and segments from these user sessions in the xray console and the CW ServiceLens console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#enable_x_ray RumAppMonitor#enable_x_ray}

---

##### `excluded_pages`<sup>Optional</sup> <a name="excluded_pages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.excludedPages"></a>

```python
excluded_pages: typing.List[str]
```

- *Type:* typing.List[str]

A list of URLs in your website or application to exclude from RUM data collection.

You can't include both ExcludedPages and IncludedPages in the same operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#excluded_pages RumAppMonitor#excluded_pages}

---

##### `favorite_pages`<sup>Optional</sup> <a name="favorite_pages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.favoritePages"></a>

```python
favorite_pages: typing.List[str]
```

- *Type:* typing.List[str]

A list of pages in the RUM console that are to be displayed with a favorite icon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#favorite_pages RumAppMonitor#favorite_pages}

---

##### `guest_role_arn`<sup>Optional</sup> <a name="guest_role_arn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.guestRoleArn"></a>

```python
guest_role_arn: str
```

- *Type:* str

The ARN of the guest IAM role that is attached to the identity pool that is used to authorize the sending of data to RUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#guest_role_arn RumAppMonitor#guest_role_arn}

---

##### `identity_pool_id`<sup>Optional</sup> <a name="identity_pool_id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

The ID of the identity pool that is used to authorize the sending of data to RUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#identity_pool_id RumAppMonitor#identity_pool_id}

---

##### `included_pages`<sup>Optional</sup> <a name="included_pages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.includedPages"></a>

```python
included_pages: typing.List[str]
```

- *Type:* typing.List[str]

If this app monitor is to collect data from only certain pages in your application, this structure lists those pages.

You can't include both ExcludedPages and IncludedPages in the same operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#included_pages RumAppMonitor#included_pages}

---

##### `metric_destinations`<sup>Optional</sup> <a name="metric_destinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.metricDestinations"></a>

```python
metric_destinations: IResolvable | typing.List[RumAppMonitorAppMonitorConfigurationMetricDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>]

An array of structures which define the destinations and the metrics that you want to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#metric_destinations RumAppMonitor#metric_destinations}

---

##### `session_sample_rate`<sup>Optional</sup> <a name="session_sample_rate" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.sessionSampleRate"></a>

```python
session_sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the percentage of user sessions to use for RUM data collection.

Choosing a higher percentage gives you more data but also incurs more costs. The number you specify is the percentage of user sessions that will be used. If you omit this parameter, the default of 10 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#session_sample_rate RumAppMonitor#session_sample_rate}

---

##### `telemetries`<sup>Optional</sup> <a name="telemetries" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.telemetries"></a>

```python
telemetries: typing.List[str]
```

- *Type:* typing.List[str]

An array that lists the types of telemetry data that this app monitor is to collect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#telemetries RumAppMonitor#telemetries}

---

### RumAppMonitorAppMonitorConfigurationMetricDestinations <a name="RumAppMonitorAppMonitorConfigurationMetricDestinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations(
  destination: str = None,
  destination_arn: str = None,
  iam_role_arn: str = None,
  metric_definitions: IResolvable | typing.List[RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.destination">destination</a></code> | <code>str</code> | Defines the destination to send the metrics to. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.destinationArn">destination_arn</a></code> | <code>str</code> | Evidently has been discontinued and therefore this is no longer an acceptable field. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Evidently has been discontinued and therefore this is no longer an acceptable field. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.metricDefinitions">metric_definitions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>]</code> | An array of structures which define the metrics that you want to send. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.destination"></a>

```python
destination: str
```

- *Type:* str

Defines the destination to send the metrics to.

Valid values are CloudWatch and Evidently. Note: Evidently has been discontinued and is no longer supported - requests with Evidently will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#destination RumAppMonitor#destination}

---

##### `destination_arn`<sup>Optional</sup> <a name="destination_arn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

Evidently has been discontinued and therefore this is no longer an acceptable field.

If Destination is CloudWatch, do not use this parameter.

This parameter specifies the ARN of the Evidently experiment that will receive the extended metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#destination_arn RumAppMonitor#destination_arn}

---

##### `iam_role_arn`<sup>Optional</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

Evidently has been discontinued and therefore this is no longer an acceptable field.

If Destination is CloudWatch, do not use this parameter.

This parameter specifies the ARN of an IAM role that RUM will assume to write to the Evidently experiment that you are sending metrics to. This role must have permission to write to that experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#iam_role_arn RumAppMonitor#iam_role_arn}

---

##### `metric_definitions`<sup>Optional</sup> <a name="metric_definitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.metricDefinitions"></a>

```python
metric_definitions: IResolvable | typing.List[RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>]

An array of structures which define the metrics that you want to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#metric_definitions RumAppMonitor#metric_definitions}

---

### RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions(
  dimension_keys: typing.Mapping[str] = None,
  event_pattern: str = None,
  name: str = None,
  namespace: str = None,
  unit_label: str = None,
  value_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.dimensionKeys">dimension_keys</a></code> | <code>typing.Mapping[str]</code> | Use this field only if you are sending the metric to CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.eventPattern">event_pattern</a></code> | <code>str</code> | The pattern that defines the metric, specified as a JSON object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.name">name</a></code> | <code>str</code> | The name for the metric that is defined in this structure. For extended metrics, valid values are the following:. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.namespace">namespace</a></code> | <code>str</code> | The namespace used by CloudWatch Metrics for the metric that is defined in this structure. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.unitLabel">unit_label</a></code> | <code>str</code> | The CloudWatch metric unit to use for this metric. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.valueKey">value_key</a></code> | <code>str</code> | The field within the event object that the metric value is sourced from. |

---

##### `dimension_keys`<sup>Optional</sup> <a name="dimension_keys" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.dimensionKeys"></a>

```python
dimension_keys: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Use this field only if you are sending the metric to CloudWatch.

This field is a map of field paths to dimension names. It defines the dimensions to associate with this metric in CloudWatch. For extended metrics, valid values for the entries in this field are the following:

"metadata.pageId": "PageId"

"metadata.browserName": "BrowserName"

"metadata.deviceType": "DeviceType"

"metadata.osName": "OSName"

"metadata.countryCode": "CountryCode"

"event_details.fileType": "FileType"

All dimensions listed in this field must also be included in EventPattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#dimension_keys RumAppMonitor#dimension_keys}

---

##### `event_pattern`<sup>Optional</sup> <a name="event_pattern" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.eventPattern"></a>

```python
event_pattern: str
```

- *Type:* str

The pattern that defines the metric, specified as a JSON object.

RUM checks events that happen in a user's session against the pattern, and events that match the pattern are sent to the metric destination.

When you define extended metrics, the metric definition is not valid if EventPattern is omitted.

Example event patterns:

'{ "event_type": ["com.amazon.rum.js_error_event"], "metadata": { "browserName": [ "Chrome", "Safari" ], } }'

'{ "event_type": ["com.amazon.rum.performance_navigation_event"], "metadata": { "browserName": [ "Chrome", "Firefox" ] }, "event_details": { "duration": [{ "numeric": [ "<", 2000 ] }] } }'

'{ "event_type": ["com.amazon.rum.performance_navigation_event"], "metadata": { "browserName": [ "Chrome", "Safari" ], "countryCode": [ "US" ] }, "event_details": { "duration": [{ "numeric": [ ">=", 2000, "<", 8000 ] }] } }'

If the metrics destination' is CloudWatch and the event also matches a value in DimensionKeys, then the metric is published with the specified dimensions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#event_pattern RumAppMonitor#event_pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.name"></a>

```python
name: str
```

- *Type:* str

The name for the metric that is defined in this structure. For extended metrics, valid values are the following:.

PerformanceNavigationDuration

PerformanceResourceDuration

NavigationSatisfiedTransaction

NavigationToleratedTransaction

NavigationFrustratedTransaction

WebVitalsCumulativeLayoutShift

WebVitalsFirstInputDelay

WebVitalsLargestContentfulPaint

WebVitalsInteractionToNextPaint

JsErrorCount

HttpErrorCount

SessionCount

PageViewCount

Http4xxCount

Http5xxCount

SessionDuration

PageViewCountPerSession

JsErrorCountPerSession

Http4xxCountPerSession

Http5xxCountPerSession

JsErrorCountPerPageView

Http4xxCountPerPageView

Http5xxCountPerPageView

TimeOnPage

ColdLaunchTime

WarmLaunchTime

CrashCount

ANRCount

AppHangCount

ScreenLoadCount

ScreenLoadTime

NetworkLatency

SpanPayloadSize

LogEventPayloadSize

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#name RumAppMonitor#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace used by CloudWatch Metrics for the metric that is defined in this structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#namespace RumAppMonitor#namespace}

---

##### `unit_label`<sup>Optional</sup> <a name="unit_label" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.unitLabel"></a>

```python
unit_label: str
```

- *Type:* str

The CloudWatch metric unit to use for this metric.

If you omit this field, the metric is recorded with no unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#unit_label RumAppMonitor#unit_label}

---

##### `value_key`<sup>Optional</sup> <a name="value_key" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.valueKey"></a>

```python
value_key: str
```

- *Type:* str

The field within the event object that the metric value is sourced from.

If you omit this field, a hardcoded value of 1 is pushed as the metric value. This is useful if you just want to count the number of events that the filter catches.

If this metric is sent to Evidently, this field will be passed to Evidently raw and Evidently will handle data extraction from the event. Note: Evidently has been discontinued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#value_key RumAppMonitor#value_key}

---

### RumAppMonitorConfig <a name="RumAppMonitorConfig" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  app_monitor_configuration: RumAppMonitorAppMonitorConfiguration = None,
  custom_events: RumAppMonitorCustomEvents = None,
  cw_log_enabled: bool | IResolvable = None,
  deobfuscation_configuration: RumAppMonitorDeobfuscationConfiguration = None,
  domain: str = None,
  domain_list: typing.List[str] = None,
  platform: str = None,
  resource_policy: RumAppMonitorResourcePolicy = None,
  tags: IResolvable | typing.List[RumAppMonitorTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.name">name</a></code> | <code>str</code> | A name for the app monitor. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.appMonitorConfiguration">app_monitor_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | AppMonitor configuration. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.customEvents">custom_events</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | AppMonitor custom events configuration. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.cwLogEnabled">cw_log_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Data collected by RUM is kept by RUM for 30 days and then deleted. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.deobfuscationConfiguration">deobfuscation_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a></code> | A structure that contains the configuration for how an app monitor can deobfuscate stack traces. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.domain">domain</a></code> | <code>str</code> | The top-level internet domain name for which your application has administrative authority. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.domainList">domain_list</a></code> | <code>typing.List[str]</code> | The top-level internet domain names for which your application has administrative authority. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.platform">platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#platform RumAppMonitor#platform}. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.resourcePolicy">resource_policy</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a></code> | A structure that defines resource policy attached to your app monitor. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>]</code> | Assigns one or more tags (key-value pairs) to the app monitor. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A name for the app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#name RumAppMonitor#name}

---

##### `app_monitor_configuration`<sup>Optional</sup> <a name="app_monitor_configuration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.appMonitorConfiguration"></a>

```python
app_monitor_configuration: RumAppMonitorAppMonitorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

AppMonitor configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#app_monitor_configuration RumAppMonitor#app_monitor_configuration}

---

##### `custom_events`<sup>Optional</sup> <a name="custom_events" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.customEvents"></a>

```python
custom_events: RumAppMonitorCustomEvents
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

AppMonitor custom events configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#custom_events RumAppMonitor#custom_events}

---

##### `cw_log_enabled`<sup>Optional</sup> <a name="cw_log_enabled" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.cwLogEnabled"></a>

```python
cw_log_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Data collected by RUM is kept by RUM for 30 days and then deleted.

This parameter specifies whether RUM sends a copy of this telemetry data to CWLlong in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur CWLlong charges. If you omit this parameter, the default is false

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#cw_log_enabled RumAppMonitor#cw_log_enabled}

---

##### `deobfuscation_configuration`<sup>Optional</sup> <a name="deobfuscation_configuration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.deobfuscationConfiguration"></a>

```python
deobfuscation_configuration: RumAppMonitorDeobfuscationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a>

A structure that contains the configuration for how an app monitor can deobfuscate stack traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#deobfuscation_configuration RumAppMonitor#deobfuscation_configuration}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

The top-level internet domain name for which your application has administrative authority.

The CreateAppMonitor requires either the domain or the domain list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#domain RumAppMonitor#domain}

---

##### `domain_list`<sup>Optional</sup> <a name="domain_list" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.domainList"></a>

```python
domain_list: typing.List[str]
```

- *Type:* typing.List[str]

The top-level internet domain names for which your application has administrative authority.

The CreateAppMonitor requires either the domain or the domain list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#domain_list RumAppMonitor#domain_list}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.platform"></a>

```python
platform: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#platform RumAppMonitor#platform}.

---

##### `resource_policy`<sup>Optional</sup> <a name="resource_policy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.resourcePolicy"></a>

```python
resource_policy: RumAppMonitorResourcePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a>

A structure that defines resource policy attached to your app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#resource_policy RumAppMonitor#resource_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RumAppMonitorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>]

Assigns one or more tags (key-value pairs) to the app monitor.

Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.You can associate as many as 50 tags with an app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#tags RumAppMonitor#tags}

---

### RumAppMonitorCustomEvents <a name="RumAppMonitorCustomEvents" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorCustomEvents(
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents.property.status">status</a></code> | <code>str</code> | Indicates whether AppMonitor accepts custom events. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents.property.status"></a>

```python
status: str
```

- *Type:* str

Indicates whether AppMonitor accepts custom events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#status RumAppMonitor#status}

---

### RumAppMonitorDeobfuscationConfiguration <a name="RumAppMonitorDeobfuscationConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorDeobfuscationConfiguration(
  java_script_source_maps: RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration.property.javaScriptSourceMaps">java_script_source_maps</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a></code> | A structure that contains the configuration for how an app monitor can unminify JavaScript error stack traces using source maps. |

---

##### `java_script_source_maps`<sup>Optional</sup> <a name="java_script_source_maps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration.property.javaScriptSourceMaps"></a>

```python
java_script_source_maps: RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a>

A structure that contains the configuration for how an app monitor can unminify JavaScript error stack traces using source maps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#java_script_source_maps RumAppMonitor#java_script_source_maps}

---

### RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps <a name="RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps(
  s3_uri: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.property.s3Uri">s3_uri</a></code> | <code>str</code> | The S3Uri of the bucket or folder that stores the source map files. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.property.status">status</a></code> | <code>str</code> | Specifies whether JavaScript error stack traces should be unminified for this app monitor. |

---

##### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

The S3Uri of the bucket or folder that stores the source map files.

It is required if status is ENABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#s3_uri RumAppMonitor#s3_uri}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.property.status"></a>

```python
status: str
```

- *Type:* str

Specifies whether JavaScript error stack traces should be unminified for this app monitor.

The default is for JavaScript error stack trace unminification to be DISABLED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#status RumAppMonitor#status}

---

### RumAppMonitorResourcePolicy <a name="RumAppMonitorResourcePolicy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorResourcePolicy(
  policy_document: str = None,
  policy_revision_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.property.policyDocument">policy_document</a></code> | <code>str</code> | The JSON to use as the resource policy. The document can be up to 4 KB in size. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.property.policyRevisionId">policy_revision_id</a></code> | <code>str</code> | A string value that you can use to conditionally update your policy. |

---

##### `policy_document`<sup>Optional</sup> <a name="policy_document" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

The JSON to use as the resource policy. The document can be up to 4 KB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#policy_document RumAppMonitor#policy_document}

---

##### `policy_revision_id`<sup>Optional</sup> <a name="policy_revision_id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.property.policyRevisionId"></a>

```python
policy_revision_id: str
```

- *Type:* str

A string value that you can use to conditionally update your policy.

You can provide the revision ID of your existing policy to make mutating requests against that policy.

When you assign a policy revision ID, then later requests about that policy will be rejected with an InvalidPolicyRevisionIdException error if they don't provide the correct current revision ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#policy_revision_id RumAppMonitor#policy_revision_id}

---

### RumAppMonitorTags <a name="RumAppMonitorTags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#key RumAppMonitor#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#value RumAppMonitor#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RumAppMonitorAppMonitorConfigurationMetricDestinationsList <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RumAppMonitorAppMonitorConfigurationMetricDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>]

---


### RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>]

---


### RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetDimensionKeys">reset_dimension_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetEventPattern">reset_event_pattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetUnitLabel">reset_unit_label</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetValueKey">reset_value_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dimension_keys` <a name="reset_dimension_keys" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetDimensionKeys"></a>

```python
def reset_dimension_keys() -> None
```

##### `reset_event_pattern` <a name="reset_event_pattern" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetEventPattern"></a>

```python
def reset_event_pattern() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_unit_label` <a name="reset_unit_label" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetUnitLabel"></a>

```python
def reset_unit_label() -> None
```

##### `reset_value_key` <a name="reset_value_key" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetValueKey"></a>

```python
def reset_value_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeysInput">dimension_keys_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPatternInput">event_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabelInput">unit_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKeyInput">value_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeys">dimension_keys</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPattern">event_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabel">unit_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKey">value_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension_keys_input`<sup>Optional</sup> <a name="dimension_keys_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeysInput"></a>

```python
dimension_keys_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `event_pattern_input`<sup>Optional</sup> <a name="event_pattern_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPatternInput"></a>

```python
event_pattern_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `unit_label_input`<sup>Optional</sup> <a name="unit_label_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabelInput"></a>

```python
unit_label_input: str
```

- *Type:* str

---

##### `value_key_input`<sup>Optional</sup> <a name="value_key_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKeyInput"></a>

```python
value_key_input: str
```

- *Type:* str

---

##### `dimension_keys`<sup>Required</sup> <a name="dimension_keys" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeys"></a>

```python
dimension_keys: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `event_pattern`<sup>Required</sup> <a name="event_pattern" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPattern"></a>

```python
event_pattern: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `unit_label`<sup>Required</sup> <a name="unit_label" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabel"></a>

```python
unit_label: str
```

- *Type:* str

---

##### `value_key`<sup>Required</sup> <a name="value_key" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKey"></a>

```python
value_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>

---


### RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.putMetricDefinitions">put_metric_definitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetDestinationArn">reset_destination_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetIamRoleArn">reset_iam_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetMetricDefinitions">reset_metric_definitions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric_definitions` <a name="put_metric_definitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.putMetricDefinitions"></a>

```python
def put_metric_definitions(
  value: IResolvable | typing.List[RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.putMetricDefinitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>]

---

##### `reset_destination` <a name="reset_destination" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_destination_arn` <a name="reset_destination_arn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetDestinationArn"></a>

```python
def reset_destination_arn() -> None
```

##### `reset_iam_role_arn` <a name="reset_iam_role_arn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetIamRoleArn"></a>

```python
def reset_iam_role_arn() -> None
```

##### `reset_metric_definitions` <a name="reset_metric_definitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetMetricDefinitions"></a>

```python
def reset_metric_definitions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitions">metric_definitions</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArnInput">destination_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitionsInput">metric_definitions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArn">destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_definitions`<sup>Required</sup> <a name="metric_definitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitions"></a>

```python
metric_definitions: RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList</a>

---

##### `destination_arn_input`<sup>Optional</sup> <a name="destination_arn_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArnInput"></a>

```python
destination_arn_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `metric_definitions_input`<sup>Optional</sup> <a name="metric_definitions_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitionsInput"></a>

```python
metric_definitions_input: IResolvable | typing.List[RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RumAppMonitorAppMonitorConfigurationMetricDestinations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>

---


### RumAppMonitorAppMonitorConfigurationOutputReference <a name="RumAppMonitorAppMonitorConfigurationOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.putMetricDestinations">put_metric_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetAllowCookies">reset_allow_cookies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetEnableXRay">reset_enable_x_ray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetExcludedPages">reset_excluded_pages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetFavoritePages">reset_favorite_pages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetGuestRoleArn">reset_guest_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIdentityPoolId">reset_identity_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIncludedPages">reset_included_pages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetMetricDestinations">reset_metric_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetSessionSampleRate">reset_session_sample_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetTelemetries">reset_telemetries</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric_destinations` <a name="put_metric_destinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.putMetricDestinations"></a>

```python
def put_metric_destinations(
  value: IResolvable | typing.List[RumAppMonitorAppMonitorConfigurationMetricDestinations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.putMetricDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>]

---

##### `reset_allow_cookies` <a name="reset_allow_cookies" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetAllowCookies"></a>

```python
def reset_allow_cookies() -> None
```

##### `reset_enable_x_ray` <a name="reset_enable_x_ray" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetEnableXRay"></a>

```python
def reset_enable_x_ray() -> None
```

##### `reset_excluded_pages` <a name="reset_excluded_pages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetExcludedPages"></a>

```python
def reset_excluded_pages() -> None
```

##### `reset_favorite_pages` <a name="reset_favorite_pages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetFavoritePages"></a>

```python
def reset_favorite_pages() -> None
```

##### `reset_guest_role_arn` <a name="reset_guest_role_arn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetGuestRoleArn"></a>

```python
def reset_guest_role_arn() -> None
```

##### `reset_identity_pool_id` <a name="reset_identity_pool_id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIdentityPoolId"></a>

```python
def reset_identity_pool_id() -> None
```

##### `reset_included_pages` <a name="reset_included_pages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIncludedPages"></a>

```python
def reset_included_pages() -> None
```

##### `reset_metric_destinations` <a name="reset_metric_destinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetMetricDestinations"></a>

```python
def reset_metric_destinations() -> None
```

##### `reset_session_sample_rate` <a name="reset_session_sample_rate" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetSessionSampleRate"></a>

```python
def reset_session_sample_rate() -> None
```

##### `reset_telemetries` <a name="reset_telemetries" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetTelemetries"></a>

```python
def reset_telemetries() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinations">metric_destinations</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList">RumAppMonitorAppMonitorConfigurationMetricDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookiesInput">allow_cookies_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRayInput">enable_x_ray_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPagesInput">excluded_pages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePagesInput">favorite_pages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArnInput">guest_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolIdInput">identity_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPagesInput">included_pages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinationsInput">metric_destinations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRateInput">session_sample_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetriesInput">telemetries_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies">allow_cookies</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRay">enable_x_ray</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages">excluded_pages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages">favorite_pages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn">guest_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages">included_pages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate">session_sample_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries">telemetries</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_destinations`<sup>Required</sup> <a name="metric_destinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinations"></a>

```python
metric_destinations: RumAppMonitorAppMonitorConfigurationMetricDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList">RumAppMonitorAppMonitorConfigurationMetricDestinationsList</a>

---

##### `allow_cookies_input`<sup>Optional</sup> <a name="allow_cookies_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookiesInput"></a>

```python
allow_cookies_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_x_ray_input`<sup>Optional</sup> <a name="enable_x_ray_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRayInput"></a>

```python
enable_x_ray_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `excluded_pages_input`<sup>Optional</sup> <a name="excluded_pages_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPagesInput"></a>

```python
excluded_pages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `favorite_pages_input`<sup>Optional</sup> <a name="favorite_pages_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePagesInput"></a>

```python
favorite_pages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `guest_role_arn_input`<sup>Optional</sup> <a name="guest_role_arn_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArnInput"></a>

```python
guest_role_arn_input: str
```

- *Type:* str

---

##### `identity_pool_id_input`<sup>Optional</sup> <a name="identity_pool_id_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolIdInput"></a>

```python
identity_pool_id_input: str
```

- *Type:* str

---

##### `included_pages_input`<sup>Optional</sup> <a name="included_pages_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPagesInput"></a>

```python
included_pages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metric_destinations_input`<sup>Optional</sup> <a name="metric_destinations_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinationsInput"></a>

```python
metric_destinations_input: IResolvable | typing.List[RumAppMonitorAppMonitorConfigurationMetricDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations">RumAppMonitorAppMonitorConfigurationMetricDestinations</a>]

---

##### `session_sample_rate_input`<sup>Optional</sup> <a name="session_sample_rate_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRateInput"></a>

```python
session_sample_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `telemetries_input`<sup>Optional</sup> <a name="telemetries_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetriesInput"></a>

```python
telemetries_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_cookies`<sup>Required</sup> <a name="allow_cookies" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies"></a>

```python
allow_cookies: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_x_ray`<sup>Required</sup> <a name="enable_x_ray" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRay"></a>

```python
enable_x_ray: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `excluded_pages`<sup>Required</sup> <a name="excluded_pages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages"></a>

```python
excluded_pages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `favorite_pages`<sup>Required</sup> <a name="favorite_pages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages"></a>

```python
favorite_pages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `guest_role_arn`<sup>Required</sup> <a name="guest_role_arn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn"></a>

```python
guest_role_arn: str
```

- *Type:* str

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

---

##### `included_pages`<sup>Required</sup> <a name="included_pages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages"></a>

```python
included_pages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `session_sample_rate`<sup>Required</sup> <a name="session_sample_rate" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate"></a>

```python
session_sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `telemetries`<sup>Required</sup> <a name="telemetries" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries"></a>

```python
telemetries: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RumAppMonitorAppMonitorConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

---


### RumAppMonitorCustomEventsOutputReference <a name="RumAppMonitorCustomEventsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorCustomEventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RumAppMonitorCustomEvents
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

---


### RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference <a name="RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resetS3Uri">reset_s3_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_uri` <a name="reset_s3_uri" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resetS3Uri"></a>

```python
def reset_s3_uri() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a>

---


### RumAppMonitorDeobfuscationConfigurationOutputReference <a name="RumAppMonitorDeobfuscationConfigurationOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.putJavaScriptSourceMaps">put_java_script_source_maps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resetJavaScriptSourceMaps">reset_java_script_source_maps</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_java_script_source_maps` <a name="put_java_script_source_maps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.putJavaScriptSourceMaps"></a>

```python
def put_java_script_source_maps(
  s3_uri: str = None,
  status: str = None
) -> None
```

###### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.putJavaScriptSourceMaps.parameter.s3Uri"></a>

- *Type:* str

The S3Uri of the bucket or folder that stores the source map files.

It is required if status is ENABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#s3_uri RumAppMonitor#s3_uri}

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.putJavaScriptSourceMaps.parameter.status"></a>

- *Type:* str

Specifies whether JavaScript error stack traces should be unminified for this app monitor.

The default is for JavaScript error stack trace unminification to be DISABLED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rum_app_monitor#status RumAppMonitor#status}

---

##### `reset_java_script_source_maps` <a name="reset_java_script_source_maps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resetJavaScriptSourceMaps"></a>

```python
def reset_java_script_source_maps() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMaps">java_script_source_maps</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMapsInput">java_script_source_maps_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `java_script_source_maps`<sup>Required</sup> <a name="java_script_source_maps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMaps"></a>

```python
java_script_source_maps: RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference</a>

---

##### `java_script_source_maps_input`<sup>Optional</sup> <a name="java_script_source_maps_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMapsInput"></a>

```python
java_script_source_maps_input: IResolvable | RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RumAppMonitorDeobfuscationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a>

---


### RumAppMonitorResourcePolicyOutputReference <a name="RumAppMonitorResourcePolicyOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorResourcePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resetPolicyDocument">reset_policy_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resetPolicyRevisionId">reset_policy_revision_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_policy_document` <a name="reset_policy_document" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resetPolicyDocument"></a>

```python
def reset_policy_document() -> None
```

##### `reset_policy_revision_id` <a name="reset_policy_revision_id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resetPolicyRevisionId"></a>

```python
def reset_policy_revision_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyDocumentInput">policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyRevisionIdInput">policy_revision_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyRevisionId">policy_revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_document_input`<sup>Optional</sup> <a name="policy_document_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyDocumentInput"></a>

```python
policy_document_input: str
```

- *Type:* str

---

##### `policy_revision_id_input`<sup>Optional</sup> <a name="policy_revision_id_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyRevisionIdInput"></a>

```python
policy_revision_id_input: str
```

- *Type:* str

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

##### `policy_revision_id`<sup>Required</sup> <a name="policy_revision_id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyRevisionId"></a>

```python
policy_revision_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RumAppMonitorResourcePolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a>

---


### RumAppMonitorTagsList <a name="RumAppMonitorTagsList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RumAppMonitorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RumAppMonitorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>]

---


### RumAppMonitorTagsOutputReference <a name="RumAppMonitorTagsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rum_app_monitor

rumAppMonitor.RumAppMonitorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RumAppMonitorTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags">RumAppMonitorTags</a>

---



