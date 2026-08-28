# `lightsailLoadBalancer` Submodule <a name="`lightsailLoadBalancer` Submodule" id="@cdktn/provider-awscc.lightsailLoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailLoadBalancer <a name="LightsailLoadBalancer" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer awscc_lightsail_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_load_balancer.LightsailLoadBalancer;

LightsailLoadBalancer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instancePort(java.lang.Number)
    .loadBalancerName(java.lang.String)
//  .attachedInstances(java.util.List<java.lang.String>)
//  .healthCheckPath(java.lang.String)
//  .ipAddressType(java.lang.String)
//  .sessionStickinessEnabled(java.lang.Boolean|IResolvable)
//  .sessionStickinessLbCookieDurationSeconds(java.lang.String)
//  .tags(IResolvable|java.util.List<LightsailLoadBalancerTags>)
//  .tlsPolicyName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.instancePort">instancePort</a></code> | <code>java.lang.Number</code> | The instance port where you're creating your load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | The name of your load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.attachedInstances">attachedInstances</a></code> | <code>java.util.List<java.lang.String></code> | The names of the instances attached to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | The path you provided to perform the load balancer health check. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | The IP address type for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.sessionStickinessEnabled">sessionStickinessEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Configuration option to enable session stickiness. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.sessionStickinessLbCookieDurationSeconds">sessionStickinessLbCookieDurationSeconds</a></code> | <code>java.lang.String</code> | Configuration option to adjust session stickiness cookie duration parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.tlsPolicyName">tlsPolicyName</a></code> | <code>java.lang.String</code> | The name of the TLS policy to apply to the load balancer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instancePort`<sup>Required</sup> <a name="instancePort" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.instancePort"></a>

- *Type:* java.lang.Number

The instance port where you're creating your load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#instance_port LightsailLoadBalancer#instance_port}

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.loadBalancerName"></a>

- *Type:* java.lang.String

The name of your load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#load_balancer_name LightsailLoadBalancer#load_balancer_name}

---

##### `attachedInstances`<sup>Optional</sup> <a name="attachedInstances" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.attachedInstances"></a>

- *Type:* java.util.List<java.lang.String>

The names of the instances attached to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#attached_instances LightsailLoadBalancer#attached_instances}

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.healthCheckPath"></a>

- *Type:* java.lang.String

The path you provided to perform the load balancer health check.

If you didn't specify a health check path, Lightsail uses the root path of your website (e.g., "/").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#health_check_path LightsailLoadBalancer#health_check_path}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.ipAddressType"></a>

- *Type:* java.lang.String

The IP address type for the load balancer.

The possible values are ipv4 for IPv4 only, and dualstack for IPv4 and IPv6. The default value is dualstack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#ip_address_type LightsailLoadBalancer#ip_address_type}

---

##### `sessionStickinessEnabled`<sup>Optional</sup> <a name="sessionStickinessEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.sessionStickinessEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Configuration option to enable session stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#session_stickiness_enabled LightsailLoadBalancer#session_stickiness_enabled}

---

##### `sessionStickinessLbCookieDurationSeconds`<sup>Optional</sup> <a name="sessionStickinessLbCookieDurationSeconds" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.sessionStickinessLbCookieDurationSeconds"></a>

- *Type:* java.lang.String

Configuration option to adjust session stickiness cookie duration parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#session_stickiness_lb_cookie_duration_seconds LightsailLoadBalancer#session_stickiness_lb_cookie_duration_seconds}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#tags LightsailLoadBalancer#tags}

---

##### `tlsPolicyName`<sup>Optional</sup> <a name="tlsPolicyName" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.Initializer.parameter.tlsPolicyName"></a>

- *Type:* java.lang.String

The name of the TLS policy to apply to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#tls_policy_name LightsailLoadBalancer#tls_policy_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetAttachedInstances">resetAttachedInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetHealthCheckPath">resetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetSessionStickinessEnabled">resetSessionStickinessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetSessionStickinessLbCookieDurationSeconds">resetSessionStickinessLbCookieDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetTlsPolicyName">resetTlsPolicyName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<LightsailLoadBalancerTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>>

---

##### `resetAttachedInstances` <a name="resetAttachedInstances" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetAttachedInstances"></a>

```java
public void resetAttachedInstances()
```

##### `resetHealthCheckPath` <a name="resetHealthCheckPath" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetHealthCheckPath"></a>

```java
public void resetHealthCheckPath()
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```

##### `resetSessionStickinessEnabled` <a name="resetSessionStickinessEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetSessionStickinessEnabled"></a>

```java
public void resetSessionStickinessEnabled()
```

