# `ec2ApplicationStatusCheck` Submodule <a name="`ec2ApplicationStatusCheck` Submodule" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ApplicationStatusCheck <a name="Ec2ApplicationStatusCheck" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check awscc_ec2_application_status_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_application_status_check

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  port: typing.Union[int, float],
  protocol: str,
  aggregation: str = None,
  device_index: typing.Union[int, float] = None,
  failure_threshold: typing.Union[int, float] = None,
  health_check_paths: IResolvable | typing.List[Ec2ApplicationStatusCheckHealthCheckPaths] = None,
  initialization_grace_period_seconds: typing.Union[int, float] = None,
  interval: typing.Union[int, float] = None,
  ip_scope: str = None,
  ip_version: str = None,
  path: str = None,
  status_code_matcher: str = None,
  success_threshold: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[Ec2ApplicationStatusCheckTags] = None,
  timeout: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The port used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | The network protocol used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.aggregation">aggregation</a></code> | <code>str</code> | Whether this check is included in the rolled-up application status. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.deviceIndex">device_index</a></code> | <code>typing.Union[int, float]</code> | The network interface device index used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive failed probes required to mark the instance unhealthy. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.healthCheckPaths">health_check_paths</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>]</code> | The source/destination network paths used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.initializationGracePeriodSeconds">initialization_grace_period_seconds</a></code> | <code>typing.Union[int, float]</code> | Seconds to wait after instance launch before beginning health checks. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.interval">interval</a></code> | <code>typing.Union[int, float]</code> | The interval, in seconds, between health check probes. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.ipScope">ip_scope</a></code> | <code>str</code> | The IP scope used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.ipVersion">ip_version</a></code> | <code>str</code> | The IP version used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.path">path</a></code> | <code>str</code> | The HTTP path used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.statusCodeMatcher">status_code_matcher</a></code> | <code>str</code> | The HTTP status codes considered successful (e.g., "200-299"). |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.successThreshold">success_threshold</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive successful probes required to mark the instance healthy. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>]</code> | Tags to apply to the application status check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout, in seconds, for each health check probe. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#port Ec2ApplicationStatusCheck#port}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.protocol"></a>

- *Type:* str

The network protocol used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#protocol Ec2ApplicationStatusCheck#protocol}

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.aggregation"></a>

- *Type:* str

Whether this check is included in the rolled-up application status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#aggregation Ec2ApplicationStatusCheck#aggregation}

---

##### `device_index`<sup>Optional</sup> <a name="device_index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.deviceIndex"></a>

- *Type:* typing.Union[int, float]

The network interface device index used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#device_index Ec2ApplicationStatusCheck#device_index}

---

##### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.failureThreshold"></a>

- *Type:* typing.Union[int, float]

The number of consecutive failed probes required to mark the instance unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#failure_threshold Ec2ApplicationStatusCheck#failure_threshold}

---

##### `health_check_paths`<sup>Optional</sup> <a name="health_check_paths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.healthCheckPaths"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>]

The source/destination network paths used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#health_check_paths Ec2ApplicationStatusCheck#health_check_paths}

---

##### `initialization_grace_period_seconds`<sup>Optional</sup> <a name="initialization_grace_period_seconds" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.initializationGracePeriodSeconds"></a>

- *Type:* typing.Union[int, float]

Seconds to wait after instance launch before beginning health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#initialization_grace_period_seconds Ec2ApplicationStatusCheck#initialization_grace_period_seconds}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.interval"></a>

- *Type:* typing.Union[int, float]

The interval, in seconds, between health check probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#interval Ec2ApplicationStatusCheck#interval}

---

##### `ip_scope`<sup>Optional</sup> <a name="ip_scope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.ipScope"></a>

- *Type:* str

The IP scope used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#ip_scope Ec2ApplicationStatusCheck#ip_scope}

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.ipVersion"></a>

- *Type:* str

