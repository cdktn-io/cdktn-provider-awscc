# `elasticloadbalancingLoadBalancer` Submodule <a name="`elasticloadbalancingLoadBalancer` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticloadbalancingLoadBalancer <a name="ElasticloadbalancingLoadBalancer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer awscc_elasticloadbalancing_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  listeners: IResolvable | typing.List[ElasticloadbalancingLoadBalancerListeners],
  access_logging_policy: ElasticloadbalancingLoadBalancerAccessLoggingPolicy = None,
  app_cookie_stickiness_policy: IResolvable | typing.List[ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy] = None,
  availability_zones: typing.List[str] = None,
  connection_draining_policy: ElasticloadbalancingLoadBalancerConnectionDrainingPolicy = None,
  connection_settings: ElasticloadbalancingLoadBalancerConnectionSettings = None,
  cross_zone: bool | IResolvable = None,
  health_check: ElasticloadbalancingLoadBalancerHealthCheck = None,
  instances: typing.List[str] = None,
  lb_cookie_stickiness_policy: IResolvable | typing.List[ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy] = None,
  load_balancer_name: str = None,
  policies: IResolvable | typing.List[ElasticloadbalancingLoadBalancerPolicies] = None,
  scheme: str = None,
  security_groups: typing.List[str] = None,
  subnets: typing.List[str] = None,
  tags: IResolvable | typing.List[ElasticloadbalancingLoadBalancerTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.listeners">listeners</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>]</code> | The Listeners for the load balancer. You can specify at most one listener per port. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.accessLoggingPolicy">access_logging_policy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a></code> | Information about where and how access logs are stored for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.appCookieStickinessPolicy">app_cookie_stickiness_policy</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>]</code> | Information about a policy for application-controlled session stickiness. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | The Availability Zones for a load balancer in a default VPC. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.connectionDrainingPolicy">connection_draining_policy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a></code> | If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.connectionSettings">connection_settings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a></code> | If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.crossZone">cross_zone</a></code> | <code>bool \| cdktn.IResolvable</code> | If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.healthCheck">health_check</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a></code> | The health check settings to use when evaluating the health of your EC2 instances. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.instances">instances</a></code> | <code>typing.List[str]</code> | The IDs of the instances for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.lbCookieStickinessPolicy">lb_cookie_stickiness_policy</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>]</code> | Information about a policy for duration-based session stickiness. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.loadBalancerName">load_balancer_name</a></code> | <code>str</code> | The name of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.policies">policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>]</code> | The policies defined for your Classic Load Balancer. Specify only back-end server policies. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.scheme">scheme</a></code> | <code>str</code> | The type of load balancer. Valid only for load balancers in a VPC. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | The security groups for the load balancer. Valid only for load balancers in a VPC. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.subnets">subnets</a></code> | <code>typing.List[str]</code> | The IDs of the subnets for the load balancer. You can specify at most one subnet per Availability Zone. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>]</code> | The tags associated with a load balancer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.listeners"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>]

The Listeners for the load balancer. You can specify at most one listener per port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#listeners ElasticloadbalancingLoadBalancer#listeners}

---

##### `access_logging_policy`<sup>Optional</sup> <a name="access_logging_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.accessLoggingPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a>

Information about where and how access logs are stored for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#access_logging_policy ElasticloadbalancingLoadBalancer#access_logging_policy}

---

##### `app_cookie_stickiness_policy`<sup>Optional</sup> <a name="app_cookie_stickiness_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.appCookieStickinessPolicy"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>]

Information about a policy for application-controlled session stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#app_cookie_stickiness_policy ElasticloadbalancingLoadBalancer#app_cookie_stickiness_policy}

---

##### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.availabilityZones"></a>

- *Type:* typing.List[str]

The Availability Zones for a load balancer in a default VPC.

For a load balancer in a nondefault VPC, specify Subnets instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#availability_zones ElasticloadbalancingLoadBalancer#availability_zones}

---

##### `connection_draining_policy`<sup>Optional</sup> <a name="connection_draining_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.connectionDrainingPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a>

If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#connection_draining_policy ElasticloadbalancingLoadBalancer#connection_draining_policy}

---

##### `connection_settings`<sup>Optional</sup> <a name="connection_settings" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.connectionSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a>

If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#connection_settings ElasticloadbalancingLoadBalancer#connection_settings}

---

##### `cross_zone`<sup>Optional</sup> <a name="cross_zone" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.crossZone"></a>

- *Type:* bool | cdktn.IResolvable

If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#cross_zone ElasticloadbalancingLoadBalancer#cross_zone}

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.healthCheck"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a>

The health check settings to use when evaluating the health of your EC2 instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#health_check ElasticloadbalancingLoadBalancer#health_check}

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.instances"></a>

- *Type:* typing.List[str]

The IDs of the instances for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#instances ElasticloadbalancingLoadBalancer#instances}

---

##### `lb_cookie_stickiness_policy`<sup>Optional</sup> <a name="lb_cookie_stickiness_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.lbCookieStickinessPolicy"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>]

Information about a policy for duration-based session stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#lb_cookie_stickiness_policy ElasticloadbalancingLoadBalancer#lb_cookie_stickiness_policy}

---

##### `load_balancer_name`<sup>Optional</sup> <a name="load_balancer_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.loadBalancerName"></a>

- *Type:* str

The name of the load balancer.

This name must be unique within your set of load balancers for the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#load_balancer_name ElasticloadbalancingLoadBalancer#load_balancer_name}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.policies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>]

The policies defined for your Classic Load Balancer. Specify only back-end server policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#policies ElasticloadbalancingLoadBalancer#policies}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.scheme"></a>

- *Type:* str

The type of load balancer. Valid only for load balancers in a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#scheme ElasticloadbalancingLoadBalancer#scheme}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.securityGroups"></a>

- *Type:* typing.List[str]

The security groups for the load balancer. Valid only for load balancers in a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#security_groups ElasticloadbalancingLoadBalancer#security_groups}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.subnets"></a>

- *Type:* typing.List[str]

The IDs of the subnets for the load balancer. You can specify at most one subnet per Availability Zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#subnets ElasticloadbalancingLoadBalancer#subnets}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>]

