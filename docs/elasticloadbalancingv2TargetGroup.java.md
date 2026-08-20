# `elasticloadbalancingv2TargetGroup` Submodule <a name="`elasticloadbalancingv2TargetGroup` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticloadbalancingv2TargetGroup <a name="Elasticloadbalancingv2TargetGroup" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group awscc_elasticloadbalancingv2_target_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_target_group.Elasticloadbalancingv2TargetGroup;

Elasticloadbalancingv2TargetGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .healthCheckEnabled(java.lang.Boolean|IResolvable)
//  .healthCheckIntervalSeconds(java.lang.Number)
//  .healthCheckPath(java.lang.String)
//  .healthCheckPort(java.lang.String)
//  .healthCheckProtocol(java.lang.String)
//  .healthCheckTimeoutSeconds(java.lang.Number)
//  .healthyThresholdCount(java.lang.Number)
//  .ipAddressType(java.lang.String)
//  .matcher(Elasticloadbalancingv2TargetGroupMatcher)
//  .name(java.lang.String)
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
//  .protocolVersion(java.lang.String)
//  .tags(IResolvable|java.util.List<Elasticloadbalancingv2TargetGroupTags>)
//  .targetControlPort(java.lang.Number)
//  .targetGroupAttributes(IResolvable|java.util.List<Elasticloadbalancingv2TargetGroupTargetGroupAttributes>)
//  .targets(IResolvable|java.util.List<Elasticloadbalancingv2TargetGroupTargets>)
//  .targetType(java.lang.String)
//  .unhealthyThresholdCount(java.lang.Number)
//  .vpcId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckEnabled">healthCheckEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether health checks are enabled. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckIntervalSeconds">healthCheckIntervalSeconds</a></code> | <code>java.lang.Number</code> | The approximate amount of time, in seconds, between health checks of an individual target. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | [HTTP/HTTPS health checks] The destination for health checks on the targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckPort">healthCheckPort</a></code> | <code>java.lang.String</code> | The port the load balancer uses when performing health checks on targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckProtocol">healthCheckProtocol</a></code> | <code>java.lang.String</code> | The protocol the load balancer uses when performing health checks on targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckTimeoutSeconds">healthCheckTimeoutSeconds</a></code> | <code>java.lang.Number</code> | The amount of time, in seconds, during which no response from a target means a failed health check. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthyThresholdCount">healthyThresholdCount</a></code> | <code>java.lang.Number</code> | The number of consecutive health checks successes required before considering an unhealthy target healthy. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | The type of IP address used for this target group. The possible values are ipv4 and ipv6. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.matcher">matcher</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a></code> | [HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The port on which the targets receive traffic. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | The protocol to use for routing traffic to the targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | [HTTP/HTTPS protocol] The protocol version. The possible values are GRPC, HTTP1, and HTTP2. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>></code> | The tags. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.targetControlPort">targetControlPort</a></code> | <code>java.lang.Number</code> | The port that the target control agent uses to communicate the available capacity of targets to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.targetGroupAttributes">targetGroupAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>></code> | The attributes. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.targets">targets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>></code> | The targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.targetType">targetType</a></code> | <code>java.lang.String</code> | The type of target that you must specify when registering targets with this target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.unhealthyThresholdCount">unhealthyThresholdCount</a></code> | <code>java.lang.Number</code> | The number of consecutive health check failures required before considering a target unhealthy. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The identifier of the virtual private cloud (VPC). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `healthCheckEnabled`<sup>Optional</sup> <a name="healthCheckEnabled" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether health checks are enabled.

If the target type is lambda, health checks are disabled by default but can be enabled. If the target type is instance, ip, or alb, health checks are always enabled and cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#health_check_enabled Elasticloadbalancingv2TargetGroup#health_check_enabled}

---

##### `healthCheckIntervalSeconds`<sup>Optional</sup> <a name="healthCheckIntervalSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckIntervalSeconds"></a>

- *Type:* java.lang.Number

The approximate amount of time, in seconds, between health checks of an individual target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#health_check_interval_seconds Elasticloadbalancingv2TargetGroup#health_check_interval_seconds}

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckPath"></a>

- *Type:* java.lang.String

[HTTP/HTTPS health checks] The destination for health checks on the targets.