The IP version used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#ip_version Ec2ApplicationStatusCheck#ip_version}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.path"></a>

- *Type:* str

The HTTP path used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#path Ec2ApplicationStatusCheck#path}

---

##### `status_code_matcher`<sup>Optional</sup> <a name="status_code_matcher" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.statusCodeMatcher"></a>

- *Type:* str

The HTTP status codes considered successful (e.g., "200-299").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#status_code_matcher Ec2ApplicationStatusCheck#status_code_matcher}

---

##### `success_threshold`<sup>Optional</sup> <a name="success_threshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.successThreshold"></a>

- *Type:* typing.Union[int, float]

The number of consecutive successful probes required to mark the instance healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#success_threshold Ec2ApplicationStatusCheck#success_threshold}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>]

Tags to apply to the application status check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#tags Ec2ApplicationStatusCheck#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

The timeout, in seconds, for each health check probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#timeout Ec2ApplicationStatusCheck#timeout}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putHealthCheckPaths">put_health_check_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetAggregation">reset_aggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetDeviceIndex">reset_device_index</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetFailureThreshold">reset_failure_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetHealthCheckPaths">reset_health_check_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInitializationGracePeriodSeconds">reset_initialization_grace_period_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpScope">reset_ip_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpVersion">reset_ip_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetStatusCodeMatcher">reset_status_code_matcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetSuccessThreshold">reset_success_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_health_check_paths` <a name="put_health_check_paths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putHealthCheckPaths"></a>

```python
def put_health_check_paths(
  value: IResolvable | typing.List[Ec2ApplicationStatusCheckHealthCheckPaths]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putHealthCheckPaths.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2ApplicationStatusCheckTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>]

---

##### `reset_aggregation` <a name="reset_aggregation" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetAggregation"></a>

```python
def reset_aggregation() -> None
```

##### `reset_device_index` <a name="reset_device_index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetDeviceIndex"></a>

```python
def reset_device_index() -> None
```

##### `reset_failure_threshold` <a name="reset_failure_threshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetFailureThreshold"></a>

```python
def reset_failure_threshold() -> None
```

##### `reset_health_check_paths` <a name="reset_health_check_paths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetHealthCheckPaths"></a>

```python
def reset_health_check_paths() -> None
```

##### `reset_initialization_grace_period_seconds` <a name="reset_initialization_grace_period_seconds" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInitializationGracePeriodSeconds"></a>

```python
def reset_initialization_grace_period_seconds() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_ip_scope` <a name="reset_ip_scope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpScope"></a>

```python
def reset_ip_scope() -> None
```

##### `reset_ip_version` <a name="reset_ip_version" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpVersion"></a>

```python
def reset_ip_version() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_status_code_matcher` <a name="reset_status_code_matcher" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetStatusCodeMatcher"></a>

```python
def reset_status_code_matcher() -> None
```

##### `reset_success_threshold` <a name="reset_success_threshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetSuccessThreshold"></a>

```python
def reset_success_threshold() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTimeout"></a>

```python
def reset_timeout() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2ApplicationStatusCheck resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_application_status_check

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_application_status_check

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_application_status_check

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_application_status_check

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2ApplicationStatusCheck resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2ApplicationStatusCheck to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2ApplicationStatusCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2ApplicationStatusCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.applicationStatusCheckId">application_status_check_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPaths">health_check_paths</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList">Ec2ApplicationStatusCheckHealthCheckPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList">Ec2ApplicationStatusCheckTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregationInput">aggregation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndexInput">device_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThresholdInput">failure_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPathsInput">health_check_paths_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSecondsInput">initialization_grace_period_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScopeInput">ip_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersionInput">ip_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcherInput">status_code_matcher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThresholdInput">success_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregation">aggregation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndex">device_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSeconds">initialization_grace_period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScope">ip_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersion">ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcher">status_code_matcher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThreshold">success_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_status_check_id`<sup>Required</sup> <a name="application_status_check_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.applicationStatusCheckId"></a>

