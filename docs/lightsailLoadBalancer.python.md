# `lightsailLoadBalancer` Submodule <a name="`lightsailLoadBalancer` Submodule" id="@cdktn/provider-awscc.lightsailLoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailLoadBalancer <a name="LightsailLoadBalancer" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer awscc_lightsail_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_load_balancer

lightsailLoadBalancer.LightsailLoadBalancer(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_port: typing.Union[int, float],
  load_balancer_name: str,
  attached_instances: typing.List[str] = None,
  health_check_path: str = None,
  ip_address_type: str = None,
  session_stickiness_enabled: bool | IResolvable = None,
  session_stickiness_lb_cookie_duration_seconds: str = None,
  tags: IResolvable | typing.List[LightsailLoadBalancerTags] = None,
  tls_policy_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.instancePort">instance_port</a></code> | <code>typing.Union[int, float]</code> | The instance port where you're creating your load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.loadBalancerName">load_balancer_name</a></code> | <code>str</code> | The name of your load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.attachedInstances">attached_instances</a></code> | <code>typing.List[str]</code> | The names of the instances attached to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.healthCheckPath">health_check_path</a></code> | <code>str</code> | The path you provided to perform the load balancer health check. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.ipAddressType">ip_address_type</a></code> | <code>str</code> | The IP address type for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.sessionStickinessEnabled">session_stickiness_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Configuration option to enable session stickiness. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.sessionStickinessLbCookieDurationSeconds">session_stickiness_lb_cookie_duration_seconds</a></code> | <code>str</code> | Configuration option to adjust session stickiness cookie duration parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.tlsPolicyName">tls_policy_name</a></code> | <code>str</code> | The name of the TLS policy to apply to the load balancer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_port`<sup>Required</sup> <a name="instance_port" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.instancePort"></a>

- *Type:* typing.Union[int, float]

The instance port where you're creating your load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#instance_port LightsailLoadBalancer#instance_port}

---

##### `load_balancer_name`<sup>Required</sup> <a name="load_balancer_name" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.loadBalancerName"></a>

- *Type:* str

The name of your load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#load_balancer_name LightsailLoadBalancer#load_balancer_name}

---

##### `attached_instances`<sup>Optional</sup> <a name="attached_instances" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.attachedInstances"></a>

- *Type:* typing.List[str]

The names of the instances attached to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#attached_instances LightsailLoadBalancer#attached_instances}

---

##### `health_check_path`<sup>Optional</sup> <a name="health_check_path" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.healthCheckPath"></a>

- *Type:* str

The path you provided to perform the load balancer health check.

If you didn't specify a health check path, Lightsail uses the root path of your website (e.g., "/").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#health_check_path LightsailLoadBalancer#health_check_path}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.ipAddressType"></a>

- *Type:* str

The IP address type for the load balancer.

The possible values are ipv4 for IPv4 only, and dualstack for IPv4 and IPv6. The default value is dualstack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#ip_address_type LightsailLoadBalancer#ip_address_type}

---

##### `session_stickiness_enabled`<sup>Optional</sup> <a name="session_stickiness_enabled" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.sessionStickinessEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Configuration option to enable session stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#session_stickiness_enabled LightsailLoadBalancer#session_stickiness_enabled}

---

##### `session_stickiness_lb_cookie_duration_seconds`<sup>Optional</sup> <a name="session_stickiness_lb_cookie_duration_seconds" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.sessionStickinessLbCookieDurationSeconds"></a>

- *Type:* str

Configuration option to adjust session stickiness cookie duration parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#session_stickiness_lb_cookie_duration_seconds LightsailLoadBalancer#session_stickiness_lb_cookie_duration_seconds}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#tags LightsailLoadBalancer#tags}

---

##### `tls_policy_name`<sup>Optional</sup> <a name="tls_policy_name" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.tlsPolicyName"></a>

- *Type:* str

The name of the TLS policy to apply to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#tls_policy_name LightsailLoadBalancer#tls_policy_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetAttachedInstances">reset_attached_instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetHealthCheckPath">reset_health_check_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetSessionStickinessEnabled">reset_session_stickiness_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetSessionStickinessLbCookieDurationSeconds">reset_session_stickiness_lb_cookie_duration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetTlsPolicyName">reset_tls_policy_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LightsailLoadBalancerTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>]

---

##### `reset_attached_instances` <a name="reset_attached_instances" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetAttachedInstances"></a>

```python
def reset_attached_instances() -> None
```

##### `reset_health_check_path` <a name="reset_health_check_path" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetHealthCheckPath"></a>

```python
def reset_health_check_path() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_session_stickiness_enabled` <a name="reset_session_stickiness_enabled" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetSessionStickinessEnabled"></a>

```python
def reset_session_stickiness_enabled() -> None
```

##### `reset_session_stickiness_lb_cookie_duration_seconds` <a name="reset_session_stickiness_lb_cookie_duration_seconds" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetSessionStickinessLbCookieDurationSeconds"></a>

```python
def reset_session_stickiness_lb_cookie_duration_seconds() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tls_policy_name` <a name="reset_tls_policy_name" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetTlsPolicyName"></a>

```python
def reset_tls_policy_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LightsailLoadBalancer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isConstruct"></a>

```python
from cdktn_provider_awscc import lightsail_load_balancer

lightsailLoadBalancer.LightsailLoadBalancer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lightsail_load_balancer

lightsailLoadBalancer.LightsailLoadBalancer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lightsail_load_balancer

lightsailLoadBalancer.LightsailLoadBalancer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lightsail_load_balancer

lightsailLoadBalancer.LightsailLoadBalancer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LightsailLoadBalancer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LightsailLoadBalancer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LightsailLoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LightsailLoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.loadBalancerArn">load_balancer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList">LightsailLoadBalancerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.attachedInstancesInput">attached_instances_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.healthCheckPathInput">health_check_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.instancePortInput">instance_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.loadBalancerNameInput">load_balancer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessEnabledInput">session_stickiness_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessLbCookieDurationSecondsInput">session_stickiness_lb_cookie_duration_seconds_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tlsPolicyNameInput">tls_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.attachedInstances">attached_instances</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.instancePort">instance_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.loadBalancerName">load_balancer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessEnabled">session_stickiness_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessLbCookieDurationSeconds">session_stickiness_lb_cookie_duration_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tlsPolicyName">tls_policy_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer_arn`<sup>Required</sup> <a name="load_balancer_arn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.loadBalancerArn"></a>

```python
load_balancer_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tags"></a>

```python
tags: LightsailLoadBalancerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList">LightsailLoadBalancerTagsList</a>

---

##### `attached_instances_input`<sup>Optional</sup> <a name="attached_instances_input" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.attachedInstancesInput"></a>

```python
attached_instances_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `health_check_path_input`<sup>Optional</sup> <a name="health_check_path_input" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.healthCheckPathInput"></a>

```python
health_check_path_input: str
```

- *Type:* str

---

##### `instance_port_input`<sup>Optional</sup> <a name="instance_port_input" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.instancePortInput"></a>

```python
instance_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `load_balancer_name_input`<sup>Optional</sup> <a name="load_balancer_name_input" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.loadBalancerNameInput"></a>

```python
load_balancer_name_input: str
```

- *Type:* str

---

##### `session_stickiness_enabled_input`<sup>Optional</sup> <a name="session_stickiness_enabled_input" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessEnabledInput"></a>

```python
session_stickiness_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `session_stickiness_lb_cookie_duration_seconds_input`<sup>Optional</sup> <a name="session_stickiness_lb_cookie_duration_seconds_input" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessLbCookieDurationSecondsInput"></a>

```python
session_stickiness_lb_cookie_duration_seconds_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LightsailLoadBalancerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>]

