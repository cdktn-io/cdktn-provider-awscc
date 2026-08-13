# `elasticloadbalancingLoadBalancer` Submodule <a name="`elasticloadbalancingLoadBalancer` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticloadbalancingLoadBalancer <a name="ElasticloadbalancingLoadBalancer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer awscc_elasticloadbalancing_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancer;

ElasticloadbalancingLoadBalancer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .listeners(IResolvable|java.util.List<ElasticloadbalancingLoadBalancerListeners>)
//  .accessLoggingPolicy(ElasticloadbalancingLoadBalancerAccessLoggingPolicy)
//  .appCookieStickinessPolicy(IResolvable|java.util.List<ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy>)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .connectionDrainingPolicy(ElasticloadbalancingLoadBalancerConnectionDrainingPolicy)
//  .connectionSettings(ElasticloadbalancingLoadBalancerConnectionSettings)
//  .crossZone(java.lang.Boolean|IResolvable)
//  .healthCheck(ElasticloadbalancingLoadBalancerHealthCheck)
//  .instances(java.util.List<java.lang.String>)
//  .lbCookieStickinessPolicy(IResolvable|java.util.List<ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy>)
//  .loadBalancerName(java.lang.String)
//  .policies(IResolvable|java.util.List<ElasticloadbalancingLoadBalancerPolicies>)
//  .scheme(java.lang.String)
//  .securityGroups(java.util.List<java.lang.String>)
//  .subnets(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<ElasticloadbalancingLoadBalancerTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.listeners">listeners</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>></code> | The Listeners for the load balancer. You can specify at most one listener per port. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.accessLoggingPolicy">accessLoggingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a></code> | Information about where and how access logs are stored for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.appCookieStickinessPolicy">appCookieStickinessPolicy</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>></code> | Information about a policy for application-controlled session stickiness. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | The Availability Zones for a load balancer in a default VPC. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.connectionDrainingPolicy">connectionDrainingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a></code> | If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.connectionSettings">connectionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a></code> | If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.crossZone">crossZone</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a></code> | The health check settings to use when evaluating the health of your EC2 instances. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the instances for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.lbCookieStickinessPolicy">lbCookieStickinessPolicy</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>></code> | Information about a policy for duration-based session stickiness. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | The name of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.policies">policies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>></code> | The policies defined for your Classic Load Balancer. Specify only back-end server policies. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.scheme">scheme</a></code> | <code>java.lang.String</code> | The type of load balancer. Valid only for load balancers in a VPC. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | The security groups for the load balancer. Valid only for load balancers in a VPC. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the subnets for the load balancer. You can specify at most one subnet per Availability Zone. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>></code> | The tags associated with a load balancer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.listeners"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>>

The Listeners for the load balancer. You can specify at most one listener per port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#listeners ElasticloadbalancingLoadBalancer#listeners}

---

##### `accessLoggingPolicy`<sup>Optional</sup> <a name="accessLoggingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.accessLoggingPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a>

Information about where and how access logs are stored for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#access_logging_policy ElasticloadbalancingLoadBalancer#access_logging_policy}

---

##### `appCookieStickinessPolicy`<sup>Optional</sup> <a name="appCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.appCookieStickinessPolicy"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>>

Information about a policy for application-controlled session stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#app_cookie_stickiness_policy ElasticloadbalancingLoadBalancer#app_cookie_stickiness_policy}

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.availabilityZones"></a>

- *Type:* java.util.List<java.lang.String>

The Availability Zones for a load balancer in a default VPC.

For a load balancer in a nondefault VPC, specify Subnets instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#availability_zones ElasticloadbalancingLoadBalancer#availability_zones}

---

##### `connectionDrainingPolicy`<sup>Optional</sup> <a name="connectionDrainingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.connectionDrainingPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a>

If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#connection_draining_policy ElasticloadbalancingLoadBalancer#connection_draining_policy}

---

##### `connectionSettings`<sup>Optional</sup> <a name="connectionSettings" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.connectionSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a>

If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#connection_settings ElasticloadbalancingLoadBalancer#connection_settings}

---

##### `crossZone`<sup>Optional</sup> <a name="crossZone" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.crossZone"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#cross_zone ElasticloadbalancingLoadBalancer#cross_zone}

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.healthCheck"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a>

The health check settings to use when evaluating the health of your EC2 instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#health_check ElasticloadbalancingLoadBalancer#health_check}

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.instances"></a>

- *Type:* java.util.List<java.lang.String>

The IDs of the instances for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#instances ElasticloadbalancingLoadBalancer#instances}

---

##### `lbCookieStickinessPolicy`<sup>Optional</sup> <a name="lbCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.lbCookieStickinessPolicy"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>>

Information about a policy for duration-based session stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#lb_cookie_stickiness_policy ElasticloadbalancingLoadBalancer#lb_cookie_stickiness_policy}

---

##### `loadBalancerName`<sup>Optional</sup> <a name="loadBalancerName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.loadBalancerName"></a>

- *Type:* java.lang.String

The name of the load balancer.

This name must be unique within your set of load balancers for the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#load_balancer_name ElasticloadbalancingLoadBalancer#load_balancer_name}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.policies"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>>

The policies defined for your Classic Load Balancer. Specify only back-end server policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#policies ElasticloadbalancingLoadBalancer#policies}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.scheme"></a>

- *Type:* java.lang.String

The type of load balancer. Valid only for load balancers in a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#scheme ElasticloadbalancingLoadBalancer#scheme}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.securityGroups"></a>

- *Type:* java.util.List<java.lang.String>

The security groups for the load balancer. Valid only for load balancers in a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#security_groups ElasticloadbalancingLoadBalancer#security_groups}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.subnets"></a>

- *Type:* java.util.List<java.lang.String>

The IDs of the subnets for the load balancer. You can specify at most one subnet per Availability Zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#subnets ElasticloadbalancingLoadBalancer#subnets}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>>