##### `resetSessionStickinessLbCookieDurationSeconds` <a name="resetSessionStickinessLbCookieDurationSeconds" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetSessionStickinessLbCookieDurationSeconds"></a>

```java
public void resetSessionStickinessLbCookieDurationSeconds()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetTags"></a>

```java
public void resetTags()
```

##### `resetTlsPolicyName` <a name="resetTlsPolicyName" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.resetTlsPolicyName"></a>

```java
public void resetTlsPolicyName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailLoadBalancer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isConstruct"></a>

```java
import io.cdktn.providers.awscc.lightsail_load_balancer.LightsailLoadBalancer;

LightsailLoadBalancer.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.lightsail_load_balancer.LightsailLoadBalancer;

LightsailLoadBalancer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.lightsail_load_balancer.LightsailLoadBalancer;

LightsailLoadBalancer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.lightsail_load_balancer.LightsailLoadBalancer;

LightsailLoadBalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LightsailLoadBalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LightsailLoadBalancer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LightsailLoadBalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LightsailLoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LightsailLoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.loadBalancerArn">loadBalancerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList">LightsailLoadBalancerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.attachedInstancesInput">attachedInstancesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.healthCheckPathInput">healthCheckPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.instancePortInput">instancePortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.loadBalancerNameInput">loadBalancerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessEnabledInput">sessionStickinessEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessLbCookieDurationSecondsInput">sessionStickinessLbCookieDurationSecondsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tlsPolicyNameInput">tlsPolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.attachedInstances">attachedInstances</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.instancePort">instancePort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessEnabled">sessionStickinessEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessLbCookieDurationSeconds">sessionStickinessLbCookieDurationSeconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tlsPolicyName">tlsPolicyName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.loadBalancerArn"></a>

```java
public java.lang.String getLoadBalancerArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tags"></a>

```java
public LightsailLoadBalancerTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList">LightsailLoadBalancerTagsList</a>

---

##### `attachedInstancesInput`<sup>Optional</sup> <a name="attachedInstancesInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.attachedInstancesInput"></a>

```java
public java.util.List<java.lang.String> getAttachedInstancesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `healthCheckPathInput`<sup>Optional</sup> <a name="healthCheckPathInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.healthCheckPathInput"></a>

```java
public java.lang.String getHealthCheckPathInput();
```

- *Type:* java.lang.String

---

##### `instancePortInput`<sup>Optional</sup> <a name="instancePortInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.instancePortInput"></a>

```java
public java.lang.Number getInstancePortInput();
```

- *Type:* java.lang.Number

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerNameInput`<sup>Optional</sup> <a name="loadBalancerNameInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.loadBalancerNameInput"></a>

```java
public java.lang.String getLoadBalancerNameInput();
```

- *Type:* java.lang.String

---

##### `sessionStickinessEnabledInput`<sup>Optional</sup> <a name="sessionStickinessEnabledInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSessionStickinessEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sessionStickinessLbCookieDurationSecondsInput`<sup>Optional</sup> <a name="sessionStickinessLbCookieDurationSecondsInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessLbCookieDurationSecondsInput"></a>

```java
public java.lang.String getSessionStickinessLbCookieDurationSecondsInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tagsInput"></a>

```java
public IResolvable|java.util.List<LightsailLoadBalancerTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>>

---

##### `tlsPolicyNameInput`<sup>Optional</sup> <a name="tlsPolicyNameInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tlsPolicyNameInput"></a>

```java
public java.lang.String getTlsPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `attachedInstances`<sup>Required</sup> <a name="attachedInstances" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.attachedInstances"></a>

```java
public java.util.List<java.lang.String> getAttachedInstances();
```

- *Type:* java.util.List<java.lang.String>

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

---

##### `instancePort`<sup>Required</sup> <a name="instancePort" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.instancePort"></a>

```java
public java.lang.Number getInstancePort();
```

- *Type:* java.lang.Number

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.loadBalancerName"></a>

```java
public java.lang.String getLoadBalancerName();
```

- *Type:* java.lang.String

---

##### `sessionStickinessEnabled`<sup>Required</sup> <a name="sessionStickinessEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSessionStickinessEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sessionStickinessLbCookieDurationSeconds`<sup>Required</sup> <a name="sessionStickinessLbCookieDurationSeconds" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.sessionStickinessLbCookieDurationSeconds"></a>

```java
public java.lang.String getSessionStickinessLbCookieDurationSeconds();
```

- *Type:* java.lang.String

---

##### `tlsPolicyName`<sup>Required</sup> <a name="tlsPolicyName" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tlsPolicyName"></a>