---

##### `tls_policy_name_input`<sup>Optional</sup> <a name="tls_policy_name_input" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tlsPolicyNameInput"></a>

```python
tls_policy_name_input: str
```

- *Type:* str

---

##### `attached_instances`<sup>Required</sup> <a name="attached_instances" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.attachedInstances"></a>

```python
attached_instances: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `health_check_path`<sup>Required</sup> <a name="health_check_path" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

---

##### `instance_port`<sup>Required</sup> <a name="instance_port" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.instancePort"></a>

```python
instance_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `load_balancer_name`<sup>Required</sup> <a name="load_balancer_name" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.loadBalancerName"></a>

```python
load_balancer_name: str
```

- *Type:* str

---

##### `session_stickiness_enabled`<sup>Required</sup> <a name="session_stickiness_enabled" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessEnabled"></a>

```python
session_stickiness_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `session_stickiness_lb_cookie_duration_seconds`<sup>Required</sup> <a name="session_stickiness_lb_cookie_duration_seconds" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessLbCookieDurationSeconds"></a>

```python
session_stickiness_lb_cookie_duration_seconds: str
```

- *Type:* str

---

##### `tls_policy_name`<sup>Required</sup> <a name="tls_policy_name" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tlsPolicyName"></a>

```python
tls_policy_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailLoadBalancerConfig <a name="LightsailLoadBalancerConfig" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_load_balancer