The tags associated with a load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#tags ElasticloadbalancingLoadBalancer#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAccessLoggingPolicy">putAccessLoggingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAppCookieStickinessPolicy">putAppCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putConnectionDrainingPolicy">putConnectionDrainingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putConnectionSettings">putConnectionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putHealthCheck">putHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putLbCookieStickinessPolicy">putLbCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putListeners">putListeners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putPolicies">putPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetAccessLoggingPolicy">resetAccessLoggingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetAppCookieStickinessPolicy">resetAppCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetConnectionDrainingPolicy">resetConnectionDrainingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetConnectionSettings">resetConnectionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetCrossZone">resetCrossZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetInstances">resetInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetLbCookieStickinessPolicy">resetLbCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetLoadBalancerName">resetLoadBalancerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetScheme">resetScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetSubnets">resetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessLoggingPolicy` <a name="putAccessLoggingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAccessLoggingPolicy"></a>

```java
public void putAccessLoggingPolicy(ElasticloadbalancingLoadBalancerAccessLoggingPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAccessLoggingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a>

---

##### `putAppCookieStickinessPolicy` <a name="putAppCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAppCookieStickinessPolicy"></a>

```java
public void putAppCookieStickinessPolicy(IResolvable|java.util.List<ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAppCookieStickinessPolicy.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>>

---

##### `putConnectionDrainingPolicy` <a name="putConnectionDrainingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putConnectionDrainingPolicy"></a>

```java
public void putConnectionDrainingPolicy(ElasticloadbalancingLoadBalancerConnectionDrainingPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putConnectionDrainingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a>

---

##### `putConnectionSettings` <a name="putConnectionSettings" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putConnectionSettings"></a>

```java
public void putConnectionSettings(ElasticloadbalancingLoadBalancerConnectionSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putConnectionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a>

---

##### `putHealthCheck` <a name="putHealthCheck" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putHealthCheck"></a>

```java
public void putHealthCheck(ElasticloadbalancingLoadBalancerHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a>

---

##### `putLbCookieStickinessPolicy` <a name="putLbCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putLbCookieStickinessPolicy"></a>

```java
public void putLbCookieStickinessPolicy(IResolvable|java.util.List<ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putLbCookieStickinessPolicy.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>>

---

##### `putListeners` <a name="putListeners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putListeners"></a>

```java
public void putListeners(IResolvable|java.util.List<ElasticloadbalancingLoadBalancerListeners> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putListeners.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>>

---

##### `putPolicies` <a name="putPolicies" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putPolicies"></a>

```java
public void putPolicies(IResolvable|java.util.List<ElasticloadbalancingLoadBalancerPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putPolicies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ElasticloadbalancingLoadBalancerTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>>

---

##### `resetAccessLoggingPolicy` <a name="resetAccessLoggingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetAccessLoggingPolicy"></a>

```java
public void resetAccessLoggingPolicy()
```

##### `resetAppCookieStickinessPolicy` <a name="resetAppCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetAppCookieStickinessPolicy"></a>

```java
public void resetAppCookieStickinessPolicy()
```

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetAvailabilityZones"></a>

```java
public void resetAvailabilityZones()
```

##### `resetConnectionDrainingPolicy` <a name="resetConnectionDrainingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetConnectionDrainingPolicy"></a>

```java
public void resetConnectionDrainingPolicy()
```

##### `resetConnectionSettings` <a name="resetConnectionSettings" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetConnectionSettings"></a>

```java
public void resetConnectionSettings()
```

##### `resetCrossZone` <a name="resetCrossZone" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetCrossZone"></a>

```java
public void resetCrossZone()
```

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetHealthCheck"></a>

```java
public void resetHealthCheck()
```

##### `resetInstances` <a name="resetInstances" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetInstances"></a>

```java
public void resetInstances()
```

##### `resetLbCookieStickinessPolicy` <a name="resetLbCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetLbCookieStickinessPolicy"></a>

```java
public void resetLbCookieStickinessPolicy()
```

##### `resetLoadBalancerName` <a name="resetLoadBalancerName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetLoadBalancerName"></a>

```java
public void resetLoadBalancerName()
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetPolicies"></a>

```java
public void resetPolicies()
```

##### `resetScheme` <a name="resetScheme" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetScheme"></a>

```java
public void resetScheme()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetSubnets"></a>

```java
public void resetSubnets()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticloadbalancingLoadBalancer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isConstruct"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancer;

ElasticloadbalancingLoadBalancer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancer;

ElasticloadbalancingLoadBalancer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancer;

ElasticloadbalancingLoadBalancer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancer;

ElasticloadbalancingLoadBalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ElasticloadbalancingLoadBalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ElasticloadbalancingLoadBalancer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ElasticloadbalancingLoadBalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ElasticloadbalancingLoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ElasticloadbalancingLoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.accessLoggingPolicy">accessLoggingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference">ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.appCookieStickinessPolicy">appCookieStickinessPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.canonicalHostedZoneName">canonicalHostedZoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.canonicalHostedZoneNameId">canonicalHostedZoneNameId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionDrainingPolicy">connectionDrainingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference">ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionSettings">connectionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference">ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference">ElasticloadbalancingLoadBalancerHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.lbCookieStickinessPolicy">lbCookieStickinessPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.listeners">listeners</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList">ElasticloadbalancingLoadBalancerListenersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList">ElasticloadbalancingLoadBalancerPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.sourceSecurityGroup">sourceSecurityGroup</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference">ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList">ElasticloadbalancingLoadBalancerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.accessLoggingPolicyInput">accessLoggingPolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.appCookieStickinessPolicyInput">appCookieStickinessPolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionDrainingPolicyInput">connectionDrainingPolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionSettingsInput">connectionSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.crossZoneInput">crossZoneInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.healthCheckInput">healthCheckInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.instancesInput">instancesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.lbCookieStickinessPolicyInput">lbCookieStickinessPolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.listenersInput">listenersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.loadBalancerNameInput">loadBalancerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.policiesInput">policiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.schemeInput">schemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.crossZone">crossZone</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessLoggingPolicy`<sup>Required</sup> <a name="accessLoggingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.accessLoggingPolicy"></a>

```java
public ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference getAccessLoggingPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference">ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference</a>

---

##### `appCookieStickinessPolicy`<sup>Required</sup> <a name="appCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.appCookieStickinessPolicy"></a>

```java
public ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList getAppCookieStickinessPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList</a>

---

##### `canonicalHostedZoneName`<sup>Required</sup> <a name="canonicalHostedZoneName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.canonicalHostedZoneName"></a>

```java
public java.lang.String getCanonicalHostedZoneName();
```

- *Type:* java.lang.String

---

##### `canonicalHostedZoneNameId`<sup>Required</sup> <a name="canonicalHostedZoneNameId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.canonicalHostedZoneNameId"></a>

```java
public java.lang.String getCanonicalHostedZoneNameId();
```

- *Type:* java.lang.String

---

##### `connectionDrainingPolicy`<sup>Required</sup> <a name="connectionDrainingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionDrainingPolicy"></a>

```java
public ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference getConnectionDrainingPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference">ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference</a>

---

##### `connectionSettings`<sup>Required</sup> <a name="connectionSettings" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionSettings"></a>

```java
public ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference getConnectionSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference">ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.healthCheck"></a>

```java
public ElasticloadbalancingLoadBalancerHealthCheckOutputReference getHealthCheck();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference">ElasticloadbalancingLoadBalancerHealthCheckOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lbCookieStickinessPolicy`<sup>Required</sup> <a name="lbCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.lbCookieStickinessPolicy"></a>

```java
public ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList getLbCookieStickinessPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList</a>

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.listeners"></a>

```java
public ElasticloadbalancingLoadBalancerListenersList getListeners();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList">ElasticloadbalancingLoadBalancerListenersList</a>

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.policies"></a>

```java
public ElasticloadbalancingLoadBalancerPoliciesList getPolicies();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList">ElasticloadbalancingLoadBalancerPoliciesList</a>

---

##### `sourceSecurityGroup`<sup>Required</sup> <a name="sourceSecurityGroup" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.sourceSecurityGroup"></a>

```java
public ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference getSourceSecurityGroup();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference">ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.tags"></a>

```java
public ElasticloadbalancingLoadBalancerTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList">ElasticloadbalancingLoadBalancerTagsList</a>

---

##### `accessLoggingPolicyInput`<sup>Optional</sup> <a name="accessLoggingPolicyInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.accessLoggingPolicyInput"></a>

```java
public IResolvable|ElasticloadbalancingLoadBalancerAccessLoggingPolicy getAccessLoggingPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a>

---

##### `appCookieStickinessPolicyInput`<sup>Optional</sup> <a name="appCookieStickinessPolicyInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.appCookieStickinessPolicyInput"></a>

```java
public IResolvable|java.util.List<ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy> getAppCookieStickinessPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>>

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.availabilityZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionDrainingPolicyInput`<sup>Optional</sup> <a name="connectionDrainingPolicyInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionDrainingPolicyInput"></a>

```java
public IResolvable|ElasticloadbalancingLoadBalancerConnectionDrainingPolicy getConnectionDrainingPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a>

---

##### `connectionSettingsInput`<sup>Optional</sup> <a name="connectionSettingsInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionSettingsInput"></a>

```java
public IResolvable|ElasticloadbalancingLoadBalancerConnectionSettings getConnectionSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a>

---

##### `crossZoneInput`<sup>Optional</sup> <a name="crossZoneInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.crossZoneInput"></a>

```java
public java.lang.Boolean|IResolvable getCrossZoneInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.healthCheckInput"></a>

```java
public IResolvable|ElasticloadbalancingLoadBalancerHealthCheck getHealthCheckInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a>

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.instancesInput"></a>

```java
public java.util.List<java.lang.String> getInstancesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lbCookieStickinessPolicyInput`<sup>Optional</sup> <a name="lbCookieStickinessPolicyInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.lbCookieStickinessPolicyInput"></a>

```java
public IResolvable|java.util.List<ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy> getLbCookieStickinessPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>>

---

##### `listenersInput`<sup>Optional</sup> <a name="listenersInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.listenersInput"></a>

```java
public IResolvable|java.util.List<ElasticloadbalancingLoadBalancerListeners> getListenersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>>

---

##### `loadBalancerNameInput`<sup>Optional</sup> <a name="loadBalancerNameInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.loadBalancerNameInput"></a>

```java
public java.lang.String getLoadBalancerNameInput();
```

- *Type:* java.lang.String

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.policiesInput"></a>

```java
public IResolvable|java.util.List<ElasticloadbalancingLoadBalancerPolicies> getPoliciesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>>

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.schemeInput"></a>

```java
public java.lang.String getSchemeInput();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ElasticloadbalancingLoadBalancerTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `crossZone`<sup>Required</sup> <a name="crossZone" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.crossZone"></a>

```java
public java.lang.Boolean|IResolvable getCrossZone();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.loadBalancerName"></a>

```java
public java.lang.String getLoadBalancerName();
```

- *Type:* java.lang.String

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticloadbalancingLoadBalancerAccessLoggingPolicy <a name="ElasticloadbalancingLoadBalancerAccessLoggingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy;

ElasticloadbalancingLoadBalancerAccessLoggingPolicy.builder()
//  .emitInterval(java.lang.Number)
//  .enabled(java.lang.Boolean|IResolvable)
//  .s3BucketName(java.lang.String)
//  .s3BucketPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.emitInterval">emitInterval</a></code> | <code>java.lang.Number</code> | The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether access logs are enabled for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | The name of the Amazon S3 bucket where the access logs are stored. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.s3BucketPrefix">s3BucketPrefix</a></code> | <code>java.lang.String</code> | The logical hierarchy you created for your Amazon S3 bucket, for example `my-bucket-prefix/prod`. |

---

##### `emitInterval`<sup>Optional</sup> <a name="emitInterval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.emitInterval"></a>

```java
public java.lang.Number getEmitInterval();
```

- *Type:* java.lang.Number

The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes.

Default: 60 minutes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#emit_interval ElasticloadbalancingLoadBalancer#emit_interval}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether access logs are enabled for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#enabled ElasticloadbalancingLoadBalancer#enabled}

---

##### `s3BucketName`<sup>Optional</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

The name of the Amazon S3 bucket where the access logs are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#s3_bucket_name ElasticloadbalancingLoadBalancer#s3_bucket_name}

---

##### `s3BucketPrefix`<sup>Optional</sup> <a name="s3BucketPrefix" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.s3BucketPrefix"></a>

```java
public java.lang.String getS3BucketPrefix();
```

- *Type:* java.lang.String

The logical hierarchy you created for your Amazon S3 bucket, for example `my-bucket-prefix/prod`.

If the prefix is not provided, the log is placed at the root level of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#s3_bucket_prefix ElasticloadbalancingLoadBalancer#s3_bucket_prefix}

---

### ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy <a name="ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy;

ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy.builder()
//  .cookieName(java.lang.String)
//  .policyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy.property.cookieName">cookieName</a></code> | <code>java.lang.String</code> | The name of the application cookie used for stickiness. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy.property.policyName">policyName</a></code> | <code>java.lang.String</code> | The mnemonic name for the policy being created. |

---

##### `cookieName`<sup>Optional</sup> <a name="cookieName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy.property.cookieName"></a>

```java
public java.lang.String getCookieName();
```

- *Type:* java.lang.String

The name of the application cookie used for stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#cookie_name ElasticloadbalancingLoadBalancer#cookie_name}

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

The mnemonic name for the policy being created.

The name must be unique within a set of policies for this load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#policy_name ElasticloadbalancingLoadBalancer#policy_name}

---

### ElasticloadbalancingLoadBalancerConfig <a name="ElasticloadbalancingLoadBalancerConfig" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerConfig;

ElasticloadbalancingLoadBalancerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .listeners(IResolvable|java.util.List<ElasticloadbalancingLoadBalancerListeners>)
//  .accessLoggingPolicy(ElasticloadbalancingLoadBalancerAccessLoggingPolicy)
//  .appCookieStickinessPolicy(IResolvable|java.util.List<ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy>)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .connectionDrainingPolicy(ElasticloadbalancingLoadBalancerConnectionDrainingPolicy)
//  .connectionSettings(ElasticloadbalancingLoadBalancerConnectionSettings)
//  .crossZone(java.lang.Boolean|IResolvable)
//  .healthCheck(ElasticloadbalancingLoadBalancerHealthCheck)
//  .instances(java.util.List<java.lang.String>)
//  .lbCookieStickinessPolicy(IResolvable|java.util.List<ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy>)
//  .loadBalancerName(java.lang.String)
//  .policies(IResolvable|java.util.List<ElasticloadbalancingLoadBalancerPolicies>)
//  .scheme(java.lang.String)
//  .securityGroups(java.util.List<java.lang.String>)
//  .subnets(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<ElasticloadbalancingLoadBalancerTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.listeners">listeners</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>></code> | The Listeners for the load balancer. You can specify at most one listener per port. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.accessLoggingPolicy">accessLoggingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a></code> | Information about where and how access logs are stored for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.appCookieStickinessPolicy">appCookieStickinessPolicy</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>></code> | Information about a policy for application-controlled session stickiness. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | The Availability Zones for a load balancer in a default VPC. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.connectionDrainingPolicy">connectionDrainingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a></code> | If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.connectionSettings">connectionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a></code> | If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.crossZone">crossZone</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a></code> | The health check settings to use when evaluating the health of your EC2 instances. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the instances for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.lbCookieStickinessPolicy">lbCookieStickinessPolicy</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>></code> | Information about a policy for duration-based session stickiness. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | The name of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.policies">policies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>></code> | The policies defined for your Classic Load Balancer. Specify only back-end server policies. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.scheme">scheme</a></code> | <code>java.lang.String</code> | The type of load balancer. Valid only for load balancers in a VPC. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | The security groups for the load balancer. Valid only for load balancers in a VPC. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | The IDs of the subnets for the load balancer. You can specify at most one subnet per Availability Zone. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>></code> | The tags associated with a load balancer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.listeners"></a>

```java
public IResolvable|java.util.List<ElasticloadbalancingLoadBalancerListeners> getListeners();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>>

The Listeners for the load balancer. You can specify at most one listener per port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#listeners ElasticloadbalancingLoadBalancer#listeners}

---

##### `accessLoggingPolicy`<sup>Optional</sup> <a name="accessLoggingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.accessLoggingPolicy"></a>

```java
public ElasticloadbalancingLoadBalancerAccessLoggingPolicy getAccessLoggingPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a>

Information about where and how access logs are stored for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#access_logging_policy ElasticloadbalancingLoadBalancer#access_logging_policy}

---

##### `appCookieStickinessPolicy`<sup>Optional</sup> <a name="appCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.appCookieStickinessPolicy"></a>

```java
public IResolvable|java.util.List<ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy> getAppCookieStickinessPolicy();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>>

Information about a policy for application-controlled session stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#app_cookie_stickiness_policy ElasticloadbalancingLoadBalancer#app_cookie_stickiness_policy}

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

The Availability Zones for a load balancer in a default VPC.

For a load balancer in a nondefault VPC, specify Subnets instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#availability_zones ElasticloadbalancingLoadBalancer#availability_zones}

---

##### `connectionDrainingPolicy`<sup>Optional</sup> <a name="connectionDrainingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.connectionDrainingPolicy"></a>

```java
public ElasticloadbalancingLoadBalancerConnectionDrainingPolicy getConnectionDrainingPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a>

If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#connection_draining_policy ElasticloadbalancingLoadBalancer#connection_draining_policy}

---

##### `connectionSettings`<sup>Optional</sup> <a name="connectionSettings" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.connectionSettings"></a>

```java
public ElasticloadbalancingLoadBalancerConnectionSettings getConnectionSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a>

If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#connection_settings ElasticloadbalancingLoadBalancer#connection_settings}

---

##### `crossZone`<sup>Optional</sup> <a name="crossZone" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.crossZone"></a>

```java
public java.lang.Boolean|IResolvable getCrossZone();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#cross_zone ElasticloadbalancingLoadBalancer#cross_zone}

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.healthCheck"></a>

```java
public ElasticloadbalancingLoadBalancerHealthCheck getHealthCheck();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a>

The health check settings to use when evaluating the health of your EC2 instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#health_check ElasticloadbalancingLoadBalancer#health_check}

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

The IDs of the instances for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#instances ElasticloadbalancingLoadBalancer#instances}

---

##### `lbCookieStickinessPolicy`<sup>Optional</sup> <a name="lbCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.lbCookieStickinessPolicy"></a>

```java
public IResolvable|java.util.List<ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy> getLbCookieStickinessPolicy();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>>

Information about a policy for duration-based session stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#lb_cookie_stickiness_policy ElasticloadbalancingLoadBalancer#lb_cookie_stickiness_policy}

---

##### `loadBalancerName`<sup>Optional</sup> <a name="loadBalancerName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.loadBalancerName"></a>

```java
public java.lang.String getLoadBalancerName();
```

- *Type:* java.lang.String

The name of the load balancer.

This name must be unique within your set of load balancers for the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#load_balancer_name ElasticloadbalancingLoadBalancer#load_balancer_name}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.policies"></a>

```java
public IResolvable|java.util.List<ElasticloadbalancingLoadBalancerPolicies> getPolicies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>>

The policies defined for your Classic Load Balancer. Specify only back-end server policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#policies ElasticloadbalancingLoadBalancer#policies}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

The type of load balancer. Valid only for load balancers in a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#scheme ElasticloadbalancingLoadBalancer#scheme}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

The security groups for the load balancer. Valid only for load balancers in a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#security_groups ElasticloadbalancingLoadBalancer#security_groups}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

The IDs of the subnets for the load balancer. You can specify at most one subnet per Availability Zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#subnets ElasticloadbalancingLoadBalancer#subnets}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ElasticloadbalancingLoadBalancerTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>>

The tags associated with a load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#tags ElasticloadbalancingLoadBalancer#tags}

---

### ElasticloadbalancingLoadBalancerConnectionDrainingPolicy <a name="ElasticloadbalancingLoadBalancerConnectionDrainingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy;

ElasticloadbalancingLoadBalancerConnectionDrainingPolicy.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .timeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether connection draining is enabled for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | The maximum time, in seconds, to keep the existing connections open before deregistering the instances. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether connection draining is enabled for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#enabled ElasticloadbalancingLoadBalancer#enabled}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

The maximum time, in seconds, to keep the existing connections open before deregistering the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#timeout ElasticloadbalancingLoadBalancer#timeout}

---

### ElasticloadbalancingLoadBalancerConnectionSettings <a name="ElasticloadbalancingLoadBalancerConnectionSettings" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerConnectionSettings;

ElasticloadbalancingLoadBalancerConnectionSettings.builder()
//  .idleTimeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.Number</code> | The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer. |

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings.property.idleTimeout"></a>

```java
public java.lang.Number getIdleTimeout();
```

- *Type:* java.lang.Number

The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#idle_timeout ElasticloadbalancingLoadBalancer#idle_timeout}

---

### ElasticloadbalancingLoadBalancerHealthCheck <a name="ElasticloadbalancingLoadBalancerHealthCheck" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerHealthCheck;

ElasticloadbalancingLoadBalancerHealthCheck.builder()
//  .healthyThreshold(java.lang.String)
//  .interval(java.lang.String)
//  .target(java.lang.String)
//  .timeout(java.lang.String)
//  .unhealthyThreshold(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.String</code> | The number of consecutive health checks successes required before moving the instance to the `Healthy` state. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.interval">interval</a></code> | <code>java.lang.String</code> | The approximate interval, in seconds, between health checks of an individual instance. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.target">target</a></code> | <code>java.lang.String</code> | The instance being checked. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.timeout">timeout</a></code> | <code>java.lang.String</code> | The amount of time, in seconds, during which no response means a failed health check. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.String</code> | The number of consecutive health check failures required before moving the instance to the `Unhealthy` state. |

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.healthyThreshold"></a>

```java
public java.lang.String getHealthyThreshold();
```

- *Type:* java.lang.String

The number of consecutive health checks successes required before moving the instance to the `Healthy` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#healthy_threshold ElasticloadbalancingLoadBalancer#healthy_threshold}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.interval"></a>

```java
public java.lang.String getInterval();
```

- *Type:* java.lang.String

The approximate interval, in seconds, between health checks of an individual instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#interval ElasticloadbalancingLoadBalancer#interval}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

The instance being checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#target ElasticloadbalancingLoadBalancer#target}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

The amount of time, in seconds, during which no response means a failed health check.

This value must be less than the `Interval` value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#timeout ElasticloadbalancingLoadBalancer#timeout}

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.unhealthyThreshold"></a>

```java
public java.lang.String getUnhealthyThreshold();
```

- *Type:* java.lang.String

The number of consecutive health check failures required before moving the instance to the `Unhealthy` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#unhealthy_threshold ElasticloadbalancingLoadBalancer#unhealthy_threshold}

---

### ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy <a name="ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy;

ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy.builder()
//  .cookieExpirationPeriod(java.lang.String)
//  .policyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy.property.cookieExpirationPeriod">cookieExpirationPeriod</a></code> | <code>java.lang.String</code> | The time period, in seconds, after which the cookie should be considered stale. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy.property.policyName">policyName</a></code> | <code>java.lang.String</code> | The name of the policy. This name must be unique within the set of policies for this load balancer. |

---

##### `cookieExpirationPeriod`<sup>Optional</sup> <a name="cookieExpirationPeriod" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy.property.cookieExpirationPeriod"></a>

```java
public java.lang.String getCookieExpirationPeriod();
```

- *Type:* java.lang.String

The time period, in seconds, after which the cookie should be considered stale.

If this parameter is not specified, the stickiness session lasts for the duration of the browser session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#cookie_expiration_period ElasticloadbalancingLoadBalancer#cookie_expiration_period}

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

The name of the policy. This name must be unique within the set of policies for this load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#policy_name ElasticloadbalancingLoadBalancer#policy_name}

---

### ElasticloadbalancingLoadBalancerListeners <a name="ElasticloadbalancingLoadBalancerListeners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerListeners;

ElasticloadbalancingLoadBalancerListeners.builder()
    .instancePort(java.lang.String)
    .loadBalancerPort(java.lang.String)
    .protocol(java.lang.String)
//  .instanceProtocol(java.lang.String)
//  .policyNames(java.util.List<java.lang.String>)
//  .sslCertificateId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.instancePort">instancePort</a></code> | <code>java.lang.String</code> | The port on which the instance is listening. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.loadBalancerPort">loadBalancerPort</a></code> | <code>java.lang.String</code> | The port on which the load balancer is listening. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.instanceProtocol">instanceProtocol</a></code> | <code>java.lang.String</code> | The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.policyNames">policyNames</a></code> | <code>java.util.List<java.lang.String></code> | The names of the policies to associate with the listener. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.sslCertificateId">sslCertificateId</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the server certificate. |

---

##### `instancePort`<sup>Required</sup> <a name="instancePort" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.instancePort"></a>

```java
public java.lang.String getInstancePort();
```

- *Type:* java.lang.String

The port on which the instance is listening.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#instance_port ElasticloadbalancingLoadBalancer#instance_port}

---

##### `loadBalancerPort`<sup>Required</sup> <a name="loadBalancerPort" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.loadBalancerPort"></a>

```java
public java.lang.String getLoadBalancerPort();
```

- *Type:* java.lang.String

The port on which the load balancer is listening.

On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#load_balancer_port ElasticloadbalancingLoadBalancer#load_balancer_port}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#protocol ElasticloadbalancingLoadBalancer#protocol}

---

##### `instanceProtocol`<sup>Optional</sup> <a name="instanceProtocol" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.instanceProtocol"></a>

```java
public java.lang.String getInstanceProtocol();
```

- *Type:* java.lang.String

The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL.

If the front-end protocol is TCP or SSL, the back-end protocol must be TCP or SSL. If the front-end protocol is HTTP or HTTPS, the back-end protocol must be HTTP or HTTPS.

If there is another listener with the same `InstancePort` whose `InstanceProtocol` is secure, (HTTPS or SSL), the listener's `InstanceProtocol` must also be secure.

If there is another listener with the same `InstancePort` whose `InstanceProtocol` is HTTP or TCP, the listener's `InstanceProtocol` must be HTTP or TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#instance_protocol ElasticloadbalancingLoadBalancer#instance_protocol}

---

##### `policyNames`<sup>Optional</sup> <a name="policyNames" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.policyNames"></a>

```java
public java.util.List<java.lang.String> getPolicyNames();
```

- *Type:* java.util.List<java.lang.String>

The names of the policies to associate with the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#policy_names ElasticloadbalancingLoadBalancer#policy_names}

---

##### `sslCertificateId`<sup>Optional</sup> <a name="sslCertificateId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.sslCertificateId"></a>

```java
public java.lang.String getSslCertificateId();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the server certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#ssl_certificate_id ElasticloadbalancingLoadBalancer#ssl_certificate_id}

---

### ElasticloadbalancingLoadBalancerPolicies <a name="ElasticloadbalancingLoadBalancerPolicies" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerPolicies;

ElasticloadbalancingLoadBalancerPolicies.builder()
//  .attributes(IResolvable|java.util.List<ElasticloadbalancingLoadBalancerPoliciesAttributes>)
//  .instancePorts(java.util.List<java.lang.String>)
//  .loadBalancerPorts(java.util.List<java.lang.String>)
//  .policyName(java.lang.String)
//  .policyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.attributes">attributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>></code> | The policy attributes. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.instancePorts">instancePorts</a></code> | <code>java.util.List<java.lang.String></code> | The instance ports for the policy. Required only for some policy types. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.loadBalancerPorts">loadBalancerPorts</a></code> | <code>java.util.List<java.lang.String></code> | The load balancer ports for the policy. Required only for some policy types. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.policyName">policyName</a></code> | <code>java.lang.String</code> | The name of the policy. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.policyType">policyType</a></code> | <code>java.lang.String</code> | The name of the policy type. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.attributes"></a>

```java
public IResolvable|java.util.List<ElasticloadbalancingLoadBalancerPoliciesAttributes> getAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>>

The policy attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#attributes ElasticloadbalancingLoadBalancer#attributes}

---

##### `instancePorts`<sup>Optional</sup> <a name="instancePorts" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.instancePorts"></a>

```java
public java.util.List<java.lang.String> getInstancePorts();
```

- *Type:* java.util.List<java.lang.String>

The instance ports for the policy. Required only for some policy types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#instance_ports ElasticloadbalancingLoadBalancer#instance_ports}

---

##### `loadBalancerPorts`<sup>Optional</sup> <a name="loadBalancerPorts" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.loadBalancerPorts"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerPorts();
```

- *Type:* java.util.List<java.lang.String>

The load balancer ports for the policy. Required only for some policy types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#load_balancer_ports ElasticloadbalancingLoadBalancer#load_balancer_ports}

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#policy_name ElasticloadbalancingLoadBalancer#policy_name}

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

The name of the policy type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#policy_type ElasticloadbalancingLoadBalancer#policy_type}

---

### ElasticloadbalancingLoadBalancerPoliciesAttributes <a name="ElasticloadbalancingLoadBalancerPoliciesAttributes" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerPoliciesAttributes;

ElasticloadbalancingLoadBalancerPoliciesAttributes.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#name ElasticloadbalancingLoadBalancer#name}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#value ElasticloadbalancingLoadBalancer#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#name ElasticloadbalancingLoadBalancer#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#value ElasticloadbalancingLoadBalancer#value}.

---

### ElasticloadbalancingLoadBalancerSourceSecurityGroup <a name="ElasticloadbalancingLoadBalancerSourceSecurityGroup" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerSourceSecurityGroup;

ElasticloadbalancingLoadBalancerSourceSecurityGroup.builder()
    .build();
```


### ElasticloadbalancingLoadBalancerTags <a name="ElasticloadbalancingLoadBalancerTags" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerTags;

ElasticloadbalancingLoadBalancerTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. You can specify a value that's 1 to 256 characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with `aws:`. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#key ElasticloadbalancingLoadBalancer#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag. You can specify a value that's 1 to 256 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancing_load_balancer#value ElasticloadbalancingLoadBalancer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference <a name="ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference;

new ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetEmitInterval">resetEmitInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetS3BucketName">resetS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetS3BucketPrefix">resetS3BucketPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmitInterval` <a name="resetEmitInterval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetEmitInterval"></a>

```java
public void resetEmitInterval()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetS3BucketName` <a name="resetS3BucketName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetS3BucketName"></a>

```java
public void resetS3BucketName()
```

##### `resetS3BucketPrefix` <a name="resetS3BucketPrefix" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetS3BucketPrefix"></a>

```java
public void resetS3BucketPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.emitIntervalInput">emitIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketPrefixInput">s3BucketPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.emitInterval">emitInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketPrefix">s3BucketPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emitIntervalInput`<sup>Optional</sup> <a name="emitIntervalInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.emitIntervalInput"></a>

```java
public java.lang.Number getEmitIntervalInput();
```

- *Type:* java.lang.Number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `s3BucketPrefixInput`<sup>Optional</sup> <a name="s3BucketPrefixInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketPrefixInput"></a>

```java
public java.lang.String getS3BucketPrefixInput();
```

- *Type:* java.lang.String

---

##### `emitInterval`<sup>Required</sup> <a name="emitInterval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.emitInterval"></a>

```java
public java.lang.Number getEmitInterval();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `s3BucketPrefix`<sup>Required</sup> <a name="s3BucketPrefix" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketPrefix"></a>

```java
public java.lang.String getS3BucketPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticloadbalancingLoadBalancerAccessLoggingPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a>

---


### ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList <a name="ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList;

new ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.get"></a>

```java
public ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>>

---


### ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference <a name="ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference;

new ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resetCookieName">resetCookieName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resetPolicyName">resetPolicyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCookieName` <a name="resetCookieName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resetCookieName"></a>

```java
public void resetCookieName()
```

##### `resetPolicyName` <a name="resetPolicyName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resetPolicyName"></a>

```java
public void resetPolicyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.cookieNameInput">cookieNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.cookieName">cookieName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cookieNameInput`<sup>Optional</sup> <a name="cookieNameInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.cookieNameInput"></a>

```java
public java.lang.String getCookieNameInput();
```

- *Type:* java.lang.String

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.cookieName"></a>

```java
public java.lang.String getCookieName();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>

---


### ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference <a name="ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference;

new ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticloadbalancingLoadBalancerConnectionDrainingPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a>

---


### ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference <a name="ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference;

new ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resetIdleTimeout">resetIdleTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeout` <a name="resetIdleTimeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resetIdleTimeout"></a>

```java
public void resetIdleTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.idleTimeoutInput">idleTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInput`<sup>Optional</sup> <a name="idleTimeoutInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.idleTimeoutInput"></a>

```java
public java.lang.Number getIdleTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.idleTimeout"></a>

```java
public java.lang.Number getIdleTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticloadbalancingLoadBalancerConnectionSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a>

---


### ElasticloadbalancingLoadBalancerHealthCheckOutputReference <a name="ElasticloadbalancingLoadBalancerHealthCheckOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference;

new ElasticloadbalancingLoadBalancerHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetHealthyThreshold">resetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetUnhealthyThreshold">resetUnhealthyThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetHealthyThreshold"></a>

```java
public void resetHealthyThreshold()
```

##### `resetInterval` <a name="resetInterval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetUnhealthyThreshold"></a>

```java
public void resetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.interval">interval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.healthyThresholdInput"></a>

```java
public java.lang.String getHealthyThresholdInput();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.intervalInput"></a>

```java
public java.lang.String getIntervalInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```java
public java.lang.String getUnhealthyThresholdInput();
```

- *Type:* java.lang.String

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.healthyThreshold"></a>

```java
public java.lang.String getHealthyThreshold();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.interval"></a>

```java
public java.lang.String getInterval();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.unhealthyThreshold"></a>

```java
public java.lang.String getUnhealthyThreshold();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticloadbalancingLoadBalancerHealthCheck getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a>

---


### ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList <a name="ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList;

new ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.get"></a>

```java
public ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>>

---


### ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference <a name="ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference;

new ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resetCookieExpirationPeriod">resetCookieExpirationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resetPolicyName">resetPolicyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCookieExpirationPeriod` <a name="resetCookieExpirationPeriod" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resetCookieExpirationPeriod"></a>

```java
public void resetCookieExpirationPeriod()
```

##### `resetPolicyName` <a name="resetPolicyName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resetPolicyName"></a>

```java
public void resetPolicyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.cookieExpirationPeriodInput">cookieExpirationPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod">cookieExpirationPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cookieExpirationPeriodInput`<sup>Optional</sup> <a name="cookieExpirationPeriodInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.cookieExpirationPeriodInput"></a>

```java
public java.lang.String getCookieExpirationPeriodInput();
```

- *Type:* java.lang.String

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `cookieExpirationPeriod`<sup>Required</sup> <a name="cookieExpirationPeriod" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod"></a>

```java
public java.lang.String getCookieExpirationPeriod();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>

---


### ElasticloadbalancingLoadBalancerListenersList <a name="ElasticloadbalancingLoadBalancerListenersList" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerListenersList;

new ElasticloadbalancingLoadBalancerListenersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.get"></a>

```java
public ElasticloadbalancingLoadBalancerListenersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElasticloadbalancingLoadBalancerListeners> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>>

---


### ElasticloadbalancingLoadBalancerListenersOutputReference <a name="ElasticloadbalancingLoadBalancerListenersOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerListenersOutputReference;

new ElasticloadbalancingLoadBalancerListenersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resetInstanceProtocol">resetInstanceProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resetPolicyNames">resetPolicyNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resetSslCertificateId">resetSslCertificateId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceProtocol` <a name="resetInstanceProtocol" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resetInstanceProtocol"></a>

```java
public void resetInstanceProtocol()
```

##### `resetPolicyNames` <a name="resetPolicyNames" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resetPolicyNames"></a>

```java
public void resetPolicyNames()
```

##### `resetSslCertificateId` <a name="resetSslCertificateId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resetSslCertificateId"></a>

```java
public void resetSslCertificateId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instancePortInput">instancePortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instanceProtocolInput">instanceProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.loadBalancerPortInput">loadBalancerPortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.policyNamesInput">policyNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.sslCertificateIdInput">sslCertificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instancePort">instancePort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instanceProtocol">instanceProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.loadBalancerPort">loadBalancerPort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.policyNames">policyNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.sslCertificateId">sslCertificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instancePortInput`<sup>Optional</sup> <a name="instancePortInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instancePortInput"></a>

```java
public java.lang.String getInstancePortInput();
```

- *Type:* java.lang.String

---

##### `instanceProtocolInput`<sup>Optional</sup> <a name="instanceProtocolInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instanceProtocolInput"></a>

```java
public java.lang.String getInstanceProtocolInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerPortInput`<sup>Optional</sup> <a name="loadBalancerPortInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.loadBalancerPortInput"></a>

```java
public java.lang.String getLoadBalancerPortInput();
```

- *Type:* java.lang.String

---

##### `policyNamesInput`<sup>Optional</sup> <a name="policyNamesInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.policyNamesInput"></a>

```java
public java.util.List<java.lang.String> getPolicyNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `sslCertificateIdInput`<sup>Optional</sup> <a name="sslCertificateIdInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.sslCertificateIdInput"></a>

```java
public java.lang.String getSslCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `instancePort`<sup>Required</sup> <a name="instancePort" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instancePort"></a>

```java
public java.lang.String getInstancePort();
```

- *Type:* java.lang.String

---

##### `instanceProtocol`<sup>Required</sup> <a name="instanceProtocol" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instanceProtocol"></a>

```java
public java.lang.String getInstanceProtocol();
```

- *Type:* java.lang.String

---

##### `loadBalancerPort`<sup>Required</sup> <a name="loadBalancerPort" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.loadBalancerPort"></a>

```java
public java.lang.String getLoadBalancerPort();
```

- *Type:* java.lang.String

---

##### `policyNames`<sup>Required</sup> <a name="policyNames" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.policyNames"></a>

```java
public java.util.List<java.lang.String> getPolicyNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `sslCertificateId`<sup>Required</sup> <a name="sslCertificateId" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.sslCertificateId"></a>

```java
public java.lang.String getSslCertificateId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticloadbalancingLoadBalancerListeners getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>

---


### ElasticloadbalancingLoadBalancerPoliciesAttributesList <a name="ElasticloadbalancingLoadBalancerPoliciesAttributesList" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList;

new ElasticloadbalancingLoadBalancerPoliciesAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.get"></a>

```java
public ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElasticloadbalancingLoadBalancerPoliciesAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>>

---


### ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference <a name="ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference;

new ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticloadbalancingLoadBalancerPoliciesAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>

---


### ElasticloadbalancingLoadBalancerPoliciesList <a name="ElasticloadbalancingLoadBalancerPoliciesList" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerPoliciesList;

new ElasticloadbalancingLoadBalancerPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.get"></a>

```java
public ElasticloadbalancingLoadBalancerPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElasticloadbalancingLoadBalancerPolicies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>>

---


### ElasticloadbalancingLoadBalancerPoliciesOutputReference <a name="ElasticloadbalancingLoadBalancerPoliciesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference;

new ElasticloadbalancingLoadBalancerPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetInstancePorts">resetInstancePorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetLoadBalancerPorts">resetLoadBalancerPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetPolicyName">resetPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetPolicyType">resetPolicyType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.putAttributes"></a>

```java
public void putAttributes(IResolvable|java.util.List<ElasticloadbalancingLoadBalancerPoliciesAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.putAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetInstancePorts` <a name="resetInstancePorts" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetInstancePorts"></a>

```java
public void resetInstancePorts()
```

##### `resetLoadBalancerPorts` <a name="resetLoadBalancerPorts" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetLoadBalancerPorts"></a>

```java
public void resetLoadBalancerPorts()
```

##### `resetPolicyName` <a name="resetPolicyName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetPolicyName"></a>

```java
public void resetPolicyName()
```

##### `resetPolicyType` <a name="resetPolicyType" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetPolicyType"></a>

```java
public void resetPolicyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList">ElasticloadbalancingLoadBalancerPoliciesAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.attributesInput">attributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.instancePortsInput">instancePortsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.loadBalancerPortsInput">loadBalancerPortsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyTypeInput">policyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.instancePorts">instancePorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.loadBalancerPorts">loadBalancerPorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.attributes"></a>

```java
public ElasticloadbalancingLoadBalancerPoliciesAttributesList getAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList">ElasticloadbalancingLoadBalancerPoliciesAttributesList</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.attributesInput"></a>

```java
public IResolvable|java.util.List<ElasticloadbalancingLoadBalancerPoliciesAttributes> getAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>>

---

##### `instancePortsInput`<sup>Optional</sup> <a name="instancePortsInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.instancePortsInput"></a>

```java
public java.util.List<java.lang.String> getInstancePortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loadBalancerPortsInput`<sup>Optional</sup> <a name="loadBalancerPortsInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.loadBalancerPortsInput"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyNameInput"></a>

```java
public java.lang.String getPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyTypeInput"></a>

```java
public java.lang.String getPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `instancePorts`<sup>Required</sup> <a name="instancePorts" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.instancePorts"></a>

```java
public java.util.List<java.lang.String> getInstancePorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loadBalancerPorts`<sup>Required</sup> <a name="loadBalancerPorts" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.loadBalancerPorts"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticloadbalancingLoadBalancerPolicies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>

---


### ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference <a name="ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference;

new ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.ownerAlias">ownerAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroup">ElasticloadbalancingLoadBalancerSourceSecurityGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `ownerAlias`<sup>Required</sup> <a name="ownerAlias" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.ownerAlias"></a>

```java
public java.lang.String getOwnerAlias();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.internalValue"></a>

```java
public ElasticloadbalancingLoadBalancerSourceSecurityGroup getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroup">ElasticloadbalancingLoadBalancerSourceSecurityGroup</a>

---


### ElasticloadbalancingLoadBalancerTagsList <a name="ElasticloadbalancingLoadBalancerTagsList" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerTagsList;

new ElasticloadbalancingLoadBalancerTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.get"></a>

```java
public ElasticloadbalancingLoadBalancerTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElasticloadbalancingLoadBalancerTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>>

---


### ElasticloadbalancingLoadBalancerTagsOutputReference <a name="ElasticloadbalancingLoadBalancerTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticloadbalancing_load_balancer.ElasticloadbalancingLoadBalancerTagsOutputReference;

new ElasticloadbalancingLoadBalancerTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticloadbalancingLoadBalancerTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>

---