[HTTP1 or HTTP2 protocol version] The ping path. The default is /. [GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /AWS.ALB/healthcheck.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#health_check_path Elasticloadbalancingv2TargetGroup#health_check_path}

---

##### `healthCheckPort`<sup>Optional</sup> <a name="healthCheckPort" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckPort"></a>

- *Type:* java.lang.String

The port the load balancer uses when performing health checks on targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#health_check_port Elasticloadbalancingv2TargetGroup#health_check_port}

---

##### `healthCheckProtocol`<sup>Optional</sup> <a name="healthCheckProtocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckProtocol"></a>

- *Type:* java.lang.String

The protocol the load balancer uses when performing health checks on targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#health_check_protocol Elasticloadbalancingv2TargetGroup#health_check_protocol}

---

##### `healthCheckTimeoutSeconds`<sup>Optional</sup> <a name="healthCheckTimeoutSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthCheckTimeoutSeconds"></a>

- *Type:* java.lang.Number

The amount of time, in seconds, during which no response from a target means a failed health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#health_check_timeout_seconds Elasticloadbalancingv2TargetGroup#health_check_timeout_seconds}

---

##### `healthyThresholdCount`<sup>Optional</sup> <a name="healthyThresholdCount" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.healthyThresholdCount"></a>

- *Type:* java.lang.Number

The number of consecutive health checks successes required before considering an unhealthy target healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#healthy_threshold_count Elasticloadbalancingv2TargetGroup#healthy_threshold_count}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.ipAddressType"></a>

- *Type:* java.lang.String

The type of IP address used for this target group. The possible values are ipv4 and ipv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#ip_address_type Elasticloadbalancingv2TargetGroup#ip_address_type}

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.matcher"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a>

[HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#matcher Elasticloadbalancingv2TargetGroup#matcher}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#name Elasticloadbalancingv2TargetGroup#name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The port on which the targets receive traffic.

This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#port Elasticloadbalancingv2TargetGroup#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

The protocol to use for routing traffic to the targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#protocol Elasticloadbalancingv2TargetGroup#protocol}

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.protocolVersion"></a>

- *Type:* java.lang.String

[HTTP/HTTPS protocol] The protocol version. The possible values are GRPC, HTTP1, and HTTP2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#protocol_version Elasticloadbalancingv2TargetGroup#protocol_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>>

The tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#tags Elasticloadbalancingv2TargetGroup#tags}

---

##### `targetControlPort`<sup>Optional</sup> <a name="targetControlPort" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.targetControlPort"></a>

- *Type:* java.lang.Number

The port that the target control agent uses to communicate the available capacity of targets to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#target_control_port Elasticloadbalancingv2TargetGroup#target_control_port}

---

##### `targetGroupAttributes`<sup>Optional</sup> <a name="targetGroupAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.targetGroupAttributes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>>

The attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#target_group_attributes Elasticloadbalancingv2TargetGroup#target_group_attributes}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.targets"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>>

The targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#targets Elasticloadbalancingv2TargetGroup#targets}

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.targetType"></a>

- *Type:* java.lang.String

The type of target that you must specify when registering targets with this target group.

You can't specify targets for a target group using more than one target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#target_type Elasticloadbalancingv2TargetGroup#target_type}

---

##### `unhealthyThresholdCount`<sup>Optional</sup> <a name="unhealthyThresholdCount" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.unhealthyThresholdCount"></a>

- *Type:* java.lang.Number

The number of consecutive health check failures required before considering a target unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#unhealthy_threshold_count Elasticloadbalancingv2TargetGroup#unhealthy_threshold_count}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

The identifier of the virtual private cloud (VPC).

If the target is a Lambda function, this parameter does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#vpc_id Elasticloadbalancingv2TargetGroup#vpc_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putMatcher">putMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTargetGroupAttributes">putTargetGroupAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckEnabled">resetHealthCheckEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckIntervalSeconds">resetHealthCheckIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckPath">resetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckPort">resetHealthCheckPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckProtocol">resetHealthCheckProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckTimeoutSeconds">resetHealthCheckTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthyThresholdCount">resetHealthyThresholdCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetMatcher">resetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetProtocolVersion">resetProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargetControlPort">resetTargetControlPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargetGroupAttributes">resetTargetGroupAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargets">resetTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargetType">resetTargetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetUnhealthyThresholdCount">resetUnhealthyThresholdCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMatcher` <a name="putMatcher" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putMatcher"></a>

```java
public void putMatcher(Elasticloadbalancingv2TargetGroupMatcher value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putMatcher.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Elasticloadbalancingv2TargetGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>>

---

##### `putTargetGroupAttributes` <a name="putTargetGroupAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTargetGroupAttributes"></a>

```java
public void putTargetGroupAttributes(IResolvable|java.util.List<Elasticloadbalancingv2TargetGroupTargetGroupAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTargetGroupAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>>

---

##### `putTargets` <a name="putTargets" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTargets"></a>

```java
public void putTargets(IResolvable|java.util.List<Elasticloadbalancingv2TargetGroupTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.putTargets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>>

---

##### `resetHealthCheckEnabled` <a name="resetHealthCheckEnabled" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckEnabled"></a>

```java
public void resetHealthCheckEnabled()
```

##### `resetHealthCheckIntervalSeconds` <a name="resetHealthCheckIntervalSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckIntervalSeconds"></a>

```java
public void resetHealthCheckIntervalSeconds()
```

##### `resetHealthCheckPath` <a name="resetHealthCheckPath" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckPath"></a>

```java
public void resetHealthCheckPath()
```

##### `resetHealthCheckPort` <a name="resetHealthCheckPort" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckPort"></a>

```java
public void resetHealthCheckPort()
```

##### `resetHealthCheckProtocol` <a name="resetHealthCheckProtocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckProtocol"></a>

```java
public void resetHealthCheckProtocol()
```

##### `resetHealthCheckTimeoutSeconds` <a name="resetHealthCheckTimeoutSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthCheckTimeoutSeconds"></a>

```java
public void resetHealthCheckTimeoutSeconds()
```

##### `resetHealthyThresholdCount` <a name="resetHealthyThresholdCount" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetHealthyThresholdCount"></a>

```java
public void resetHealthyThresholdCount()
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```

##### `resetMatcher` <a name="resetMatcher" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetMatcher"></a>

```java
public void resetMatcher()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetName"></a>

```java
public void resetName()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetProtocolVersion` <a name="resetProtocolVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetProtocolVersion"></a>

```java
public void resetProtocolVersion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetControlPort` <a name="resetTargetControlPort" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargetControlPort"></a>

```java
public void resetTargetControlPort()
```

##### `resetTargetGroupAttributes` <a name="resetTargetGroupAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargetGroupAttributes"></a>

```java
public void resetTargetGroupAttributes()
```

##### `resetTargets` <a name="resetTargets" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargets"></a>

```java
public void resetTargets()
```

##### `resetTargetType` <a name="resetTargetType" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetTargetType"></a>

```java
public void resetTargetType()
```

##### `resetUnhealthyThresholdCount` <a name="resetUnhealthyThresholdCount" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetUnhealthyThresholdCount"></a>

```java
public void resetUnhealthyThresholdCount()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.resetVpcId"></a>

```java
public void resetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Elasticloadbalancingv2TargetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_target_group.Elasticloadbalancingv2TargetGroup;

Elasticloadbalancingv2TargetGroup.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_target_group.Elasticloadbalancingv2TargetGroup;

Elasticloadbalancingv2TargetGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_target_group.Elasticloadbalancingv2TargetGroup;

Elasticloadbalancingv2TargetGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_target_group.Elasticloadbalancingv2TargetGroup;

Elasticloadbalancingv2TargetGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Elasticloadbalancingv2TargetGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Elasticloadbalancingv2TargetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Elasticloadbalancingv2TargetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Elasticloadbalancingv2TargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Elasticloadbalancingv2TargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.loadBalancerArns">loadBalancerArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.matcher">matcher</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference">Elasticloadbalancingv2TargetGroupMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList">Elasticloadbalancingv2TargetGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupAttributes">targetGroupAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList">Elasticloadbalancingv2TargetGroupTargetGroupAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupFullName">targetGroupFullName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupName">targetGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList">Elasticloadbalancingv2TargetGroupTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckEnabledInput">healthCheckEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckIntervalSecondsInput">healthCheckIntervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPathInput">healthCheckPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPortInput">healthCheckPortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckProtocolInput">healthCheckProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckTimeoutSecondsInput">healthCheckTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthyThresholdCountInput">healthyThresholdCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.matcherInput">matcherInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocolVersionInput">protocolVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetControlPortInput">targetControlPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupAttributesInput">targetGroupAttributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetsInput">targetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetTypeInput">targetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.unhealthyThresholdCountInput">unhealthyThresholdCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckEnabled">healthCheckEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckIntervalSeconds">healthCheckIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPort">healthCheckPort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckProtocol">healthCheckProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckTimeoutSeconds">healthCheckTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthyThresholdCount">healthyThresholdCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetControlPort">targetControlPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetType">targetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.unhealthyThresholdCount">unhealthyThresholdCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancerArns`<sup>Required</sup> <a name="loadBalancerArns" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.loadBalancerArns"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.matcher"></a>

```java
public Elasticloadbalancingv2TargetGroupMatcherOutputReference getMatcher();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference">Elasticloadbalancingv2TargetGroupMatcherOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.tags"></a>

```java
public Elasticloadbalancingv2TargetGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList">Elasticloadbalancingv2TargetGroupTagsList</a>

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

---

##### `targetGroupAttributes`<sup>Required</sup> <a name="targetGroupAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupAttributes"></a>

```java
public Elasticloadbalancingv2TargetGroupTargetGroupAttributesList getTargetGroupAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList">Elasticloadbalancingv2TargetGroupTargetGroupAttributesList</a>

---

##### `targetGroupFullName`<sup>Required</sup> <a name="targetGroupFullName" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupFullName"></a>

```java
public java.lang.String getTargetGroupFullName();
```

- *Type:* java.lang.String

---

##### `targetGroupName`<sup>Required</sup> <a name="targetGroupName" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupName"></a>

```java
public java.lang.String getTargetGroupName();
```

- *Type:* java.lang.String

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targets"></a>

```java
public Elasticloadbalancingv2TargetGroupTargetsList getTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList">Elasticloadbalancingv2TargetGroupTargetsList</a>

---

##### `healthCheckEnabledInput`<sup>Optional</sup> <a name="healthCheckEnabledInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getHealthCheckEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `healthCheckIntervalSecondsInput`<sup>Optional</sup> <a name="healthCheckIntervalSecondsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckIntervalSecondsInput"></a>

```java
public java.lang.Number getHealthCheckIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `healthCheckPathInput`<sup>Optional</sup> <a name="healthCheckPathInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPathInput"></a>

```java
public java.lang.String getHealthCheckPathInput();
```

- *Type:* java.lang.String

---

##### `healthCheckPortInput`<sup>Optional</sup> <a name="healthCheckPortInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPortInput"></a>

```java
public java.lang.String getHealthCheckPortInput();
```

- *Type:* java.lang.String

---

##### `healthCheckProtocolInput`<sup>Optional</sup> <a name="healthCheckProtocolInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckProtocolInput"></a>

```java
public java.lang.String getHealthCheckProtocolInput();
```

- *Type:* java.lang.String

---

##### `healthCheckTimeoutSecondsInput`<sup>Optional</sup> <a name="healthCheckTimeoutSecondsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckTimeoutSecondsInput"></a>

```java
public java.lang.Number getHealthCheckTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `healthyThresholdCountInput`<sup>Optional</sup> <a name="healthyThresholdCountInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthyThresholdCountInput"></a>

```java
public java.lang.Number getHealthyThresholdCountInput();
```

- *Type:* java.lang.Number

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `matcherInput`<sup>Optional</sup> <a name="matcherInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.matcherInput"></a>

```java
public IResolvable|Elasticloadbalancingv2TargetGroupMatcher getMatcherInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `protocolVersionInput`<sup>Optional</sup> <a name="protocolVersionInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocolVersionInput"></a>

```java
public java.lang.String getProtocolVersionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2TargetGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>>

---

##### `targetControlPortInput`<sup>Optional</sup> <a name="targetControlPortInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetControlPortInput"></a>

```java
public java.lang.Number getTargetControlPortInput();
```

- *Type:* java.lang.Number

---

##### `targetGroupAttributesInput`<sup>Optional</sup> <a name="targetGroupAttributesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetGroupAttributesInput"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2TargetGroupTargetGroupAttributes> getTargetGroupAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>>

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetsInput"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2TargetGroupTargets> getTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>>

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetTypeInput"></a>

```java
public java.lang.String getTargetTypeInput();
```

- *Type:* java.lang.String

---

##### `unhealthyThresholdCountInput`<sup>Optional</sup> <a name="unhealthyThresholdCountInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.unhealthyThresholdCountInput"></a>

```java
public java.lang.Number getUnhealthyThresholdCountInput();
```

- *Type:* java.lang.Number

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `healthCheckEnabled`<sup>Required</sup> <a name="healthCheckEnabled" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckEnabled"></a>

```java
public java.lang.Boolean|IResolvable getHealthCheckEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `healthCheckIntervalSeconds`<sup>Required</sup> <a name="healthCheckIntervalSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckIntervalSeconds"></a>

```java
public java.lang.Number getHealthCheckIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

---

##### `healthCheckPort`<sup>Required</sup> <a name="healthCheckPort" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckPort"></a>

```java
public java.lang.String getHealthCheckPort();
```

- *Type:* java.lang.String

---

##### `healthCheckProtocol`<sup>Required</sup> <a name="healthCheckProtocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckProtocol"></a>

```java
public java.lang.String getHealthCheckProtocol();
```

- *Type:* java.lang.String

---

##### `healthCheckTimeoutSeconds`<sup>Required</sup> <a name="healthCheckTimeoutSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthCheckTimeoutSeconds"></a>

```java
public java.lang.Number getHealthCheckTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `healthyThresholdCount`<sup>Required</sup> <a name="healthyThresholdCount" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.healthyThresholdCount"></a>

```java
public java.lang.Number getHealthyThresholdCount();
```

- *Type:* java.lang.Number

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.protocolVersion"></a>

```java
public java.lang.String getProtocolVersion();
```

- *Type:* java.lang.String

---

##### `targetControlPort`<sup>Required</sup> <a name="targetControlPort" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetControlPort"></a>

```java
public java.lang.Number getTargetControlPort();
```

- *Type:* java.lang.Number

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

---

##### `unhealthyThresholdCount`<sup>Required</sup> <a name="unhealthyThresholdCount" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.unhealthyThresholdCount"></a>

```java
public java.lang.Number getUnhealthyThresholdCount();
```

- *Type:* java.lang.Number

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Elasticloadbalancingv2TargetGroupConfig <a name="Elasticloadbalancingv2TargetGroupConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_target_group.Elasticloadbalancingv2TargetGroupConfig;

Elasticloadbalancingv2TargetGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .healthCheckEnabled(java.lang.Boolean|IResolvable)
//  .healthCheckIntervalSeconds(java.lang.Number)
//  .healthCheckPath(java.lang.String)
//  .healthCheckPort(java.lang.String)
//  .healthCheckProtocol(java.lang.String)
//  .healthCheckTimeoutSeconds(java.lang.Number)
//  .healthyThresholdCount(java.lang.Number)
//  .ipAddressType(java.lang.String)
//  .matcher(Elasticloadbalancingv2TargetGroupMatcher)
//  .name(java.lang.String)
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
//  .protocolVersion(java.lang.String)
//  .tags(IResolvable|java.util.List<Elasticloadbalancingv2TargetGroupTags>)
//  .targetControlPort(java.lang.Number)
//  .targetGroupAttributes(IResolvable|java.util.List<Elasticloadbalancingv2TargetGroupTargetGroupAttributes>)
//  .targets(IResolvable|java.util.List<Elasticloadbalancingv2TargetGroupTargets>)
//  .targetType(java.lang.String)
//  .unhealthyThresholdCount(java.lang.Number)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckEnabled">healthCheckEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether health checks are enabled. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckIntervalSeconds">healthCheckIntervalSeconds</a></code> | <code>java.lang.Number</code> | The approximate amount of time, in seconds, between health checks of an individual target. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | [HTTP/HTTPS health checks] The destination for health checks on the targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckPort">healthCheckPort</a></code> | <code>java.lang.String</code> | The port the load balancer uses when performing health checks on targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckProtocol">healthCheckProtocol</a></code> | <code>java.lang.String</code> | The protocol the load balancer uses when performing health checks on targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckTimeoutSeconds">healthCheckTimeoutSeconds</a></code> | <code>java.lang.Number</code> | The amount of time, in seconds, during which no response from a target means a failed health check. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthyThresholdCount">healthyThresholdCount</a></code> | <code>java.lang.Number</code> | The number of consecutive health checks successes required before considering an unhealthy target healthy. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | The type of IP address used for this target group. The possible values are ipv4 and ipv6. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.matcher">matcher</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a></code> | [HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The port on which the targets receive traffic. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The protocol to use for routing traffic to the targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | [HTTP/HTTPS protocol] The protocol version. The possible values are GRPC, HTTP1, and HTTP2. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>></code> | The tags. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targetControlPort">targetControlPort</a></code> | <code>java.lang.Number</code> | The port that the target control agent uses to communicate the available capacity of targets to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targetGroupAttributes">targetGroupAttributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>></code> | The attributes. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targets">targets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>></code> | The targets. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targetType">targetType</a></code> | <code>java.lang.String</code> | The type of target that you must specify when registering targets with this target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.unhealthyThresholdCount">unhealthyThresholdCount</a></code> | <code>java.lang.Number</code> | The number of consecutive health check failures required before considering a target unhealthy. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The identifier of the virtual private cloud (VPC). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `healthCheckEnabled`<sup>Optional</sup> <a name="healthCheckEnabled" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckEnabled"></a>

```java
public java.lang.Boolean|IResolvable getHealthCheckEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether health checks are enabled.

If the target type is lambda, health checks are disabled by default but can be enabled. If the target type is instance, ip, or alb, health checks are always enabled and cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#health_check_enabled Elasticloadbalancingv2TargetGroup#health_check_enabled}

---

##### `healthCheckIntervalSeconds`<sup>Optional</sup> <a name="healthCheckIntervalSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckIntervalSeconds"></a>

```java
public java.lang.Number getHealthCheckIntervalSeconds();
```

- *Type:* java.lang.Number

The approximate amount of time, in seconds, between health checks of an individual target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#health_check_interval_seconds Elasticloadbalancingv2TargetGroup#health_check_interval_seconds}

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

[HTTP/HTTPS health checks] The destination for health checks on the targets.

[HTTP1 or HTTP2 protocol version] The ping path. The default is /. [GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /AWS.ALB/healthcheck.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#health_check_path Elasticloadbalancingv2TargetGroup#health_check_path}

---

##### `healthCheckPort`<sup>Optional</sup> <a name="healthCheckPort" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckPort"></a>

```java
public java.lang.String getHealthCheckPort();
```

- *Type:* java.lang.String

The port the load balancer uses when performing health checks on targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#health_check_port Elasticloadbalancingv2TargetGroup#health_check_port}

---

##### `healthCheckProtocol`<sup>Optional</sup> <a name="healthCheckProtocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckProtocol"></a>

```java
public java.lang.String getHealthCheckProtocol();
```

- *Type:* java.lang.String

The protocol the load balancer uses when performing health checks on targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#health_check_protocol Elasticloadbalancingv2TargetGroup#health_check_protocol}

---

##### `healthCheckTimeoutSeconds`<sup>Optional</sup> <a name="healthCheckTimeoutSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthCheckTimeoutSeconds"></a>

```java
public java.lang.Number getHealthCheckTimeoutSeconds();
```

- *Type:* java.lang.Number

The amount of time, in seconds, during which no response from a target means a failed health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#health_check_timeout_seconds Elasticloadbalancingv2TargetGroup#health_check_timeout_seconds}

---

##### `healthyThresholdCount`<sup>Optional</sup> <a name="healthyThresholdCount" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.healthyThresholdCount"></a>

```java
public java.lang.Number getHealthyThresholdCount();
```

- *Type:* java.lang.Number

The number of consecutive health checks successes required before considering an unhealthy target healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#healthy_threshold_count Elasticloadbalancingv2TargetGroup#healthy_threshold_count}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

The type of IP address used for this target group. The possible values are ipv4 and ipv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#ip_address_type Elasticloadbalancingv2TargetGroup#ip_address_type}

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.matcher"></a>

```java
public Elasticloadbalancingv2TargetGroupMatcher getMatcher();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a>

[HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#matcher Elasticloadbalancingv2TargetGroup#matcher}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#name Elasticloadbalancingv2TargetGroup#name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port on which the targets receive traffic.

This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#port Elasticloadbalancingv2TargetGroup#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The protocol to use for routing traffic to the targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#protocol Elasticloadbalancingv2TargetGroup#protocol}

---

##### `protocolVersion`<sup>Optional</sup> <a name="protocolVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.protocolVersion"></a>

```java
public java.lang.String getProtocolVersion();
```

- *Type:* java.lang.String

[HTTP/HTTPS protocol] The protocol version. The possible values are GRPC, HTTP1, and HTTP2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#protocol_version Elasticloadbalancingv2TargetGroup#protocol_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2TargetGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>>

The tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#tags Elasticloadbalancingv2TargetGroup#tags}

---

##### `targetControlPort`<sup>Optional</sup> <a name="targetControlPort" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targetControlPort"></a>

```java
public java.lang.Number getTargetControlPort();
```

- *Type:* java.lang.Number

The port that the target control agent uses to communicate the available capacity of targets to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#target_control_port Elasticloadbalancingv2TargetGroup#target_control_port}

---

##### `targetGroupAttributes`<sup>Optional</sup> <a name="targetGroupAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targetGroupAttributes"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2TargetGroupTargetGroupAttributes> getTargetGroupAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>>

The attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#target_group_attributes Elasticloadbalancingv2TargetGroup#target_group_attributes}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targets"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2TargetGroupTargets> getTargets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>>

The targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#targets Elasticloadbalancingv2TargetGroup#targets}

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

The type of target that you must specify when registering targets with this target group.

You can't specify targets for a target group using more than one target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#target_type Elasticloadbalancingv2TargetGroup#target_type}

---

##### `unhealthyThresholdCount`<sup>Optional</sup> <a name="unhealthyThresholdCount" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.unhealthyThresholdCount"></a>

```java
public java.lang.Number getUnhealthyThresholdCount();
```

- *Type:* java.lang.Number

The number of consecutive health check failures required before considering a target unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#unhealthy_threshold_count Elasticloadbalancingv2TargetGroup#unhealthy_threshold_count}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

The identifier of the virtual private cloud (VPC).

If the target is a Lambda function, this parameter does not apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#vpc_id Elasticloadbalancingv2TargetGroup#vpc_id}

---

### Elasticloadbalancingv2TargetGroupMatcher <a name="Elasticloadbalancingv2TargetGroupMatcher" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_target_group.Elasticloadbalancingv2TargetGroupMatcher;

Elasticloadbalancingv2TargetGroupMatcher.builder()
//  .grpcCode(java.lang.String)
//  .httpCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher.property.grpcCode">grpcCode</a></code> | <code>java.lang.String</code> | You can specify values between 0 and 99. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher.property.httpCode">httpCode</a></code> | <code>java.lang.String</code> | For Application Load Balancers, you can specify values between 200 and 499, and the default value is 200. |

---

##### `grpcCode`<sup>Optional</sup> <a name="grpcCode" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher.property.grpcCode"></a>

```java
public java.lang.String getGrpcCode();
```

- *Type:* java.lang.String

You can specify values between 0 and 99.

You can specify multiple values, or a range of values. The default value is 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#grpc_code Elasticloadbalancingv2TargetGroup#grpc_code}

---

##### `httpCode`<sup>Optional</sup> <a name="httpCode" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher.property.httpCode"></a>

```java
public java.lang.String getHttpCode();
```

- *Type:* java.lang.String

For Application Load Balancers, you can specify values between 200 and 499, and the default value is 200.

You can specify multiple values or a range of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#http_code Elasticloadbalancingv2TargetGroup#http_code}

---

### Elasticloadbalancingv2TargetGroupTags <a name="Elasticloadbalancingv2TargetGroupTags" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_target_group.Elasticloadbalancingv2TargetGroupTags;

Elasticloadbalancingv2TargetGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | The value for the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | The key name of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#key Elasticloadbalancingv2TargetGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#value Elasticloadbalancingv2TargetGroup#value}

---

### Elasticloadbalancingv2TargetGroupTargetGroupAttributes <a name="Elasticloadbalancingv2TargetGroupTargetGroupAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_target_group.Elasticloadbalancingv2TargetGroupTargetGroupAttributes;

Elasticloadbalancingv2TargetGroupTargetGroupAttributes.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes.property.key">key</a></code> | <code>java.lang.String</code> | The value of the attribute. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes.property.value">value</a></code> | <code>java.lang.String</code> | The name of the attribute. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#key Elasticloadbalancingv2TargetGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The name of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#value Elasticloadbalancingv2TargetGroup#value}

---

### Elasticloadbalancingv2TargetGroupTargets <a name="Elasticloadbalancingv2TargetGroupTargets" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_target_group.Elasticloadbalancingv2TargetGroupTargets;

Elasticloadbalancingv2TargetGroupTargets.builder()
//  .availabilityZone(java.lang.String)
//  .id(java.lang.String)
//  .port(java.lang.Number)
//  .quicServerId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | An Availability Zone or all. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the target. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.port">port</a></code> | <code>java.lang.Number</code> | The port on which the target is listening. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.quicServerId">quicServerId</a></code> | <code>java.lang.String</code> | The Server ID used by targets when using QUIC or TCP_QUIC protocols. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

An Availability Zone or all.

This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#availability_zone Elasticloadbalancingv2TargetGroup#availability_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the target.

If the target type of the target group is instance, specify an instance ID. If the target type is ip, specify an IP address. If the target type is lambda, specify the ARN of the Lambda function. If the target type is alb, specify the ARN of the Application Load Balancer target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#id Elasticloadbalancingv2TargetGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port on which the target is listening.

If the target group protocol is GENEVE, the supported port is 6081. If the target type is alb, the targeted Application Load Balancer must have at least one listener whose port matches the target group port. Not used if the target is a Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#port Elasticloadbalancingv2TargetGroup#port}

---

##### `quicServerId`<sup>Optional</sup> <a name="quicServerId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets.property.quicServerId"></a>

```java
public java.lang.String getQuicServerId();
```

- *Type:* java.lang.String

The Server ID used by targets when using QUIC or TCP_QUIC protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancingv2_target_group#quic_server_id Elasticloadbalancingv2TargetGroup#quic_server_id}

---

## Classes <a name="Classes" id="Classes"></a>

### Elasticloadbalancingv2TargetGroupMatcherOutputReference <a name="Elasticloadbalancingv2TargetGroupMatcherOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_target_group.Elasticloadbalancingv2TargetGroupMatcherOutputReference;

new Elasticloadbalancingv2TargetGroupMatcherOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resetGrpcCode">resetGrpcCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resetHttpCode">resetHttpCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGrpcCode` <a name="resetGrpcCode" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resetGrpcCode"></a>

```java
public void resetGrpcCode()
```

##### `resetHttpCode` <a name="resetHttpCode" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.resetHttpCode"></a>

```java
public void resetHttpCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.grpcCodeInput">grpcCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.httpCodeInput">httpCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.grpcCode">grpcCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.httpCode">httpCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `grpcCodeInput`<sup>Optional</sup> <a name="grpcCodeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.grpcCodeInput"></a>

```java
public java.lang.String getGrpcCodeInput();
```

- *Type:* java.lang.String

---

##### `httpCodeInput`<sup>Optional</sup> <a name="httpCodeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.httpCodeInput"></a>

```java
public java.lang.String getHttpCodeInput();
```

- *Type:* java.lang.String

---

##### `grpcCode`<sup>Required</sup> <a name="grpcCode" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.grpcCode"></a>

```java
public java.lang.String getGrpcCode();
```

- *Type:* java.lang.String

---

##### `httpCode`<sup>Required</sup> <a name="httpCode" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.httpCode"></a>

```java
public java.lang.String getHttpCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcherOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2TargetGroupMatcher getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupMatcher">Elasticloadbalancingv2TargetGroupMatcher</a>

---


### Elasticloadbalancingv2TargetGroupTagsList <a name="Elasticloadbalancingv2TargetGroupTagsList" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_target_group.Elasticloadbalancingv2TargetGroupTagsList;

new Elasticloadbalancingv2TargetGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.get"></a>

```java
public Elasticloadbalancingv2TargetGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2TargetGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>>

---


### Elasticloadbalancingv2TargetGroupTagsOutputReference <a name="Elasticloadbalancingv2TargetGroupTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_target_group.Elasticloadbalancingv2TargetGroupTagsOutputReference;

new Elasticloadbalancingv2TargetGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2TargetGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTags">Elasticloadbalancingv2TargetGroupTags</a>

---


### Elasticloadbalancingv2TargetGroupTargetGroupAttributesList <a name="Elasticloadbalancingv2TargetGroupTargetGroupAttributesList" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_target_group.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList;

new Elasticloadbalancingv2TargetGroupTargetGroupAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.get"></a>

```java
public Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2TargetGroupTargetGroupAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>>

---


### Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference <a name="Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_target_group.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference;

new Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2TargetGroupTargetGroupAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetGroupAttributes">Elasticloadbalancingv2TargetGroupTargetGroupAttributes</a>

---


### Elasticloadbalancingv2TargetGroupTargetsList <a name="Elasticloadbalancingv2TargetGroupTargetsList" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_target_group.Elasticloadbalancingv2TargetGroupTargetsList;

new Elasticloadbalancingv2TargetGroupTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.get"></a>

```java
public Elasticloadbalancingv2TargetGroupTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Elasticloadbalancingv2TargetGroupTargets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>>

---


### Elasticloadbalancingv2TargetGroupTargetsOutputReference <a name="Elasticloadbalancingv2TargetGroupTargetsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancingv2_target_group.Elasticloadbalancingv2TargetGroupTargetsOutputReference;

new Elasticloadbalancingv2TargetGroupTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetQuicServerId">resetQuicServerId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetQuicServerId` <a name="resetQuicServerId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.resetQuicServerId"></a>

```java
public void resetQuicServerId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.quicServerIdInput">quicServerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.quicServerId">quicServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `quicServerIdInput`<sup>Optional</sup> <a name="quicServerIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.quicServerIdInput"></a>

```java
public java.lang.String getQuicServerIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `quicServerId`<sup>Required</sup> <a name="quicServerId" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.quicServerId"></a>

```java
public java.lang.String getQuicServerId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|Elasticloadbalancingv2TargetGroupTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingv2TargetGroup.Elasticloadbalancingv2TargetGroupTargets">Elasticloadbalancingv2TargetGroupTargets</a>

---