```python
application_status_check_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `health_check_paths`<sup>Required</sup> <a name="health_check_paths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPaths"></a>

```python
health_check_paths: Ec2ApplicationStatusCheckHealthCheckPathsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList">Ec2ApplicationStatusCheckHealthCheckPathsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tags"></a>

```python
tags: Ec2ApplicationStatusCheckTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList">Ec2ApplicationStatusCheckTagsList</a>

---

##### `aggregation_input`<sup>Optional</sup> <a name="aggregation_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregationInput"></a>

```python
aggregation_input: str
```

- *Type:* str

---

##### `device_index_input`<sup>Optional</sup> <a name="device_index_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndexInput"></a>

```python
device_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_threshold_input`<sup>Optional</sup> <a name="failure_threshold_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThresholdInput"></a>

```python
failure_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_paths_input`<sup>Optional</sup> <a name="health_check_paths_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPathsInput"></a>

```python
health_check_paths_input: IResolvable | typing.List[Ec2ApplicationStatusCheckHealthCheckPaths]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>]

---

##### `initialization_grace_period_seconds_input`<sup>Optional</sup> <a name="initialization_grace_period_seconds_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSecondsInput"></a>

```python
initialization_grace_period_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_scope_input`<sup>Optional</sup> <a name="ip_scope_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScopeInput"></a>

```python
ip_scope_input: str
```

- *Type:* str

---

##### `ip_version_input`<sup>Optional</sup> <a name="ip_version_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersionInput"></a>

```python
ip_version_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `status_code_matcher_input`<sup>Optional</sup> <a name="status_code_matcher_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcherInput"></a>

```python
status_code_matcher_input: str
```

- *Type:* str

---

##### `success_threshold_input`<sup>Optional</sup> <a name="success_threshold_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThresholdInput"></a>

```python
success_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2ApplicationStatusCheckTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

---

##### `device_index`<sup>Required</sup> <a name="device_index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndex"></a>

```python
device_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initialization_grace_period_seconds`<sup>Required</sup> <a name="initialization_grace_period_seconds" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSeconds"></a>

```python
initialization_grace_period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_scope`<sup>Required</sup> <a name="ip_scope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScope"></a>

```python
ip_scope: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `status_code_matcher`<sup>Required</sup> <a name="status_code_matcher" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcher"></a>

```python
status_code_matcher: str
```

- *Type:* str

---

##### `success_threshold`<sup>Required</sup> <a name="success_threshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThreshold"></a>

```python
success_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ApplicationStatusCheckConfig <a name="Ec2ApplicationStatusCheckConfig" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_application_status_check

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  port: typing.Union[int, float],
  protocol: str,
  aggregation: str = None,
  device_index: typing.Union[int, float] = None,
  failure_threshold: typing.Union[int, float] = None,
  health_check_paths: IResolvable | typing.List[Ec2ApplicationStatusCheckHealthCheckPaths] = None,
  initialization_grace_period_seconds: typing.Union[int, float] = None,
  interval: typing.Union[int, float] = None,
  ip_scope: str = None,
  ip_version: str = None,
  path: str = None,
  status_code_matcher: str = None,
  success_threshold: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[Ec2ApplicationStatusCheckTags] = None,
  timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.protocol">protocol</a></code> | <code>str</code> | The network protocol used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.aggregation">aggregation</a></code> | <code>str</code> | Whether this check is included in the rolled-up application status. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.deviceIndex">device_index</a></code> | <code>typing.Union[int, float]</code> | The network interface device index used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive failed probes required to mark the instance unhealthy. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.healthCheckPaths">health_check_paths</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>]</code> | The source/destination network paths used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.initializationGracePeriodSeconds">initialization_grace_period_seconds</a></code> | <code>typing.Union[int, float]</code> | Seconds to wait after instance launch before beginning health checks. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | The interval, in seconds, between health check probes. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipScope">ip_scope</a></code> | <code>str</code> | The IP scope used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipVersion">ip_version</a></code> | <code>str</code> | The IP version used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.path">path</a></code> | <code>str</code> | The HTTP path used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.statusCodeMatcher">status_code_matcher</a></code> | <code>str</code> | The HTTP status codes considered successful (e.g., "200-299"). |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.successThreshold">success_threshold</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive successful probes required to mark the instance healthy. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>]</code> | Tags to apply to the application status check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The timeout, in seconds, for each health check probe. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#port Ec2ApplicationStatusCheck#port}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The network protocol used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#protocol Ec2ApplicationStatusCheck#protocol}

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