The tags associated with a load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#tags ElasticloadbalancingLoadBalancer#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAccessLoggingPolicy">put_access_logging_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAppCookieStickinessPolicy">put_app_cookie_stickiness_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putConnectionDrainingPolicy">put_connection_draining_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putConnectionSettings">put_connection_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putHealthCheck">put_health_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putLbCookieStickinessPolicy">put_lb_cookie_stickiness_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putListeners">put_listeners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putPolicies">put_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetAccessLoggingPolicy">reset_access_logging_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetAppCookieStickinessPolicy">reset_app_cookie_stickiness_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetAvailabilityZones">reset_availability_zones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetConnectionDrainingPolicy">reset_connection_draining_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetConnectionSettings">reset_connection_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetCrossZone">reset_cross_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetHealthCheck">reset_health_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetInstances">reset_instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetLbCookieStickinessPolicy">reset_lb_cookie_stickiness_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetLoadBalancerName">reset_load_balancer_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetPolicies">reset_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetScheme">reset_scheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetSubnets">reset_subnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_logging_policy` <a name="put_access_logging_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAccessLoggingPolicy"></a>

```python
def put_access_logging_policy(
  emit_interval: typing.Union[int, float] = None,
  enabled: bool | IResolvable = None,
  s3_bucket_name: str = None,
  s3_bucket_prefix: str = None
) -> None
```

###### `emit_interval`<sup>Optional</sup> <a name="emit_interval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAccessLoggingPolicy.parameter.emitInterval"></a>

- *Type:* typing.Union[int, float]

The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes.

Default: 60 minutes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#emit_interval ElasticloadbalancingLoadBalancer#emit_interval}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAccessLoggingPolicy.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether access logs are enabled for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#enabled ElasticloadbalancingLoadBalancer#enabled}

---

###### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAccessLoggingPolicy.parameter.s3BucketName"></a>

- *Type:* str

The name of the Amazon S3 bucket where the access logs are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#s3_bucket_name ElasticloadbalancingLoadBalancer#s3_bucket_name}

---

###### `s3_bucket_prefix`<sup>Optional</sup> <a name="s3_bucket_prefix" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAccessLoggingPolicy.parameter.s3BucketPrefix"></a>

- *Type:* str

The logical hierarchy you created for your Amazon S3 bucket, for example `my-bucket-prefix/prod`.

If the prefix is not provided, the log is placed at the root level of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#s3_bucket_prefix ElasticloadbalancingLoadBalancer#s3_bucket_prefix}

---

##### `put_app_cookie_stickiness_policy` <a name="put_app_cookie_stickiness_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAppCookieStickinessPolicy"></a>

```python
def put_app_cookie_stickiness_policy(
  value: IResolvable | typing.List[ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putAppCookieStickinessPolicy.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>]

---

##### `put_connection_draining_policy` <a name="put_connection_draining_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putConnectionDrainingPolicy"></a>

```python
def put_connection_draining_policy(
  enabled: bool | IResolvable = None,
  timeout: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putConnectionDrainingPolicy.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether connection draining is enabled for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#enabled ElasticloadbalancingLoadBalancer#enabled}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putConnectionDrainingPolicy.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

The maximum time, in seconds, to keep the existing connections open before deregistering the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#timeout ElasticloadbalancingLoadBalancer#timeout}

---

##### `put_connection_settings` <a name="put_connection_settings" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putConnectionSettings"></a>

```python
def put_connection_settings(
  idle_timeout: typing.Union[int, float] = None
) -> None
```

###### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putConnectionSettings.parameter.idleTimeout"></a>

- *Type:* typing.Union[int, float]

The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#idle_timeout ElasticloadbalancingLoadBalancer#idle_timeout}

---

##### `put_health_check` <a name="put_health_check" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putHealthCheck"></a>

```python
def put_health_check(
  healthy_threshold: str = None,
  interval: str = None,
  target: str = None,
  timeout: str = None,
  unhealthy_threshold: str = None
) -> None
```

###### `healthy_threshold`<sup>Optional</sup> <a name="healthy_threshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putHealthCheck.parameter.healthyThreshold"></a>

- *Type:* str

The number of consecutive health checks successes required before moving the instance to the `Healthy` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#healthy_threshold ElasticloadbalancingLoadBalancer#healthy_threshold}

---

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putHealthCheck.parameter.interval"></a>

- *Type:* str

The approximate interval, in seconds, between health checks of an individual instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#interval ElasticloadbalancingLoadBalancer#interval}

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putHealthCheck.parameter.target"></a>

- *Type:* str

The instance being checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#target ElasticloadbalancingLoadBalancer#target}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putHealthCheck.parameter.timeout"></a>

- *Type:* str

The amount of time, in seconds, during which no response means a failed health check.

This value must be less than the `Interval` value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#timeout ElasticloadbalancingLoadBalancer#timeout}

---

###### `unhealthy_threshold`<sup>Optional</sup> <a name="unhealthy_threshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putHealthCheck.parameter.unhealthyThreshold"></a>

- *Type:* str

The number of consecutive health check failures required before moving the instance to the `Unhealthy` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#unhealthy_threshold ElasticloadbalancingLoadBalancer#unhealthy_threshold}

---

##### `put_lb_cookie_stickiness_policy` <a name="put_lb_cookie_stickiness_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putLbCookieStickinessPolicy"></a>

```python
def put_lb_cookie_stickiness_policy(
  value: IResolvable | typing.List[ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putLbCookieStickinessPolicy.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>]

---

##### `put_listeners` <a name="put_listeners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putListeners"></a>

```python
def put_listeners(
  value: IResolvable | typing.List[ElasticloadbalancingLoadBalancerListeners]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putListeners.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>]

---

##### `put_policies` <a name="put_policies" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putPolicies"></a>

```python
def put_policies(
  value: IResolvable | typing.List[ElasticloadbalancingLoadBalancerPolicies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putPolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ElasticloadbalancingLoadBalancerTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>]

---

##### `reset_access_logging_policy` <a name="reset_access_logging_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetAccessLoggingPolicy"></a>

```python
def reset_access_logging_policy() -> None
```

##### `reset_app_cookie_stickiness_policy` <a name="reset_app_cookie_stickiness_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetAppCookieStickinessPolicy"></a>

```python
def reset_app_cookie_stickiness_policy() -> None
```

##### `reset_availability_zones` <a name="reset_availability_zones" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetAvailabilityZones"></a>

```python
def reset_availability_zones() -> None
```

##### `reset_connection_draining_policy` <a name="reset_connection_draining_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetConnectionDrainingPolicy"></a>

```python
def reset_connection_draining_policy() -> None
```

##### `reset_connection_settings` <a name="reset_connection_settings" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetConnectionSettings"></a>

```python
def reset_connection_settings() -> None
```

##### `reset_cross_zone` <a name="reset_cross_zone" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetCrossZone"></a>

```python
def reset_cross_zone() -> None
```

##### `reset_health_check` <a name="reset_health_check" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetHealthCheck"></a>

```python
def reset_health_check() -> None
```

##### `reset_instances` <a name="reset_instances" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetInstances"></a>

```python
def reset_instances() -> None
```

##### `reset_lb_cookie_stickiness_policy` <a name="reset_lb_cookie_stickiness_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetLbCookieStickinessPolicy"></a>

```python
def reset_lb_cookie_stickiness_policy() -> None
```

##### `reset_load_balancer_name` <a name="reset_load_balancer_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetLoadBalancerName"></a>

```python
def reset_load_balancer_name() -> None
```

##### `reset_policies` <a name="reset_policies" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetPolicies"></a>

```python
def reset_policies() -> None
```

##### `reset_scheme` <a name="reset_scheme" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetScheme"></a>

```python
def reset_scheme() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetSubnets"></a>

```python
def reset_subnets() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ElasticloadbalancingLoadBalancer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isConstruct"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isTerraformElement"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isTerraformResource"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ElasticloadbalancingLoadBalancer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ElasticloadbalancingLoadBalancer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ElasticloadbalancingLoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ElasticloadbalancingLoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.accessLoggingPolicy">access_logging_policy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference">ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.appCookieStickinessPolicy">app_cookie_stickiness_policy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.canonicalHostedZoneName">canonical_hosted_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.canonicalHostedZoneNameId">canonical_hosted_zone_name_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionDrainingPolicy">connection_draining_policy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference">ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionSettings">connection_settings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference">ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.healthCheck">health_check</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference">ElasticloadbalancingLoadBalancerHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.lbCookieStickinessPolicy">lb_cookie_stickiness_policy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.listeners">listeners</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList">ElasticloadbalancingLoadBalancerListenersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList">ElasticloadbalancingLoadBalancerPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.sourceSecurityGroup">source_security_group</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference">ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList">ElasticloadbalancingLoadBalancerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.accessLoggingPolicyInput">access_logging_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.appCookieStickinessPolicyInput">app_cookie_stickiness_policy_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.availabilityZonesInput">availability_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionDrainingPolicyInput">connection_draining_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionSettingsInput">connection_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.crossZoneInput">cross_zone_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.healthCheckInput">health_check_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.instancesInput">instances_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.lbCookieStickinessPolicyInput">lb_cookie_stickiness_policy_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.listenersInput">listeners_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.loadBalancerNameInput">load_balancer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.policiesInput">policies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.crossZone">cross_zone</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.instances">instances</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.loadBalancerName">load_balancer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_logging_policy`<sup>Required</sup> <a name="access_logging_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.accessLoggingPolicy"></a>

```python
access_logging_policy: ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference">ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference</a>

---

##### `app_cookie_stickiness_policy`<sup>Required</sup> <a name="app_cookie_stickiness_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.appCookieStickinessPolicy"></a>

```python
app_cookie_stickiness_policy: ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList</a>

---

##### `canonical_hosted_zone_name`<sup>Required</sup> <a name="canonical_hosted_zone_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.canonicalHostedZoneName"></a>

```python
canonical_hosted_zone_name: str
```

- *Type:* str

---

##### `canonical_hosted_zone_name_id`<sup>Required</sup> <a name="canonical_hosted_zone_name_id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.canonicalHostedZoneNameId"></a>

```python
canonical_hosted_zone_name_id: str
```

- *Type:* str

---

##### `connection_draining_policy`<sup>Required</sup> <a name="connection_draining_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionDrainingPolicy"></a>

```python
connection_draining_policy: ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference">ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference</a>

---

##### `connection_settings`<sup>Required</sup> <a name="connection_settings" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionSettings"></a>

```python
connection_settings: ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference">ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference</a>

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.healthCheck"></a>

```python
health_check: ElasticloadbalancingLoadBalancerHealthCheckOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference">ElasticloadbalancingLoadBalancerHealthCheckOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lb_cookie_stickiness_policy`<sup>Required</sup> <a name="lb_cookie_stickiness_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.lbCookieStickinessPolicy"></a>

```python
lb_cookie_stickiness_policy: ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList</a>

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.listeners"></a>

```python
listeners: ElasticloadbalancingLoadBalancerListenersList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList">ElasticloadbalancingLoadBalancerListenersList</a>

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.policies"></a>

```python
policies: ElasticloadbalancingLoadBalancerPoliciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList">ElasticloadbalancingLoadBalancerPoliciesList</a>

---

##### `source_security_group`<sup>Required</sup> <a name="source_security_group" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.sourceSecurityGroup"></a>

```python
source_security_group: ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference">ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.tags"></a>

```python
tags: ElasticloadbalancingLoadBalancerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList">ElasticloadbalancingLoadBalancerTagsList</a>

---

##### `access_logging_policy_input`<sup>Optional</sup> <a name="access_logging_policy_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.accessLoggingPolicyInput"></a>

```python
access_logging_policy_input: IResolvable | ElasticloadbalancingLoadBalancerAccessLoggingPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a>

---

##### `app_cookie_stickiness_policy_input`<sup>Optional</sup> <a name="app_cookie_stickiness_policy_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.appCookieStickinessPolicyInput"></a>

```python
app_cookie_stickiness_policy_input: IResolvable | typing.List[ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>]

---

##### `availability_zones_input`<sup>Optional</sup> <a name="availability_zones_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.availabilityZonesInput"></a>

```python
availability_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_draining_policy_input`<sup>Optional</sup> <a name="connection_draining_policy_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionDrainingPolicyInput"></a>

```python
connection_draining_policy_input: IResolvable | ElasticloadbalancingLoadBalancerConnectionDrainingPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a>

---

##### `connection_settings_input`<sup>Optional</sup> <a name="connection_settings_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.connectionSettingsInput"></a>

```python
connection_settings_input: IResolvable | ElasticloadbalancingLoadBalancerConnectionSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a>

---

##### `cross_zone_input`<sup>Optional</sup> <a name="cross_zone_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.crossZoneInput"></a>

```python
cross_zone_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `health_check_input`<sup>Optional</sup> <a name="health_check_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.healthCheckInput"></a>

```python
health_check_input: IResolvable | ElasticloadbalancingLoadBalancerHealthCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a>

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.instancesInput"></a>

```python
instances_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lb_cookie_stickiness_policy_input`<sup>Optional</sup> <a name="lb_cookie_stickiness_policy_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.lbCookieStickinessPolicyInput"></a>

```python
lb_cookie_stickiness_policy_input: IResolvable | typing.List[ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>]

---

##### `listeners_input`<sup>Optional</sup> <a name="listeners_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.listenersInput"></a>

```python
listeners_input: IResolvable | typing.List[ElasticloadbalancingLoadBalancerListeners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>]

---

##### `load_balancer_name_input`<sup>Optional</sup> <a name="load_balancer_name_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.loadBalancerNameInput"></a>

```python
load_balancer_name_input: str
```

- *Type:* str

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.policiesInput"></a>

```python
policies_input: IResolvable | typing.List[ElasticloadbalancingLoadBalancerPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>]

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ElasticloadbalancingLoadBalancerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cross_zone`<sup>Required</sup> <a name="cross_zone" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.crossZone"></a>

```python
cross_zone: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.instances"></a>

```python
instances: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `load_balancer_name`<sup>Required</sup> <a name="load_balancer_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.loadBalancerName"></a>

```python
load_balancer_name: str
```

- *Type:* str

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticloadbalancingLoadBalancerAccessLoggingPolicy <a name="ElasticloadbalancingLoadBalancerAccessLoggingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy(
  emit_interval: typing.Union[int, float] = None,
  enabled: bool | IResolvable = None,
  s3_bucket_name: str = None,
  s3_bucket_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.emitInterval">emit_interval</a></code> | <code>typing.Union[int, float]</code> | The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether access logs are enabled for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | The name of the Amazon S3 bucket where the access logs are stored. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.s3BucketPrefix">s3_bucket_prefix</a></code> | <code>str</code> | The logical hierarchy you created for your Amazon S3 bucket, for example `my-bucket-prefix/prod`. |

---

##### `emit_interval`<sup>Optional</sup> <a name="emit_interval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.emitInterval"></a>

```python
emit_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes.

Default: 60 minutes

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#emit_interval ElasticloadbalancingLoadBalancer#emit_interval}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether access logs are enabled for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#enabled ElasticloadbalancingLoadBalancer#enabled}

---

##### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

The name of the Amazon S3 bucket where the access logs are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#s3_bucket_name ElasticloadbalancingLoadBalancer#s3_bucket_name}

---

##### `s3_bucket_prefix`<sup>Optional</sup> <a name="s3_bucket_prefix" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy.property.s3BucketPrefix"></a>

```python
s3_bucket_prefix: str
```

- *Type:* str

The logical hierarchy you created for your Amazon S3 bucket, for example `my-bucket-prefix/prod`.

If the prefix is not provided, the log is placed at the root level of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#s3_bucket_prefix ElasticloadbalancingLoadBalancer#s3_bucket_prefix}

---

### ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy <a name="ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy(
  cookie_name: str = None,
  policy_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy.property.cookieName">cookie_name</a></code> | <code>str</code> | The name of the application cookie used for stickiness. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy.property.policyName">policy_name</a></code> | <code>str</code> | The mnemonic name for the policy being created. |

---

##### `cookie_name`<sup>Optional</sup> <a name="cookie_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy.property.cookieName"></a>

```python
cookie_name: str
```

- *Type:* str

The name of the application cookie used for stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#cookie_name ElasticloadbalancingLoadBalancer#cookie_name}

---

##### `policy_name`<sup>Optional</sup> <a name="policy_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

The mnemonic name for the policy being created.

The name must be unique within a set of policies for this load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#policy_name ElasticloadbalancingLoadBalancer#policy_name}

---

### ElasticloadbalancingLoadBalancerConfig <a name="ElasticloadbalancingLoadBalancerConfig" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  listeners: IResolvable | typing.List[ElasticloadbalancingLoadBalancerListeners],
  access_logging_policy: ElasticloadbalancingLoadBalancerAccessLoggingPolicy = None,
  app_cookie_stickiness_policy: IResolvable | typing.List[ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy] = None,
  availability_zones: typing.List[str] = None,
  connection_draining_policy: ElasticloadbalancingLoadBalancerConnectionDrainingPolicy = None,
  connection_settings: ElasticloadbalancingLoadBalancerConnectionSettings = None,
  cross_zone: bool | IResolvable = None,
  health_check: ElasticloadbalancingLoadBalancerHealthCheck = None,
  instances: typing.List[str] = None,
  lb_cookie_stickiness_policy: IResolvable | typing.List[ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy] = None,
  load_balancer_name: str = None,
  policies: IResolvable | typing.List[ElasticloadbalancingLoadBalancerPolicies] = None,
  scheme: str = None,
  security_groups: typing.List[str] = None,
  subnets: typing.List[str] = None,
  tags: IResolvable | typing.List[ElasticloadbalancingLoadBalancerTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.listeners">listeners</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>]</code> | The Listeners for the load balancer. You can specify at most one listener per port. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.accessLoggingPolicy">access_logging_policy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a></code> | Information about where and how access logs are stored for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.appCookieStickinessPolicy">app_cookie_stickiness_policy</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>]</code> | Information about a policy for application-controlled session stickiness. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | The Availability Zones for a load balancer in a default VPC. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.connectionDrainingPolicy">connection_draining_policy</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a></code> | If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.connectionSettings">connection_settings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a></code> | If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.crossZone">cross_zone</a></code> | <code>bool \| cdktn.IResolvable</code> | If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.healthCheck">health_check</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a></code> | The health check settings to use when evaluating the health of your EC2 instances. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.instances">instances</a></code> | <code>typing.List[str]</code> | The IDs of the instances for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.lbCookieStickinessPolicy">lb_cookie_stickiness_policy</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>]</code> | Information about a policy for duration-based session stickiness. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.loadBalancerName">load_balancer_name</a></code> | <code>str</code> | The name of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.policies">policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>]</code> | The policies defined for your Classic Load Balancer. Specify only back-end server policies. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.scheme">scheme</a></code> | <code>str</code> | The type of load balancer. Valid only for load balancers in a VPC. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | The security groups for the load balancer. Valid only for load balancers in a VPC. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | The IDs of the subnets for the load balancer. You can specify at most one subnet per Availability Zone. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>]</code> | The tags associated with a load balancer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.listeners"></a>

```python
listeners: IResolvable | typing.List[ElasticloadbalancingLoadBalancerListeners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>]

The Listeners for the load balancer. You can specify at most one listener per port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#listeners ElasticloadbalancingLoadBalancer#listeners}

---

##### `access_logging_policy`<sup>Optional</sup> <a name="access_logging_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.accessLoggingPolicy"></a>

```python
access_logging_policy: ElasticloadbalancingLoadBalancerAccessLoggingPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a>

Information about where and how access logs are stored for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#access_logging_policy ElasticloadbalancingLoadBalancer#access_logging_policy}

---

##### `app_cookie_stickiness_policy`<sup>Optional</sup> <a name="app_cookie_stickiness_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.appCookieStickinessPolicy"></a>

```python
app_cookie_stickiness_policy: IResolvable | typing.List[ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>]

Information about a policy for application-controlled session stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#app_cookie_stickiness_policy ElasticloadbalancingLoadBalancer#app_cookie_stickiness_policy}

---

##### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

The Availability Zones for a load balancer in a default VPC.

For a load balancer in a nondefault VPC, specify Subnets instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#availability_zones ElasticloadbalancingLoadBalancer#availability_zones}

---

##### `connection_draining_policy`<sup>Optional</sup> <a name="connection_draining_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.connectionDrainingPolicy"></a>

```python
connection_draining_policy: ElasticloadbalancingLoadBalancerConnectionDrainingPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a>

If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#connection_draining_policy ElasticloadbalancingLoadBalancer#connection_draining_policy}

---

##### `connection_settings`<sup>Optional</sup> <a name="connection_settings" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.connectionSettings"></a>

```python
connection_settings: ElasticloadbalancingLoadBalancerConnectionSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a>

If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#connection_settings ElasticloadbalancingLoadBalancer#connection_settings}

---

##### `cross_zone`<sup>Optional</sup> <a name="cross_zone" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.crossZone"></a>

```python
cross_zone: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#cross_zone ElasticloadbalancingLoadBalancer#cross_zone}

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.healthCheck"></a>

```python
health_check: ElasticloadbalancingLoadBalancerHealthCheck
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a>

The health check settings to use when evaluating the health of your EC2 instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#health_check ElasticloadbalancingLoadBalancer#health_check}

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.instances"></a>

```python
instances: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of the instances for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#instances ElasticloadbalancingLoadBalancer#instances}

---

##### `lb_cookie_stickiness_policy`<sup>Optional</sup> <a name="lb_cookie_stickiness_policy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.lbCookieStickinessPolicy"></a>

```python
lb_cookie_stickiness_policy: IResolvable | typing.List[ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>]

Information about a policy for duration-based session stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#lb_cookie_stickiness_policy ElasticloadbalancingLoadBalancer#lb_cookie_stickiness_policy}

---

##### `load_balancer_name`<sup>Optional</sup> <a name="load_balancer_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.loadBalancerName"></a>

```python
load_balancer_name: str
```

- *Type:* str

The name of the load balancer.

This name must be unique within your set of load balancers for the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#load_balancer_name ElasticloadbalancingLoadBalancer#load_balancer_name}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.policies"></a>

```python
policies: IResolvable | typing.List[ElasticloadbalancingLoadBalancerPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>]

The policies defined for your Classic Load Balancer. Specify only back-end server policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#policies ElasticloadbalancingLoadBalancer#policies}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

The type of load balancer. Valid only for load balancers in a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#scheme ElasticloadbalancingLoadBalancer#scheme}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

The security groups for the load balancer. Valid only for load balancers in a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#security_groups ElasticloadbalancingLoadBalancer#security_groups}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of the subnets for the load balancer. You can specify at most one subnet per Availability Zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#subnets ElasticloadbalancingLoadBalancer#subnets}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ElasticloadbalancingLoadBalancerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>]

The tags associated with a load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#tags ElasticloadbalancingLoadBalancer#tags}

---

### ElasticloadbalancingLoadBalancerConnectionDrainingPolicy <a name="ElasticloadbalancingLoadBalancerConnectionDrainingPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy(
  enabled: bool | IResolvable = None,
  timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether connection draining is enabled for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The maximum time, in seconds, to keep the existing connections open before deregistering the instances. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether connection draining is enabled for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#enabled ElasticloadbalancingLoadBalancer#enabled}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum time, in seconds, to keep the existing connections open before deregistering the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#timeout ElasticloadbalancingLoadBalancer#timeout}

---

### ElasticloadbalancingLoadBalancerConnectionSettings <a name="ElasticloadbalancingLoadBalancerConnectionSettings" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings(
  idle_timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings.property.idleTimeout">idle_timeout</a></code> | <code>typing.Union[int, float]</code> | The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer. |

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings.property.idleTimeout"></a>

```python
idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#idle_timeout ElasticloadbalancingLoadBalancer#idle_timeout}

---

### ElasticloadbalancingLoadBalancerHealthCheck <a name="ElasticloadbalancingLoadBalancerHealthCheck" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck(
  healthy_threshold: str = None,
  interval: str = None,
  target: str = None,
  timeout: str = None,
  unhealthy_threshold: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.healthyThreshold">healthy_threshold</a></code> | <code>str</code> | The number of consecutive health checks successes required before moving the instance to the `Healthy` state. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.interval">interval</a></code> | <code>str</code> | The approximate interval, in seconds, between health checks of an individual instance. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.target">target</a></code> | <code>str</code> | The instance being checked. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.timeout">timeout</a></code> | <code>str</code> | The amount of time, in seconds, during which no response means a failed health check. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>str</code> | The number of consecutive health check failures required before moving the instance to the `Unhealthy` state. |

---

##### `healthy_threshold`<sup>Optional</sup> <a name="healthy_threshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.healthyThreshold"></a>

```python
healthy_threshold: str
```

- *Type:* str

The number of consecutive health checks successes required before moving the instance to the `Healthy` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#healthy_threshold ElasticloadbalancingLoadBalancer#healthy_threshold}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.interval"></a>

```python
interval: str
```

- *Type:* str

The approximate interval, in seconds, between health checks of an individual instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#interval ElasticloadbalancingLoadBalancer#interval}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.target"></a>

```python
target: str
```

- *Type:* str

The instance being checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#target ElasticloadbalancingLoadBalancer#target}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

The amount of time, in seconds, during which no response means a failed health check.

This value must be less than the `Interval` value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#timeout ElasticloadbalancingLoadBalancer#timeout}

---

##### `unhealthy_threshold`<sup>Optional</sup> <a name="unhealthy_threshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: str
```

- *Type:* str

The number of consecutive health check failures required before moving the instance to the `Unhealthy` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#unhealthy_threshold ElasticloadbalancingLoadBalancer#unhealthy_threshold}

---

### ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy <a name="ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy(
  cookie_expiration_period: str = None,
  policy_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy.property.cookieExpirationPeriod">cookie_expiration_period</a></code> | <code>str</code> | The time period, in seconds, after which the cookie should be considered stale. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy.property.policyName">policy_name</a></code> | <code>str</code> | The name of the policy. This name must be unique within the set of policies for this load balancer. |

---

##### `cookie_expiration_period`<sup>Optional</sup> <a name="cookie_expiration_period" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy.property.cookieExpirationPeriod"></a>

```python
cookie_expiration_period: str
```

- *Type:* str

The time period, in seconds, after which the cookie should be considered stale.

If this parameter is not specified, the stickiness session lasts for the duration of the browser session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#cookie_expiration_period ElasticloadbalancingLoadBalancer#cookie_expiration_period}

---

##### `policy_name`<sup>Optional</sup> <a name="policy_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

The name of the policy. This name must be unique within the set of policies for this load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#policy_name ElasticloadbalancingLoadBalancer#policy_name}

---

### ElasticloadbalancingLoadBalancerListeners <a name="ElasticloadbalancingLoadBalancerListeners" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners(
  instance_port: str,
  load_balancer_port: str,
  protocol: str,
  instance_protocol: str = None,
  policy_names: typing.List[str] = None,
  ssl_certificate_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.instancePort">instance_port</a></code> | <code>str</code> | The port on which the instance is listening. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.loadBalancerPort">load_balancer_port</a></code> | <code>str</code> | The port on which the load balancer is listening. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.protocol">protocol</a></code> | <code>str</code> | The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.instanceProtocol">instance_protocol</a></code> | <code>str</code> | The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.policyNames">policy_names</a></code> | <code>typing.List[str]</code> | The names of the policies to associate with the listener. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.sslCertificateId">ssl_certificate_id</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the server certificate. |

---

##### `instance_port`<sup>Required</sup> <a name="instance_port" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.instancePort"></a>

```python
instance_port: str
```

- *Type:* str

The port on which the instance is listening.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#instance_port ElasticloadbalancingLoadBalancer#instance_port}

---

##### `load_balancer_port`<sup>Required</sup> <a name="load_balancer_port" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.loadBalancerPort"></a>

```python
load_balancer_port: str
```

- *Type:* str

The port on which the load balancer is listening.

On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#load_balancer_port ElasticloadbalancingLoadBalancer#load_balancer_port}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#protocol ElasticloadbalancingLoadBalancer#protocol}

---

##### `instance_protocol`<sup>Optional</sup> <a name="instance_protocol" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.instanceProtocol"></a>

```python
instance_protocol: str
```

- *Type:* str

The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL.

If the front-end protocol is TCP or SSL, the back-end protocol must be TCP or SSL. If the front-end protocol is HTTP or HTTPS, the back-end protocol must be HTTP or HTTPS.

If there is another listener with the same `InstancePort` whose `InstanceProtocol` is secure, (HTTPS or SSL), the listener's `InstanceProtocol` must also be secure.

If there is another listener with the same `InstancePort` whose `InstanceProtocol` is HTTP or TCP, the listener's `InstanceProtocol` must be HTTP or TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#instance_protocol ElasticloadbalancingLoadBalancer#instance_protocol}

---

##### `policy_names`<sup>Optional</sup> <a name="policy_names" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.policyNames"></a>

```python
policy_names: typing.List[str]
```

- *Type:* typing.List[str]

The names of the policies to associate with the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#policy_names ElasticloadbalancingLoadBalancer#policy_names}

---

##### `ssl_certificate_id`<sup>Optional</sup> <a name="ssl_certificate_id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners.property.sslCertificateId"></a>

```python
ssl_certificate_id: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the server certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#ssl_certificate_id ElasticloadbalancingLoadBalancer#ssl_certificate_id}

---

### ElasticloadbalancingLoadBalancerPolicies <a name="ElasticloadbalancingLoadBalancerPolicies" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies(
  attributes: IResolvable | typing.List[ElasticloadbalancingLoadBalancerPoliciesAttributes] = None,
  instance_ports: typing.List[str] = None,
  load_balancer_ports: typing.List[str] = None,
  policy_name: str = None,
  policy_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.attributes">attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>]</code> | The policy attributes. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.instancePorts">instance_ports</a></code> | <code>typing.List[str]</code> | The instance ports for the policy. Required only for some policy types. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.loadBalancerPorts">load_balancer_ports</a></code> | <code>typing.List[str]</code> | The load balancer ports for the policy. Required only for some policy types. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.policyName">policy_name</a></code> | <code>str</code> | The name of the policy. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.policyType">policy_type</a></code> | <code>str</code> | The name of the policy type. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.attributes"></a>

```python
attributes: IResolvable | typing.List[ElasticloadbalancingLoadBalancerPoliciesAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>]

The policy attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#attributes ElasticloadbalancingLoadBalancer#attributes}

---

##### `instance_ports`<sup>Optional</sup> <a name="instance_ports" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.instancePorts"></a>

```python
instance_ports: typing.List[str]
```

- *Type:* typing.List[str]

The instance ports for the policy. Required only for some policy types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#instance_ports ElasticloadbalancingLoadBalancer#instance_ports}

---

##### `load_balancer_ports`<sup>Optional</sup> <a name="load_balancer_ports" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.loadBalancerPorts"></a>

```python
load_balancer_ports: typing.List[str]
```

- *Type:* typing.List[str]

The load balancer ports for the policy. Required only for some policy types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#load_balancer_ports ElasticloadbalancingLoadBalancer#load_balancer_ports}

---

##### `policy_name`<sup>Optional</sup> <a name="policy_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#policy_name ElasticloadbalancingLoadBalancer#policy_name}

---

##### `policy_type`<sup>Optional</sup> <a name="policy_type" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

The name of the policy type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#policy_type ElasticloadbalancingLoadBalancer#policy_type}

---

### ElasticloadbalancingLoadBalancerPoliciesAttributes <a name="ElasticloadbalancingLoadBalancerPoliciesAttributes" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#name ElasticloadbalancingLoadBalancer#name}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#value ElasticloadbalancingLoadBalancer#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#name ElasticloadbalancingLoadBalancer#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#value ElasticloadbalancingLoadBalancer#value}.

---

### ElasticloadbalancingLoadBalancerSourceSecurityGroup <a name="ElasticloadbalancingLoadBalancerSourceSecurityGroup" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroup.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroup()
```


### ElasticloadbalancingLoadBalancerTags <a name="ElasticloadbalancingLoadBalancerTags" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags.property.value">value</a></code> | <code>str</code> | The value for the tag. You can specify a value that's 1 to 256 characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with `aws:`. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#key ElasticloadbalancingLoadBalancer#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag. You can specify a value that's 1 to 256 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/elasticloadbalancing_load_balancer#value ElasticloadbalancingLoadBalancer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference <a name="ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetEmitInterval">reset_emit_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetS3BucketName">reset_s3_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetS3BucketPrefix">reset_s3_bucket_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_emit_interval` <a name="reset_emit_interval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetEmitInterval"></a>

```python
def reset_emit_interval() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_s3_bucket_name` <a name="reset_s3_bucket_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetS3BucketName"></a>

```python
def reset_s3_bucket_name() -> None
```

##### `reset_s3_bucket_prefix` <a name="reset_s3_bucket_prefix" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resetS3BucketPrefix"></a>

```python
def reset_s3_bucket_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.emitIntervalInput">emit_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketPrefixInput">s3_bucket_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.emitInterval">emit_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketPrefix">s3_bucket_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `emit_interval_input`<sup>Optional</sup> <a name="emit_interval_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.emitIntervalInput"></a>

```python
emit_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `s3_bucket_prefix_input`<sup>Optional</sup> <a name="s3_bucket_prefix_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketPrefixInput"></a>

```python
s3_bucket_prefix_input: str
```

- *Type:* str

---

##### `emit_interval`<sup>Required</sup> <a name="emit_interval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.emitInterval"></a>

```python
emit_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_bucket_prefix`<sup>Required</sup> <a name="s3_bucket_prefix" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketPrefix"></a>

```python
s3_bucket_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticloadbalancingLoadBalancerAccessLoggingPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAccessLoggingPolicy">ElasticloadbalancingLoadBalancerAccessLoggingPolicy</a>

---


### ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList <a name="ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>]

---


### ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference <a name="ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resetCookieName">reset_cookie_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resetPolicyName">reset_policy_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cookie_name` <a name="reset_cookie_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resetCookieName"></a>

```python
def reset_cookie_name() -> None
```

##### `reset_policy_name` <a name="reset_policy_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resetPolicyName"></a>

```python
def reset_policy_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.cookieNameInput">cookie_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.cookieName">cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookie_name_input`<sup>Optional</sup> <a name="cookie_name_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.cookieNameInput"></a>

```python
cookie_name_input: str
```

- *Type:* str

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `cookie_name`<sup>Required</sup> <a name="cookie_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.cookieName"></a>

```python
cookie_name: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">ElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>

---


### ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference <a name="ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticloadbalancingLoadBalancerConnectionDrainingPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionDrainingPolicy">ElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a>

---


### ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference <a name="ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resetIdleTimeout">reset_idle_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_idle_timeout` <a name="reset_idle_timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resetIdleTimeout"></a>

```python
def reset_idle_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.idleTimeoutInput">idle_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.idleTimeout">idle_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle_timeout_input`<sup>Optional</sup> <a name="idle_timeout_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.idleTimeoutInput"></a>

```python
idle_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_timeout`<sup>Required</sup> <a name="idle_timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.idleTimeout"></a>

```python
idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticloadbalancingLoadBalancerConnectionSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerConnectionSettings">ElasticloadbalancingLoadBalancerConnectionSettings</a>

---


### ElasticloadbalancingLoadBalancerHealthCheckOutputReference <a name="ElasticloadbalancingLoadBalancerHealthCheckOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetHealthyThreshold">reset_healthy_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetUnhealthyThreshold">reset_unhealthy_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_healthy_threshold` <a name="reset_healthy_threshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetHealthyThreshold"></a>

```python
def reset_healthy_threshold() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_unhealthy_threshold` <a name="reset_unhealthy_threshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.resetUnhealthyThreshold"></a>

```python
def reset_unhealthy_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.healthyThresholdInput">healthy_threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.intervalInput">interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.unhealthyThresholdInput">unhealthy_threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.healthyThreshold">healthy_threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.interval">interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `healthy_threshold_input`<sup>Optional</sup> <a name="healthy_threshold_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.healthyThresholdInput"></a>

```python
healthy_threshold_input: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.intervalInput"></a>

```python
interval_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `unhealthy_threshold_input`<sup>Optional</sup> <a name="unhealthy_threshold_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```python
unhealthy_threshold_input: str
```

- *Type:* str

---

##### `healthy_threshold`<sup>Required</sup> <a name="healthy_threshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.healthyThreshold"></a>

```python
healthy_threshold: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.interval"></a>

```python
interval: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `unhealthy_threshold`<sup>Required</sup> <a name="unhealthy_threshold" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticloadbalancingLoadBalancerHealthCheck
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerHealthCheck">ElasticloadbalancingLoadBalancerHealthCheck</a>

---


### ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList <a name="ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>]

---


### ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference <a name="ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resetCookieExpirationPeriod">reset_cookie_expiration_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resetPolicyName">reset_policy_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cookie_expiration_period` <a name="reset_cookie_expiration_period" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resetCookieExpirationPeriod"></a>

```python
def reset_cookie_expiration_period() -> None
```

##### `reset_policy_name` <a name="reset_policy_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resetPolicyName"></a>

```python
def reset_policy_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.cookieExpirationPeriodInput">cookie_expiration_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod">cookie_expiration_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookie_expiration_period_input`<sup>Optional</sup> <a name="cookie_expiration_period_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.cookieExpirationPeriodInput"></a>

```python
cookie_expiration_period_input: str
```

- *Type:* str

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `cookie_expiration_period`<sup>Required</sup> <a name="cookie_expiration_period" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod"></a>

```python
cookie_expiration_period: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">ElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>

---


### ElasticloadbalancingLoadBalancerListenersList <a name="ElasticloadbalancingLoadBalancerListenersList" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticloadbalancingLoadBalancerListenersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ElasticloadbalancingLoadBalancerListeners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>]

---


### ElasticloadbalancingLoadBalancerListenersOutputReference <a name="ElasticloadbalancingLoadBalancerListenersOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resetInstanceProtocol">reset_instance_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resetPolicyNames">reset_policy_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resetSslCertificateId">reset_ssl_certificate_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_instance_protocol` <a name="reset_instance_protocol" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resetInstanceProtocol"></a>

```python
def reset_instance_protocol() -> None
```

##### `reset_policy_names` <a name="reset_policy_names" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resetPolicyNames"></a>

```python
def reset_policy_names() -> None
```

##### `reset_ssl_certificate_id` <a name="reset_ssl_certificate_id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.resetSslCertificateId"></a>

```python
def reset_ssl_certificate_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instancePortInput">instance_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instanceProtocolInput">instance_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.loadBalancerPortInput">load_balancer_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.policyNamesInput">policy_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.sslCertificateIdInput">ssl_certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instancePort">instance_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instanceProtocol">instance_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.loadBalancerPort">load_balancer_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.policyNames">policy_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.sslCertificateId">ssl_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_port_input`<sup>Optional</sup> <a name="instance_port_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instancePortInput"></a>

```python
instance_port_input: str
```

- *Type:* str

---

##### `instance_protocol_input`<sup>Optional</sup> <a name="instance_protocol_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instanceProtocolInput"></a>

```python
instance_protocol_input: str
```

- *Type:* str

---

##### `load_balancer_port_input`<sup>Optional</sup> <a name="load_balancer_port_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.loadBalancerPortInput"></a>

```python
load_balancer_port_input: str
```

- *Type:* str

---

##### `policy_names_input`<sup>Optional</sup> <a name="policy_names_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.policyNamesInput"></a>

```python
policy_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `ssl_certificate_id_input`<sup>Optional</sup> <a name="ssl_certificate_id_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.sslCertificateIdInput"></a>

```python
ssl_certificate_id_input: str
```

- *Type:* str

---

##### `instance_port`<sup>Required</sup> <a name="instance_port" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instancePort"></a>

```python
instance_port: str
```

- *Type:* str

---

##### `instance_protocol`<sup>Required</sup> <a name="instance_protocol" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.instanceProtocol"></a>

```python
instance_protocol: str
```

- *Type:* str

---

##### `load_balancer_port`<sup>Required</sup> <a name="load_balancer_port" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.loadBalancerPort"></a>

```python
load_balancer_port: str
```

- *Type:* str

---

##### `policy_names`<sup>Required</sup> <a name="policy_names" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.policyNames"></a>

```python
policy_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `ssl_certificate_id`<sup>Required</sup> <a name="ssl_certificate_id" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.sslCertificateId"></a>

```python
ssl_certificate_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListenersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticloadbalancingLoadBalancerListeners
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerListeners">ElasticloadbalancingLoadBalancerListeners</a>

---


### ElasticloadbalancingLoadBalancerPoliciesAttributesList <a name="ElasticloadbalancingLoadBalancerPoliciesAttributesList" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ElasticloadbalancingLoadBalancerPoliciesAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>]

---


### ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference <a name="ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticloadbalancingLoadBalancerPoliciesAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>

---


### ElasticloadbalancingLoadBalancerPoliciesList <a name="ElasticloadbalancingLoadBalancerPoliciesList" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticloadbalancingLoadBalancerPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ElasticloadbalancingLoadBalancerPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>]

---


### ElasticloadbalancingLoadBalancerPoliciesOutputReference <a name="ElasticloadbalancingLoadBalancerPoliciesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetInstancePorts">reset_instance_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetLoadBalancerPorts">reset_load_balancer_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetPolicyName">reset_policy_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetPolicyType">reset_policy_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_attributes` <a name="put_attributes" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.putAttributes"></a>

```python
def put_attributes(
  value: IResolvable | typing.List[ElasticloadbalancingLoadBalancerPoliciesAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.putAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>]

---

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_instance_ports` <a name="reset_instance_ports" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetInstancePorts"></a>

```python
def reset_instance_ports() -> None
```

##### `reset_load_balancer_ports` <a name="reset_load_balancer_ports" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetLoadBalancerPorts"></a>

```python
def reset_load_balancer_ports() -> None
```

##### `reset_policy_name` <a name="reset_policy_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetPolicyName"></a>

```python
def reset_policy_name() -> None
```

##### `reset_policy_type` <a name="reset_policy_type" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.resetPolicyType"></a>

```python
def reset_policy_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList">ElasticloadbalancingLoadBalancerPoliciesAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.attributesInput">attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.instancePortsInput">instance_ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.loadBalancerPortsInput">load_balancer_ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyTypeInput">policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.instancePorts">instance_ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.loadBalancerPorts">load_balancer_ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.attributes"></a>

```python
attributes: ElasticloadbalancingLoadBalancerPoliciesAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributesList">ElasticloadbalancingLoadBalancerPoliciesAttributesList</a>

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.attributesInput"></a>

```python
attributes_input: IResolvable | typing.List[ElasticloadbalancingLoadBalancerPoliciesAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesAttributes">ElasticloadbalancingLoadBalancerPoliciesAttributes</a>]

---

##### `instance_ports_input`<sup>Optional</sup> <a name="instance_ports_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.instancePortsInput"></a>

```python
instance_ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `load_balancer_ports_input`<sup>Optional</sup> <a name="load_balancer_ports_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.loadBalancerPortsInput"></a>

```python
load_balancer_ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `policy_type_input`<sup>Optional</sup> <a name="policy_type_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyTypeInput"></a>

```python
policy_type_input: str
```

- *Type:* str

---

##### `instance_ports`<sup>Required</sup> <a name="instance_ports" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.instancePorts"></a>

```python
instance_ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `load_balancer_ports`<sup>Required</sup> <a name="load_balancer_ports" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.loadBalancerPorts"></a>

```python
load_balancer_ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticloadbalancingLoadBalancerPolicies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerPolicies">ElasticloadbalancingLoadBalancerPolicies</a>

---


### ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference <a name="ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.ownerAlias">owner_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroup">ElasticloadbalancingLoadBalancerSourceSecurityGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `owner_alias`<sup>Required</sup> <a name="owner_alias" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.ownerAlias"></a>

```python
owner_alias: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.internalValue"></a>

```python
internal_value: ElasticloadbalancingLoadBalancerSourceSecurityGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerSourceSecurityGroup">ElasticloadbalancingLoadBalancerSourceSecurityGroup</a>

---


### ElasticloadbalancingLoadBalancerTagsList <a name="ElasticloadbalancingLoadBalancerTagsList" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticloadbalancingLoadBalancerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ElasticloadbalancingLoadBalancerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>]

---


### ElasticloadbalancingLoadBalancerTagsOutputReference <a name="ElasticloadbalancingLoadBalancerTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancing_load_balancer

elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticloadbalancingLoadBalancerTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingLoadBalancer.ElasticloadbalancingLoadBalancerTags">ElasticloadbalancingLoadBalancerTags</a>

---



