# `elasticloadbalancingv2TargetGroup` Submodule <a name="`elasticloadbalancingv2TargetGroup` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticloadbalancingv2TargetGroup <a name="Elasticloadbalancingv2TargetGroup" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group awscc_elasticloadbalancingv2_target_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_target_group

elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  health_check_enabled: bool | IResolvable = None,
  health_check_interval_seconds: typing.Union[int, float] = None,
  health_check_path: str = None,
  health_check_port: str = None,
  health_check_protocol: str = None,
  health_check_timeout_seconds: typing.Union[int, float] = None,
  healthy_threshold_count: typing.Union[int, float] = None,
  ip_address_type: str = None,
  matcher: Elasticloadbalancingv2TargetGroupMatcher = None,
  name: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  protocol_version: str = None,
  tags: IResolvable | typing.List[Elasticloadbalancingv2TargetGroupTags] = None,
  target_control_port: typing.Union[int, float] = None,
  target_group_attributes: IResolvable | typing.List[Elasticloadbalancingv2TargetGroupTargetGroupAttributes] = None,
  targets: IResolvable | typing.List[Elasticloadbalancingv2TargetGroupTargets] = None,
  target_type: str = None,
  unhealthy_threshold_count: typing.Union[int, float] = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckEnabled">health_check_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether health checks are enabled. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckIntervalSeconds">health_check_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The approximate amount of time, in seconds, between health checks of an individual target. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckPath">health_check_path</a></code> | <code>str</code> | [HTTP/HTTPS health checks] The destination for health checks on the targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckPort">health_check_port</a></code> | <code>str</code> | The port the load balancer uses when performing health checks on targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckProtocol">health_check_protocol</a></code> | <code>str</code> | The protocol the load balancer uses when performing health checks on targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckTimeoutSeconds">health_check_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in seconds, during which no response from a target means a failed health check. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthyThresholdCount">healthy_threshold_count</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive health checks successes required before considering an unhealthy target healthy. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.ipAddressType">ip_address_type</a></code> | <code>str</code> | The type of IP address used for this target group. The possible values are ipv4 and ipv6. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.matcher">matcher</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a></code> | [HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The port on which the targets receive traffic. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | The protocol to use for routing traffic to the targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.protocolVersion">protocol_version</a></code> | <code>str</code> | [HTTP/HTTPS protocol] The protocol version. The possible values are GRPC, HTTP1, and HTTP2. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>]</code> | The tags. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.targetControlPort">target_control_port</a></code> | <code>typing.Union[int, float]</code> | The port that the target control agent uses to communicate the available capacity of targets to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.targetGroupAttributes">target_group_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>]</code> | The attributes. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>]</code> | The targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.targetType">target_type</a></code> | <code>str</code> | The type of target that you must specify when registering targets with this target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.unhealthyThresholdCount">unhealthy_threshold_count</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive health check failures required before considering a target unhealthy. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | The identifier of the virtual private cloud (VPC). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `health_check_enabled`<sup>Optional</sup> <a name="health_check_enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether health checks are enabled.

If the target type is lambda, health checks are disabled by default but can be enabled. If the target type is instance, ip, or alb, health checks are always enabled and cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#health_check_enabled Elasticloadbalancingv2TargetGroup#health_check_enabled}

---

##### `health_check_interval_seconds`<sup>Optional</sup> <a name="health_check_interval_seconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

The approximate amount of time, in seconds, between health checks of an individual target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#health_check_interval_seconds Elasticloadbalancingv2TargetGroup#health_check_interval_seconds}

---

##### `health_check_path`<sup>Optional</sup> <a name="health_check_path" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckPath"></a>

- *Type:* str

[HTTP/HTTPS health checks] The destination for health checks on the targets.