Whether this check is included in the rolled-up application status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#aggregation Ec2ApplicationStatusCheck#aggregation}

---

##### `device_index`<sup>Optional</sup> <a name="device_index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.deviceIndex"></a>

```python
device_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The network interface device index used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#device_index Ec2ApplicationStatusCheck#device_index}

---

##### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive failed probes required to mark the instance unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#failure_threshold Ec2ApplicationStatusCheck#failure_threshold}

---

##### `health_check_paths`<sup>Optional</sup> <a name="health_check_paths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.healthCheckPaths"></a>

```python
health_check_paths: IResolvable | typing.List[Ec2ApplicationStatusCheckHealthCheckPaths]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>]

The source/destination network paths used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#health_check_paths Ec2ApplicationStatusCheck#health_check_paths}

---

##### `initialization_grace_period_seconds`<sup>Optional</sup> <a name="initialization_grace_period_seconds" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.initializationGracePeriodSeconds"></a>

```python
initialization_grace_period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Seconds to wait after instance launch before beginning health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#initialization_grace_period_seconds Ec2ApplicationStatusCheck#initialization_grace_period_seconds}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The interval, in seconds, between health check probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#interval Ec2ApplicationStatusCheck#interval}

---

##### `ip_scope`<sup>Optional</sup> <a name="ip_scope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipScope"></a>

```python
ip_scope: str
```

- *Type:* str

The IP scope used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#ip_scope Ec2ApplicationStatusCheck#ip_scope}

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

The IP version used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#ip_version Ec2ApplicationStatusCheck#ip_version}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.path"></a>

```python
path: str
```

- *Type:* str

The HTTP path used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#path Ec2ApplicationStatusCheck#path}

---

##### `status_code_matcher`<sup>Optional</sup> <a name="status_code_matcher" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.statusCodeMatcher"></a>

```python
status_code_matcher: str
```

- *Type:* str

The HTTP status codes considered successful (e.g., "200-299").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#status_code_matcher Ec2ApplicationStatusCheck#status_code_matcher}

---

##### `success_threshold`<sup>Optional</sup> <a name="success_threshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.successThreshold"></a>

```python
success_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive successful probes required to mark the instance healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#success_threshold Ec2ApplicationStatusCheck#success_threshold}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2ApplicationStatusCheckTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>]

Tags to apply to the application status check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#tags Ec2ApplicationStatusCheck#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The timeout, in seconds, for each health check probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#timeout Ec2ApplicationStatusCheck#timeout}

---