```java
public java.lang.String getTlsPolicyName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailLoadBalancerConfig <a name="LightsailLoadBalancerConfig" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_load_balancer.LightsailLoadBalancerConfig;

LightsailLoadBalancerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instancePort(java.lang.Number)
    .loadBalancerName(java.lang.String)
//  .attachedInstances(java.util.List<java.lang.String>)
//  .healthCheckPath(java.lang.String)
//  .ipAddressType(java.lang.String)
//  .sessionStickinessEnabled(java.lang.Boolean|IResolvable)
//  .sessionStickinessLbCookieDurationSeconds(java.lang.String)
//  .tags(IResolvable|java.util.List<LightsailLoadBalancerTags>)
//  .tlsPolicyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.instancePort">instancePort</a></code> | <code>java.lang.Number</code> | The instance port where you're creating your load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | The name of your load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.attachedInstances">attachedInstances</a></code> | <code>java.util.List<java.lang.String></code> | The names of the instances attached to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | The path you provided to perform the load balancer health check. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | The IP address type for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.sessionStickinessEnabled">sessionStickinessEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Configuration option to enable session stickiness. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.sessionStickinessLbCookieDurationSeconds">sessionStickinessLbCookieDurationSeconds</a></code> | <code>java.lang.String</code> | Configuration option to adjust session stickiness cookie duration parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.tlsPolicyName">tlsPolicyName</a></code> | <code>java.lang.String</code> | The name of the TLS policy to apply to the load balancer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instancePort`<sup>Required</sup> <a name="instancePort" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.instancePort"></a>

```java
public java.lang.Number getInstancePort();
```

- *Type:* java.lang.Number

The instance port where you're creating your load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#instance_port LightsailLoadBalancer#instance_port}

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.loadBalancerName"></a>

```java
public java.lang.String getLoadBalancerName();
```

- *Type:* java.lang.String

The name of your load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#load_balancer_name LightsailLoadBalancer#load_balancer_name}

---

##### `attachedInstances`<sup>Optional</sup> <a name="attachedInstances" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.attachedInstances"></a>

```java
public java.util.List<java.lang.String> getAttachedInstances();
```

- *Type:* java.util.List<java.lang.String>

The names of the instances attached to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#attached_instances LightsailLoadBalancer#attached_instances}

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

The path you provided to perform the load balancer health check.

If you didn't specify a health check path, Lightsail uses the root path of your website (e.g., "/").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#health_check_path LightsailLoadBalancer#health_check_path}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

The IP address type for the load balancer.

The possible values are ipv4 for IPv4 only, and dualstack for IPv4 and IPv6. The default value is dualstack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#ip_address_type LightsailLoadBalancer#ip_address_type}

---

##### `sessionStickinessEnabled`<sup>Optional</sup> <a name="sessionStickinessEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.sessionStickinessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSessionStickinessEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Configuration option to enable session stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#session_stickiness_enabled LightsailLoadBalancer#session_stickiness_enabled}

---

##### `sessionStickinessLbCookieDurationSeconds`<sup>Optional</sup> <a name="sessionStickinessLbCookieDurationSeconds" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.sessionStickinessLbCookieDurationSeconds"></a>

```java
public java.lang.String getSessionStickinessLbCookieDurationSeconds();
```

- *Type:* java.lang.String

Configuration option to adjust session stickiness cookie duration parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#session_stickiness_lb_cookie_duration_seconds LightsailLoadBalancer#session_stickiness_lb_cookie_duration_seconds}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.tags"></a>

```java
public IResolvable|java.util.List<LightsailLoadBalancerTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#tags LightsailLoadBalancer#tags}

---

##### `tlsPolicyName`<sup>Optional</sup> <a name="tlsPolicyName" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerConfig.property.tlsPolicyName"></a>

```java
public java.lang.String getTlsPolicyName();
```

- *Type:* java.lang.String

The name of the TLS policy to apply to the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#tls_policy_name LightsailLoadBalancer#tls_policy_name}

---

### LightsailLoadBalancerTags <a name="LightsailLoadBalancerTags" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_load_balancer.LightsailLoadBalancerTags;

LightsailLoadBalancerTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#key LightsailLoadBalancer#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_load_balancer#value LightsailLoadBalancer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailLoadBalancerTagsList <a name="LightsailLoadBalancerTagsList" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_load_balancer.LightsailLoadBalancerTagsList;

new LightsailLoadBalancerTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.get"></a>

```java
public LightsailLoadBalancerTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LightsailLoadBalancerTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>>

---


### LightsailLoadBalancerTagsOutputReference <a name="LightsailLoadBalancerTagsOutputReference" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lightsail_load_balancer.LightsailLoadBalancerTagsOutputReference;

new LightsailLoadBalancerTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|LightsailLoadBalancerTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailLoadBalancer.LightsailLoadBalancerTags">LightsailLoadBalancerTags</a>

---