[HTTP1 or HTTP2 protocol version] The ping path. The default is /. [GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /AWS.ALB/healthcheck.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#health_check_path Elasticloadbalancingv2TargetGroup#health_check_path}

---

##### `health_check_port`<sup>Optional</sup> <a name="health_check_port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckPort"></a>

- *Type:* str

The port the load balancer uses when performing health checks on targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#health_check_port Elasticloadbalancingv2TargetGroup#health_check_port}

---

##### `health_check_protocol`<sup>Optional</sup> <a name="health_check_protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckProtocol"></a>

- *Type:* str

The protocol the load balancer uses when performing health checks on targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#health_check_protocol Elasticloadbalancingv2TargetGroup#health_check_protocol}

---

##### `health_check_timeout_seconds`<sup>Optional</sup> <a name="health_check_timeout_seconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

The amount of time, in seconds, during which no response from a target means a failed health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#health_check_timeout_seconds Elasticloadbalancingv2TargetGroup#health_check_timeout_seconds}

---

##### `healthy_threshold_count`<sup>Optional</sup> <a name="healthy_threshold_count" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthyThresholdCount"></a>

- *Type:* typing.Union[int, float]

The number of consecutive health checks successes required before considering an unhealthy target healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#healthy_threshold_count Elasticloadbalancingv2TargetGroup#healthy_threshold_count}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.ipAddressType"></a>

- *Type:* str

The type of IP address used for this target group. The possible values are ipv4 and ipv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#ip_address_type Elasticloadbalancingv2TargetGroup#ip_address_type}

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.matcher"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a>

[HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#matcher Elasticloadbalancingv2TargetGroup#matcher}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.name"></a>

- *Type:* str

The name of the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#name Elasticloadbalancingv2TargetGroup#name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port on which the targets receive traffic.

This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#port Elasticloadbalancingv2TargetGroup#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.protocol"></a>

- *Type:* str

The protocol to use for routing traffic to the targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#protocol Elasticloadbalancingv2TargetGroup#protocol}

---

##### `protocol_version`<sup>Optional</sup> <a name="protocol_version" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.protocolVersion"></a>

- *Type:* str

[HTTP/HTTPS protocol] The protocol version. The possible values are GRPC, HTTP1, and HTTP2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#protocol_version Elasticloadbalancingv2TargetGroup#protocol_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>]

The tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#tags Elasticloadbalancingv2TargetGroup#tags}

---

##### `target_control_port`<sup>Optional</sup> <a name="target_control_port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.targetControlPort"></a>

- *Type:* typing.Union[int, float]

The port that the target control agent uses to communicate the available capacity of targets to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#target_control_port Elasticloadbalancingv2TargetGroup#target_control_port}

---

##### `target_group_attributes`<sup>Optional</sup> <a name="target_group_attributes" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.targetGroupAttributes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>]

The attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#target_group_attributes Elasticloadbalancingv2TargetGroup#target_group_attributes}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.targets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>]

The targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#targets Elasticloadbalancingv2TargetGroup#targets}

---

##### `target_type`<sup>Optional</sup> <a name="target_type" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.targetType"></a>

- *Type:* str

The type of target that you must specify when registering targets with this target group.

You can't specify targets for a target group using more than one target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#target_type Elasticloadbalancingv2TargetGroup#target_type}

---

##### `unhealthy_threshold_count`<sup>Optional</sup> <a name="unhealthy_threshold_count" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.unhealthyThresholdCount"></a>

- *Type:* typing.Union[int, float]

The number of consecutive health check failures required before considering a target unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#unhealthy_threshold_count Elasticloadbalancingv2TargetGroup#unhealthy_threshold_count}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.vpcId"></a>

- *Type:* str

The identifier of the virtual private cloud (VPC).

If the target is a Lambda function, this parameter does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#vpc_id Elasticloadbalancingv2TargetGroup#vpc_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putMatcher">put_matcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTargetGroupAttributes">put_target_group_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTargets">put_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckEnabled">reset_health_check_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckIntervalSeconds">reset_health_check_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckPath">reset_health_check_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckPort">reset_health_check_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckProtocol">reset_health_check_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckTimeoutSeconds">reset_health_check_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthyThresholdCount">reset_healthy_threshold_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetMatcher">reset_matcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetProtocolVersion">reset_protocol_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargetControlPort">reset_target_control_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargetGroupAttributes">reset_target_group_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargets">reset_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargetType">reset_target_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetUnhealthyThresholdCount">reset_unhealthy_threshold_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_matcher` <a name="put_matcher" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putMatcher"></a>

```python
def put_matcher(
  grpc_code: str = None,
  http_code: str = None
) -> None
```

###### `grpc_code`<sup>Optional</sup> <a name="grpc_code" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putMatcher.parameter.grpcCode"></a>

- *Type:* str

You can specify values between 0 and 99.

You can specify multiple values, or a range of values. The default value is 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#grpc_code Elasticloadbalancingv2TargetGroup#grpc_code}

---

###### `http_code`<sup>Optional</sup> <a name="http_code" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putMatcher.parameter.httpCode"></a>

- *Type:* str

For Application Load Balancers, you can specify values between 200 and 499, and the default value is 200.

You can specify multiple values or a range of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#http_code Elasticloadbalancingv2TargetGroup#http_code}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Elasticloadbalancingv2TargetGroupTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>]

---

##### `put_target_group_attributes` <a name="put_target_group_attributes" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTargetGroupAttributes"></a>

```python
def put_target_group_attributes(
  value: IResolvable | typing.List[Elasticloadbalancingv2TargetGroupTargetGroupAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTargetGroupAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>]

---

##### `put_targets` <a name="put_targets" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTargets"></a>

```python
def put_targets(
  value: IResolvable | typing.List[Elasticloadbalancingv2TargetGroupTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>]

---

##### `reset_health_check_enabled` <a name="reset_health_check_enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckEnabled"></a>

```python
def reset_health_check_enabled() -> None
```

##### `reset_health_check_interval_seconds` <a name="reset_health_check_interval_seconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckIntervalSeconds"></a>

```python
def reset_health_check_interval_seconds() -> None
```

##### `reset_health_check_path` <a name="reset_health_check_path" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckPath"></a>

```python
def reset_health_check_path() -> None
```

##### `reset_health_check_port` <a name="reset_health_check_port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckPort"></a>

```python
def reset_health_check_port() -> None
```

##### `reset_health_check_protocol` <a name="reset_health_check_protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckProtocol"></a>

```python
def reset_health_check_protocol() -> None
```

##### `reset_health_check_timeout_seconds` <a name="reset_health_check_timeout_seconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckTimeoutSeconds"></a>

```python
def reset_health_check_timeout_seconds() -> None
```

##### `reset_healthy_threshold_count` <a name="reset_healthy_threshold_count" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthyThresholdCount"></a>

```python
def reset_healthy_threshold_count() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_matcher` <a name="reset_matcher" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetMatcher"></a>

```python
def reset_matcher() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_protocol_version` <a name="reset_protocol_version" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetProtocolVersion"></a>

```python
def reset_protocol_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_control_port` <a name="reset_target_control_port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargetControlPort"></a>

```python
def reset_target_control_port() -> None
```

##### `reset_target_group_attributes` <a name="reset_target_group_attributes" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargetGroupAttributes"></a>

```python
def reset_target_group_attributes() -> None
```

##### `reset_targets` <a name="reset_targets" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargets"></a>

```python
def reset_targets() -> None
```

##### `reset_target_type` <a name="reset_target_type" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargetType"></a>

```python
def reset_target_type() -> None
```

##### `reset_unhealthy_threshold_count` <a name="reset_unhealthy_threshold_count" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetUnhealthyThresholdCount"></a>

```python
def reset_unhealthy_threshold_count() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Elasticloadbalancingv2TargetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_target_group

elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_target_group

elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_target_group

elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_target_group

elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Elasticloadbalancingv2TargetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Elasticloadbalancingv2TargetGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Elasticloadbalancingv2TargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Elasticloadbalancingv2TargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.loadBalancerArns">load_balancer_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.matcher">matcher</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference">Elasticloadbalancingv2TargetGroupMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList">Elasticloadbalancingv2TargetGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupAttributes">target_group_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList">Elasticloadbalancingv2TargetGroupTargetGroupAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupFullName">target_group_full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupName">target_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList">Elasticloadbalancingv2TargetGroupTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckEnabledInput">health_check_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckIntervalSecondsInput">health_check_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPathInput">health_check_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPortInput">health_check_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckProtocolInput">health_check_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckTimeoutSecondsInput">health_check_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthyThresholdCountInput">healthy_threshold_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.matcherInput">matcher_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocolVersionInput">protocol_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetControlPortInput">target_control_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupAttributesInput">target_group_attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetsInput">targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetTypeInput">target_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.unhealthyThresholdCountInput">unhealthy_threshold_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckEnabled">health_check_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckIntervalSeconds">health_check_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPort">health_check_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckProtocol">health_check_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckTimeoutSeconds">health_check_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthyThresholdCount">healthy_threshold_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocolVersion">protocol_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetControlPort">target_control_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.unhealthyThresholdCount">unhealthy_threshold_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer_arns`<sup>Required</sup> <a name="load_balancer_arns" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.loadBalancerArns"></a>

```python
load_balancer_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.matcher"></a>

```python
matcher: Elasticloadbalancingv2TargetGroupMatcherOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference">Elasticloadbalancingv2TargetGroupMatcherOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.tags"></a>

```python
tags: Elasticloadbalancingv2TargetGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList">Elasticloadbalancingv2TargetGroupTagsList</a>

---

##### `target_group_arn`<sup>Required</sup> <a name="target_group_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

---

##### `target_group_attributes`<sup>Required</sup> <a name="target_group_attributes" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupAttributes"></a>

```python
target_group_attributes: Elasticloadbalancingv2TargetGroupTargetGroupAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList">Elasticloadbalancingv2TargetGroupTargetGroupAttributesList</a>

---

##### `target_group_full_name`<sup>Required</sup> <a name="target_group_full_name" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupFullName"></a>

```python
target_group_full_name: str
```

- *Type:* str

---

##### `target_group_name`<sup>Required</sup> <a name="target_group_name" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupName"></a>

```python
target_group_name: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targets"></a>

```python
targets: Elasticloadbalancingv2TargetGroupTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList">Elasticloadbalancingv2TargetGroupTargetsList</a>

---

##### `health_check_enabled_input`<sup>Optional</sup> <a name="health_check_enabled_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckEnabledInput"></a>

```python
health_check_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `health_check_interval_seconds_input`<sup>Optional</sup> <a name="health_check_interval_seconds_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckIntervalSecondsInput"></a>

```python
health_check_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_path_input`<sup>Optional</sup> <a name="health_check_path_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPathInput"></a>

```python
health_check_path_input: str
```

- *Type:* str

---

##### `health_check_port_input`<sup>Optional</sup> <a name="health_check_port_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPortInput"></a>

```python
health_check_port_input: str
```

- *Type:* str

---

##### `health_check_protocol_input`<sup>Optional</sup> <a name="health_check_protocol_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckProtocolInput"></a>

```python
health_check_protocol_input: str
```

- *Type:* str

---

##### `health_check_timeout_seconds_input`<sup>Optional</sup> <a name="health_check_timeout_seconds_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckTimeoutSecondsInput"></a>

```python
health_check_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `healthy_threshold_count_input`<sup>Optional</sup> <a name="healthy_threshold_count_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthyThresholdCountInput"></a>

```python
healthy_threshold_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `matcher_input`<sup>Optional</sup> <a name="matcher_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.matcherInput"></a>

```python
matcher_input: IResolvable | Elasticloadbalancingv2TargetGroupMatcher
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `protocol_version_input`<sup>Optional</sup> <a name="protocol_version_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocolVersionInput"></a>

```python
protocol_version_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Elasticloadbalancingv2TargetGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>]

---

##### `target_control_port_input`<sup>Optional</sup> <a name="target_control_port_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetControlPortInput"></a>

```python
target_control_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_group_attributes_input`<sup>Optional</sup> <a name="target_group_attributes_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupAttributesInput"></a>

```python
target_group_attributes_input: IResolvable | typing.List[Elasticloadbalancingv2TargetGroupTargetGroupAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>]

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetsInput"></a>

```python
targets_input: IResolvable | typing.List[Elasticloadbalancingv2TargetGroupTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>]

---

##### `target_type_input`<sup>Optional</sup> <a name="target_type_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetTypeInput"></a>

```python
target_type_input: str
```

- *Type:* str

---

##### `unhealthy_threshold_count_input`<sup>Optional</sup> <a name="unhealthy_threshold_count_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.unhealthyThresholdCountInput"></a>

```python
unhealthy_threshold_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `health_check_enabled`<sup>Required</sup> <a name="health_check_enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckEnabled"></a>

```python
health_check_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `health_check_interval_seconds`<sup>Required</sup> <a name="health_check_interval_seconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckIntervalSeconds"></a>

```python
health_check_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_path`<sup>Required</sup> <a name="health_check_path" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

---

##### `health_check_port`<sup>Required</sup> <a name="health_check_port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPort"></a>

```python
health_check_port: str
```

- *Type:* str

---

##### `health_check_protocol`<sup>Required</sup> <a name="health_check_protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckProtocol"></a>

```python
health_check_protocol: str
```

- *Type:* str

---

##### `health_check_timeout_seconds`<sup>Required</sup> <a name="health_check_timeout_seconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckTimeoutSeconds"></a>

```python
health_check_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `healthy_threshold_count`<sup>Required</sup> <a name="healthy_threshold_count" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthyThresholdCount"></a>

```python
healthy_threshold_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `protocol_version`<sup>Required</sup> <a name="protocol_version" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocolVersion"></a>

```python
protocol_version: str
```

- *Type:* str

---

##### `target_control_port`<sup>Required</sup> <a name="target_control_port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetControlPort"></a>

```python
target_control_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

##### `unhealthy_threshold_count`<sup>Required</sup> <a name="unhealthy_threshold_count" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.unhealthyThresholdCount"></a>

```python
unhealthy_threshold_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Elasticloadbalancingv2TargetGroupConfig <a name="Elasticloadbalancingv2TargetGroupConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_target_group

elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  health_check_enabled: bool | IResolvable = None,
  health_check_interval_seconds: typing.Union[int, float] = None,
  health_check_path: str = None,
  health_check_port: str = None,
  health_check_protocol: str = None,
  health_check_timeout_seconds: typing.Union[int, float] = None,
  healthy_threshold_count: typing.Union[int, float] = None,
  ip_address_type: str = None,
  matcher: Elasticloadbalancingv2TargetGroupMatcher = None,
  name: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  protocol_version: str = None,
  tags: IResolvable | typing.List[Elasticloadbalancingv2TargetGroupTags] = None,
  target_control_port: typing.Union[int, float] = None,
  target_group_attributes: IResolvable | typing.List[Elasticloadbalancingv2TargetGroupTargetGroupAttributes] = None,
  targets: IResolvable | typing.List[Elasticloadbalancingv2TargetGroupTargets] = None,
  target_type: str = None,
  unhealthy_threshold_count: typing.Union[int, float] = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckEnabled">health_check_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether health checks are enabled. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckIntervalSeconds">health_check_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The approximate amount of time, in seconds, between health checks of an individual target. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | [HTTP/HTTPS health checks] The destination for health checks on the targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckPort">health_check_port</a></code> | <code>str</code> | The port the load balancer uses when performing health checks on targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckProtocol">health_check_protocol</a></code> | <code>str</code> | The protocol the load balancer uses when performing health checks on targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckTimeoutSeconds">health_check_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in seconds, during which no response from a target means a failed health check. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthyThresholdCount">healthy_threshold_count</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive health checks successes required before considering an unhealthy target healthy. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | The type of IP address used for this target group. The possible values are ipv4 and ipv6. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.matcher">matcher</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a></code> | [HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.name">name</a></code> | <code>str</code> | The name of the target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port on which the targets receive traffic. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.protocol">protocol</a></code> | <code>str</code> | The protocol to use for routing traffic to the targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.protocolVersion">protocol_version</a></code> | <code>str</code> | [HTTP/HTTPS protocol] The protocol version. The possible values are GRPC, HTTP1, and HTTP2. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>]</code> | The tags. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targetControlPort">target_control_port</a></code> | <code>typing.Union[int, float]</code> | The port that the target control agent uses to communicate the available capacity of targets to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targetGroupAttributes">target_group_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>]</code> | The attributes. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>]</code> | The targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targetType">target_type</a></code> | <code>str</code> | The type of target that you must specify when registering targets with this target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.unhealthyThresholdCount">unhealthy_threshold_count</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive health check failures required before considering a target unhealthy. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | The identifier of the virtual private cloud (VPC). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `health_check_enabled`<sup>Optional</sup> <a name="health_check_enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckEnabled"></a>

```python
health_check_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether health checks are enabled.

If the target type is lambda, health checks are disabled by default but can be enabled. If the target type is instance, ip, or alb, health checks are always enabled and cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#health_check_enabled Elasticloadbalancingv2TargetGroup#health_check_enabled}

---

##### `health_check_interval_seconds`<sup>Optional</sup> <a name="health_check_interval_seconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckIntervalSeconds"></a>

```python
health_check_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The approximate amount of time, in seconds, between health checks of an individual target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#health_check_interval_seconds Elasticloadbalancingv2TargetGroup#health_check_interval_seconds}

---

##### `health_check_path`<sup>Optional</sup> <a name="health_check_path" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

[HTTP/HTTPS health checks] The destination for health checks on the targets.

[HTTP1 or HTTP2 protocol version] The ping path. The default is /. [GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /AWS.ALB/healthcheck.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#health_check_path Elasticloadbalancingv2TargetGroup#health_check_path}

---

##### `health_check_port`<sup>Optional</sup> <a name="health_check_port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckPort"></a>

```python
health_check_port: str
```

- *Type:* str

The port the load balancer uses when performing health checks on targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#health_check_port Elasticloadbalancingv2TargetGroup#health_check_port}

---

##### `health_check_protocol`<sup>Optional</sup> <a name="health_check_protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckProtocol"></a>

```python
health_check_protocol: str
```

- *Type:* str

The protocol the load balancer uses when performing health checks on targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#health_check_protocol Elasticloadbalancingv2TargetGroup#health_check_protocol}

---

##### `health_check_timeout_seconds`<sup>Optional</sup> <a name="health_check_timeout_seconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckTimeoutSeconds"></a>

```python
health_check_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time, in seconds, during which no response from a target means a failed health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#health_check_timeout_seconds Elasticloadbalancingv2TargetGroup#health_check_timeout_seconds}

---

##### `healthy_threshold_count`<sup>Optional</sup> <a name="healthy_threshold_count" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthyThresholdCount"></a>

```python
healthy_threshold_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive health checks successes required before considering an unhealthy target healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#healthy_threshold_count Elasticloadbalancingv2TargetGroup#healthy_threshold_count}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

The type of IP address used for this target group. The possible values are ipv4 and ipv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#ip_address_type Elasticloadbalancingv2TargetGroup#ip_address_type}

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.matcher"></a>

```python
matcher: Elasticloadbalancingv2TargetGroupMatcher
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a>

[HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#matcher Elasticloadbalancingv2TargetGroup#matcher}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#name Elasticloadbalancingv2TargetGroup#name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port on which the targets receive traffic.

This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#port Elasticloadbalancingv2TargetGroup#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The protocol to use for routing traffic to the targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#protocol Elasticloadbalancingv2TargetGroup#protocol}

---

##### `protocol_version`<sup>Optional</sup> <a name="protocol_version" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.protocolVersion"></a>

```python
protocol_version: str
```

- *Type:* str

[HTTP/HTTPS protocol] The protocol version. The possible values are GRPC, HTTP1, and HTTP2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#protocol_version Elasticloadbalancingv2TargetGroup#protocol_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Elasticloadbalancingv2TargetGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>]

The tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#tags Elasticloadbalancingv2TargetGroup#tags}

---

##### `target_control_port`<sup>Optional</sup> <a name="target_control_port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targetControlPort"></a>

```python
target_control_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port that the target control agent uses to communicate the available capacity of targets to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#target_control_port Elasticloadbalancingv2TargetGroup#target_control_port}

---

##### `target_group_attributes`<sup>Optional</sup> <a name="target_group_attributes" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targetGroupAttributes"></a>

```python
target_group_attributes: IResolvable | typing.List[Elasticloadbalancingv2TargetGroupTargetGroupAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>]

The attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#target_group_attributes Elasticloadbalancingv2TargetGroup#target_group_attributes}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targets"></a>

```python
targets: IResolvable | typing.List[Elasticloadbalancingv2TargetGroupTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>]

The targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#targets Elasticloadbalancingv2TargetGroup#targets}

---

##### `target_type`<sup>Optional</sup> <a name="target_type" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

The type of target that you must specify when registering targets with this target group.

You can't specify targets for a target group using more than one target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#target_type Elasticloadbalancingv2TargetGroup#target_type}

---

##### `unhealthy_threshold_count`<sup>Optional</sup> <a name="unhealthy_threshold_count" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.unhealthyThresholdCount"></a>

```python
unhealthy_threshold_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive health check failures required before considering a target unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#unhealthy_threshold_count Elasticloadbalancingv2TargetGroup#unhealthy_threshold_count}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

The identifier of the virtual private cloud (VPC).

If the target is a Lambda function, this parameter does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#vpc_id Elasticloadbalancingv2TargetGroup#vpc_id}

---

### Elasticloadbalancingv2TargetGroupMatcher <a name="Elasticloadbalancingv2TargetGroupMatcher" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_target_group

elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher(
  grpc_code: str = None,
  http_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher.property.grpcCode">grpc_code</a></code> | <code>str</code> | You can specify values between 0 and 99. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher.property.httpCode">http_code</a></code> | <code>str</code> | For Application Load Balancers, you can specify values between 200 and 499, and the default value is 200. |

---

##### `grpc_code`<sup>Optional</sup> <a name="grpc_code" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher.property.grpcCode"></a>

```python
grpc_code: str
```

- *Type:* str

You can specify values between 0 and 99.

You can specify multiple values, or a range of values. The default value is 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#grpc_code Elasticloadbalancingv2TargetGroup#grpc_code}

---

##### `http_code`<sup>Optional</sup> <a name="http_code" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher.property.httpCode"></a>

```python
http_code: str
```

- *Type:* str

For Application Load Balancers, you can specify values between 200 and 499, and the default value is 200.

You can specify multiple values or a range of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#http_code Elasticloadbalancingv2TargetGroup#http_code}

---

### Elasticloadbalancingv2TargetGroupTags <a name="Elasticloadbalancingv2TargetGroupTags" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_target_group

elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags.property.key">key</a></code> | <code>str</code> | The value for the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags.property.value">value</a></code> | <code>str</code> | The key name of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags.property.key"></a>

```python
key: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#key Elasticloadbalancingv2TargetGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags.property.value"></a>

```python
value: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#value Elasticloadbalancingv2TargetGroup#value}

---

### Elasticloadbalancingv2TargetGroupTargetGroupAttributes <a name="Elasticloadbalancingv2TargetGroupTargetGroupAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_target_group

elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes.property.key">key</a></code> | <code>str</code> | The value of the attribute. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes.property.value">value</a></code> | <code>str</code> | The name of the attribute. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes.property.key"></a>

```python
key: str
```

- *Type:* str

The value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#key Elasticloadbalancingv2TargetGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

The name of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#value Elasticloadbalancingv2TargetGroup#value}

---

### Elasticloadbalancingv2TargetGroupTargets <a name="Elasticloadbalancingv2TargetGroupTargets" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_target_group

elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets(
  availability_zone: str = None,
  id: str = None,
  port: typing.Union[int, float] = None,
  quic_server_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.availabilityZone">availability_zone</a></code> | <code>str</code> | An Availability Zone or all. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.id">id</a></code> | <code>str</code> | The ID of the target. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port on which the target is listening. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.quicServerId">quic_server_id</a></code> | <code>str</code> | The Server ID used by targets when using QUIC or TCP_QUIC protocols. |

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

An Availability Zone or all.

This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#availability_zone Elasticloadbalancingv2TargetGroup#availability_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the target.

If the target type of the target group is instance, specify an instance ID. If the target type is ip, specify an IP address. If the target type is lambda, specify the ARN of the Lambda function. If the target type is alb, specify the ARN of the Application Load Balancer target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#id Elasticloadbalancingv2TargetGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port on which the target is listening.

If the target group protocol is GENEVE, the supported port is 6081. If the target type is alb, the targeted Application Load Balancer must have at least one listener whose port matches the target group port. Not used if the target is a Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#port Elasticloadbalancingv2TargetGroup#port}

---

##### `quic_server_id`<sup>Optional</sup> <a name="quic_server_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.quicServerId"></a>

```python
quic_server_id: str
```

- *Type:* str

The Server ID used by targets when using QUIC or TCP_QUIC protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_target_group#quic_server_id Elasticloadbalancingv2TargetGroup#quic_server_id}

---

## Classes <a name="Classes" id="Classes"></a>

### Elasticloadbalancingv2TargetGroupMatcherOutputReference <a name="Elasticloadbalancingv2TargetGroupMatcherOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_target_group

elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resetGrpcCode">reset_grpc_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resetHttpCode">reset_http_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_grpc_code` <a name="reset_grpc_code" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resetGrpcCode"></a>

```python
def reset_grpc_code() -> None
```

##### `reset_http_code` <a name="reset_http_code" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resetHttpCode"></a>

```python
def reset_http_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.grpcCodeInput">grpc_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.httpCodeInput">http_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.grpcCode">grpc_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.httpCode">http_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grpc_code_input`<sup>Optional</sup> <a name="grpc_code_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.grpcCodeInput"></a>

```python
grpc_code_input: str
```

- *Type:* str

---

##### `http_code_input`<sup>Optional</sup> <a name="http_code_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.httpCodeInput"></a>

```python
http_code_input: str
```

- *Type:* str

---

##### `grpc_code`<sup>Required</sup> <a name="grpc_code" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.grpcCode"></a>

```python
grpc_code: str
```

- *Type:* str

---

##### `http_code`<sup>Required</sup> <a name="http_code" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.httpCode"></a>

```python
http_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2TargetGroupMatcher
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a>

---


### Elasticloadbalancingv2TargetGroupTagsList <a name="Elasticloadbalancingv2TargetGroupTagsList" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_target_group

elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2TargetGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2TargetGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>]

---


### Elasticloadbalancingv2TargetGroupTagsOutputReference <a name="Elasticloadbalancingv2TargetGroupTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_target_group

elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2TargetGroupTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>

---


### Elasticloadbalancingv2TargetGroupTargetGroupAttributesList <a name="Elasticloadbalancingv2TargetGroupTargetGroupAttributesList" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_target_group

elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2TargetGroupTargetGroupAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>]

---


### Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference <a name="Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_target_group

elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2TargetGroupTargetGroupAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>

---


### Elasticloadbalancingv2TargetGroupTargetsList <a name="Elasticloadbalancingv2TargetGroupTargetsList" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_target_group

elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2TargetGroupTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2TargetGroupTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>]

---


### Elasticloadbalancingv2TargetGroupTargetsOutputReference <a name="Elasticloadbalancingv2TargetGroupTargetsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_target_group

elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetQuicServerId">reset_quic_server_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_quic_server_id` <a name="reset_quic_server_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetQuicServerId"></a>

```python
def reset_quic_server_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.quicServerIdInput">quic_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.quicServerId">quic_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `quic_server_id_input`<sup>Optional</sup> <a name="quic_server_id_input" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.quicServerIdInput"></a>

```python
quic_server_id_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `quic_server_id`<sup>Required</sup> <a name="quic_server_id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.quicServerId"></a>

```python
quic_server_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2TargetGroupTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>

---