### Ec2ApplicationStatusCheckHealthCheckPaths <a name="Ec2ApplicationStatusCheckHealthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_application_status_check

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths(
  destinations: IResolvable | typing.List[Ec2ApplicationStatusCheckHealthCheckPathsDestinations] = None,
  source: Ec2ApplicationStatusCheckHealthCheckPathsSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#destinations Ec2ApplicationStatusCheck#destinations}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#source Ec2ApplicationStatusCheck#source}. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.destinations"></a>

```python
destinations: IResolvable | typing.List[Ec2ApplicationStatusCheckHealthCheckPathsDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#destinations Ec2ApplicationStatusCheck#destinations}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.source"></a>

```python
source: Ec2ApplicationStatusCheckHealthCheckPathsSource
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#source Ec2ApplicationStatusCheck#source}.

---

### Ec2ApplicationStatusCheckHealthCheckPathsDestinations <a name="Ec2ApplicationStatusCheckHealthCheckPathsDestinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_application_status_check

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations(
  security_group_id: str = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}. |

---

##### `security_group_id`<sup>Optional</sup> <a name="security_group_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}.

---

### Ec2ApplicationStatusCheckHealthCheckPathsSource <a name="Ec2ApplicationStatusCheckHealthCheckPathsSource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_application_status_check

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource(
  security_group_id: str = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}. |

---

##### `security_group_id`<sup>Optional</sup> <a name="security_group_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}.

---

### Ec2ApplicationStatusCheckTags <a name="Ec2ApplicationStatusCheckTags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_application_status_check

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#key Ec2ApplicationStatusCheck#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#value Ec2ApplicationStatusCheck#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#key Ec2ApplicationStatusCheck#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#value Ec2ApplicationStatusCheck#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList <a name="Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_application_status_check

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2ApplicationStatusCheckHealthCheckPathsDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>]

---


### Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference <a name="Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_application_status_check

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSecurityGroupId">reset_security_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_id` <a name="reset_security_group_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSecurityGroupId"></a>

```python
def reset_security_group_id() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupIdInput">security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_id_input`<sup>Optional</sup> <a name="security_group_id_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupIdInput"></a>

```python
security_group_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2ApplicationStatusCheckHealthCheckPathsDestinations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>

---


### Ec2ApplicationStatusCheckHealthCheckPathsList <a name="Ec2ApplicationStatusCheckHealthCheckPathsList" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_application_status_check

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2ApplicationStatusCheckHealthCheckPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2ApplicationStatusCheckHealthCheckPaths]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>]

---


### Ec2ApplicationStatusCheckHealthCheckPathsOutputReference <a name="Ec2ApplicationStatusCheckHealthCheckPathsOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_application_status_check

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destinations` <a name="put_destinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putDestinations"></a>

```python
def put_destinations(
  value: IResolvable | typing.List[Ec2ApplicationStatusCheckHealthCheckPathsDestinations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>]

---

##### `put_source` <a name="put_source" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putSource"></a>

```python
def put_source(
  security_group_id: str = None,
  subnet_id: str = None
) -> None
```

###### `security_group_id`<sup>Optional</sup> <a name="security_group_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putSource.parameter.securityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putSource.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}.

---

##### `reset_destinations` <a name="reset_destinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList">Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference">Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinationsInput">destinations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.sourceInput">source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinations"></a>

```python
destinations: Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList">Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.source"></a>

```python
source: Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference">Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference</a>

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinationsInput"></a>

```python
destinations_input: IResolvable | typing.List[Ec2ApplicationStatusCheckHealthCheckPathsDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.sourceInput"></a>

```python
source_input: IResolvable | Ec2ApplicationStatusCheckHealthCheckPathsSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2ApplicationStatusCheckHealthCheckPaths
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>

---


### Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference <a name="Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_application_status_check

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSecurityGroupId">reset_security_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_id` <a name="reset_security_group_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSecurityGroupId"></a>

```python
def reset_security_group_id() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupIdInput">security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_id_input`<sup>Optional</sup> <a name="security_group_id_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupIdInput"></a>

```python
security_group_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2ApplicationStatusCheckHealthCheckPathsSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a>

---


### Ec2ApplicationStatusCheckTagsList <a name="Ec2ApplicationStatusCheckTagsList" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_application_status_check

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2ApplicationStatusCheckTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2ApplicationStatusCheckTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>]

---


### Ec2ApplicationStatusCheckTagsOutputReference <a name="Ec2ApplicationStatusCheckTagsOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_application_status_check

ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2ApplicationStatusCheckTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>

---