lightsailLoadBalancer.LightsailLoadBalancerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_port: typing.Union[int, float],
  load_balancer_name: str,
  attached_instances: typing.List[str] = None,
  health_check_path: str = None,
  ip_address_type: str = None,
  session_stickiness_enabled: bool | IResolvable = None,
  session_stickiness_lb_cookie_duration_seconds: str = None,
  tags: IResolvable | typing.List[LightsailLoadBalancerTags] = None,
  tls_policy_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.instancePort">instance_port</a></code> | <code>typing.Union[int, float]</code> | The instance port where you're creating your load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.loadBalancerName">load_balancer_name</a></code> | <code>str</code> | The name of your load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.attachedInstances">attached_instances</a></code> | <code>typing.List[str]</code> | The names of the instances attached to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | The path you provided to perform the load balancer health check. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | The IP address type for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.sessionStickinessEnabled">session_stickiness_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Configuration option to enable session stickiness. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.sessionStickinessLbCookieDurationSeconds">session_stickiness_lb_cookie_duration_seconds</a></code> | <code>str</code> | Configuration option to adjust session stickiness cookie duration parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.tlsPolicyName">tls_policy_name</a></code> | <code>str</code> | The name of the TLS policy to apply to the load balancer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_port`<sup>Required</sup> <a name="instance_port" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.instancePort"></a>

```python
instance_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The instance port where you're creating your load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#instance_port LightsailLoadBalancer#instance_port}

---

##### `load_balancer_name`<sup>Required</sup> <a name="load_balancer_name" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.loadBalancerName"></a>

```python
load_balancer_name: str
```

- *Type:* str

The name of your load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#load_balancer_name LightsailLoadBalancer#load_balancer_name}

---

##### `attached_instances`<sup>Optional</sup> <a name="attached_instances" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.attachedInstances"></a>

```python
attached_instances: typing.List[str]
```

- *Type:* typing.List[str]

The names of the instances attached to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#attached_instances LightsailLoadBalancer#attached_instances}

---

##### `health_check_path`<sup>Optional</sup> <a name="health_check_path" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

The path you provided to perform the load balancer health check.

If you didn't specify a health check path, Lightsail uses the root path of your website (e.g., "/").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#health_check_path LightsailLoadBalancer#health_check_path}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

The IP address type for the load balancer.

The possible values are ipv4 for IPv4 only, and dualstack for IPv4 and IPv6. The default value is dualstack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#ip_address_type LightsailLoadBalancer#ip_address_type}

---

##### `session_stickiness_enabled`<sup>Optional</sup> <a name="session_stickiness_enabled" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.sessionStickinessEnabled"></a>

```python
session_stickiness_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Configuration option to enable session stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#session_stickiness_enabled LightsailLoadBalancer#session_stickiness_enabled}

---

##### `session_stickiness_lb_cookie_duration_seconds`<sup>Optional</sup> <a name="session_stickiness_lb_cookie_duration_seconds" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.sessionStickinessLbCookieDurationSeconds"></a>

```python
session_stickiness_lb_cookie_duration_seconds: str
```

- *Type:* str

Configuration option to adjust session stickiness cookie duration parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#session_stickiness_lb_cookie_duration_seconds LightsailLoadBalancer#session_stickiness_lb_cookie_duration_seconds}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LightsailLoadBalancerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#tags LightsailLoadBalancer#tags}

---

##### `tls_policy_name`<sup>Optional</sup> <a name="tls_policy_name" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.tlsPolicyName"></a>

```python
tls_policy_name: str
```

- *Type:* str

The name of the TLS policy to apply to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#tls_policy_name LightsailLoadBalancer#tls_policy_name}

---

### LightsailLoadBalancerTags <a name="LightsailLoadBalancerTags" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_load_balancer

lightsailLoadBalancer.LightsailLoadBalancerTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#key LightsailLoadBalancer#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/lightsail_load_balancer#value LightsailLoadBalancer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailLoadBalancerTagsList <a name="LightsailLoadBalancerTagsList" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_load_balancer

lightsailLoadBalancer.LightsailLoadBalancerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailLoadBalancerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LightsailLoadBalancerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>]

---


### LightsailLoadBalancerTagsOutputReference <a name="LightsailLoadBalancerTagsOutputReference" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_load_balancer

lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailLoadBalancerTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>

---



