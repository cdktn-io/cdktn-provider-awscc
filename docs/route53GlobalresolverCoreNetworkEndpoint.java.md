# `route53GlobalresolverCoreNetworkEndpoint` Submodule <a name="`route53GlobalresolverCoreNetworkEndpoint` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverCoreNetworkEndpoint <a name="Route53GlobalresolverCoreNetworkEndpoint" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint awscc_route53globalresolver_core_network_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_core_network_endpoint.Route53GlobalresolverCoreNetworkEndpoint;

Route53GlobalresolverCoreNetworkEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .coreNetworkArn(java.lang.String)
    .globalResolverId(java.lang.String)
    .ipAddresses(IResolvable|java.util.List<Route53GlobalresolverCoreNetworkEndpointIpAddresses>)
//  .clientToken(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<Route53GlobalresolverCoreNetworkEndpointTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.coreNetworkArn">coreNetworkArn</a></code> | <code>java.lang.String</code> | The ARN of the AWS Cloud WAN core network to connect. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.globalResolverId">globalResolverId</a></code> | <code>java.lang.String</code> | The ID of the Global Resolver to connect. A Global Resolver can have one core network endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.ipAddresses">ipAddresses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>></code> | The private DNS IP addresses of the endpoint (1 to 5). Each IP address can appear once. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.clientToken">clientToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#client_token Route53GlobalresolverCoreNetworkEndpoint#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A name for the core network endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#tags Route53GlobalresolverCoreNetworkEndpoint#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.coreNetworkArn"></a>

- *Type:* java.lang.String

The ARN of the AWS Cloud WAN core network to connect.

The core network must be in the same account and AVAILABLE. A core network can have one core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#core_network_arn Route53GlobalresolverCoreNetworkEndpoint#core_network_arn}

---

##### `globalResolverId`<sup>Required</sup> <a name="globalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.globalResolverId"></a>

- *Type:* java.lang.String

The ID of the Global Resolver to connect. A Global Resolver can have one core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#global_resolver_id Route53GlobalresolverCoreNetworkEndpoint#global_resolver_id}

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.ipAddresses"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>>

The private DNS IP addresses of the endpoint (1 to 5). Each IP address can appear once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ip_addresses Route53GlobalresolverCoreNetworkEndpoint#ip_addresses}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.clientToken"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#client_token Route53GlobalresolverCoreNetworkEndpoint#client_token}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A name for the core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#name Route53GlobalresolverCoreNetworkEndpoint#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#tags Route53GlobalresolverCoreNetworkEndpoint#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putIpAddresses">putIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIpAddresses` <a name="putIpAddresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putIpAddresses"></a>

```java
public void putIpAddresses(IResolvable|java.util.List<Route53GlobalresolverCoreNetworkEndpointIpAddresses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putIpAddresses.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Route53GlobalresolverCoreNetworkEndpointTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>>

---

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetClientToken"></a>

```java
public void resetClientToken()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53GlobalresolverCoreNetworkEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_core_network_endpoint.Route53GlobalresolverCoreNetworkEndpoint;

Route53GlobalresolverCoreNetworkEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_core_network_endpoint.Route53GlobalresolverCoreNetworkEndpoint;

Route53GlobalresolverCoreNetworkEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_core_network_endpoint.Route53GlobalresolverCoreNetworkEndpoint;

Route53GlobalresolverCoreNetworkEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_core_network_endpoint.Route53GlobalresolverCoreNetworkEndpoint;

Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Route53GlobalresolverCoreNetworkEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53GlobalresolverCoreNetworkEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53GlobalresolverCoreNetworkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverCoreNetworkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.availableRegions">availableRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkEndpointId">coreNetworkEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddresses">ipAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList">Route53GlobalresolverCoreNetworkEndpointIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList">Route53GlobalresolverCoreNetworkEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientTokenInput">clientTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArnInput">coreNetworkArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverIdInput">globalResolverIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddressesInput">ipAddressesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArn">coreNetworkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverId">globalResolverId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `availableRegions`<sup>Required</sup> <a name="availableRegions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.availableRegions"></a>

```java
public java.util.List<java.lang.String> getAvailableRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `coreNetworkEndpointId`<sup>Required</sup> <a name="coreNetworkEndpointId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkEndpointId"></a>

```java
public java.lang.String getCoreNetworkEndpointId();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddresses"></a>

```java
public Route53GlobalresolverCoreNetworkEndpointIpAddressesList getIpAddresses();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList">Route53GlobalresolverCoreNetworkEndpointIpAddressesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tags"></a>

```java
public Route53GlobalresolverCoreNetworkEndpointTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList">Route53GlobalresolverCoreNetworkEndpointTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientTokenInput"></a>

```java
public java.lang.String getClientTokenInput();
```

- *Type:* java.lang.String

---

##### `coreNetworkArnInput`<sup>Optional</sup> <a name="coreNetworkArnInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArnInput"></a>

```java
public java.lang.String getCoreNetworkArnInput();
```

- *Type:* java.lang.String

---

##### `globalResolverIdInput`<sup>Optional</sup> <a name="globalResolverIdInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverIdInput"></a>

```java
public java.lang.String getGlobalResolverIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddressesInput"></a>

```java
public IResolvable|java.util.List<Route53GlobalresolverCoreNetworkEndpointIpAddresses> getIpAddressesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Route53GlobalresolverCoreNetworkEndpointTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>>

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArn"></a>

```java
public java.lang.String getCoreNetworkArn();
```

- *Type:* java.lang.String

---

##### `globalResolverId`<sup>Required</sup> <a name="globalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverId"></a>

```java
public java.lang.String getGlobalResolverId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverCoreNetworkEndpointConfig <a name="Route53GlobalresolverCoreNetworkEndpointConfig" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_core_network_endpoint.Route53GlobalresolverCoreNetworkEndpointConfig;

Route53GlobalresolverCoreNetworkEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .coreNetworkArn(java.lang.String)
    .globalResolverId(java.lang.String)
    .ipAddresses(IResolvable|java.util.List<Route53GlobalresolverCoreNetworkEndpointIpAddresses>)
//  .clientToken(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<Route53GlobalresolverCoreNetworkEndpointTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.coreNetworkArn">coreNetworkArn</a></code> | <code>java.lang.String</code> | The ARN of the AWS Cloud WAN core network to connect. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.globalResolverId">globalResolverId</a></code> | <code>java.lang.String</code> | The ID of the Global Resolver to connect. A Global Resolver can have one core network endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.ipAddresses">ipAddresses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>></code> | The private DNS IP addresses of the endpoint (1 to 5). Each IP address can appear once. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#client_token Route53GlobalresolverCoreNetworkEndpoint#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.name">name</a></code> | <code>java.lang.String</code> | A name for the core network endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#tags Route53GlobalresolverCoreNetworkEndpoint#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.coreNetworkArn"></a>

```java
public java.lang.String getCoreNetworkArn();
```

- *Type:* java.lang.String

The ARN of the AWS Cloud WAN core network to connect.

The core network must be in the same account and AVAILABLE. A core network can have one core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#core_network_arn Route53GlobalresolverCoreNetworkEndpoint#core_network_arn}

---

##### `globalResolverId`<sup>Required</sup> <a name="globalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.globalResolverId"></a>

```java
public java.lang.String getGlobalResolverId();
```

- *Type:* java.lang.String

The ID of the Global Resolver to connect. A Global Resolver can have one core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#global_resolver_id Route53GlobalresolverCoreNetworkEndpoint#global_resolver_id}

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.ipAddresses"></a>

```java
public IResolvable|java.util.List<Route53GlobalresolverCoreNetworkEndpointIpAddresses> getIpAddresses();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>>

The private DNS IP addresses of the endpoint (1 to 5). Each IP address can appear once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ip_addresses Route53GlobalresolverCoreNetworkEndpoint#ip_addresses}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#client_token Route53GlobalresolverCoreNetworkEndpoint#client_token}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A name for the core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#name Route53GlobalresolverCoreNetworkEndpoint#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Route53GlobalresolverCoreNetworkEndpointTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#tags Route53GlobalresolverCoreNetworkEndpoint#tags}.

---

### Route53GlobalresolverCoreNetworkEndpointIpAddresses <a name="Route53GlobalresolverCoreNetworkEndpointIpAddresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_core_network_endpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses;

Route53GlobalresolverCoreNetworkEndpointIpAddresses.builder()
    .dnsLabel(java.lang.String)
    .regionScope(java.lang.String)
//  .ipv4Address(java.lang.String)
//  .ipv6Address(java.lang.String)
//  .regions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.dnsLabel">dnsLabel</a></code> | <code>java.lang.String</code> | Lowercase DNS label for the IP address. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regionScope">regionScope</a></code> | <code>java.lang.String</code> | ALL to serve the IP address in every available region of the endpoint, or REGIONAL to serve it only in Regions. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv4Address">ipv4Address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_4_address Route53GlobalresolverCoreNetworkEndpoint#ipv_4_address}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_6_address Route53GlobalresolverCoreNetworkEndpoint#ipv_6_address}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | Regions that serve the IP address. |

---

##### `dnsLabel`<sup>Required</sup> <a name="dnsLabel" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.dnsLabel"></a>

```java
public java.lang.String getDnsLabel();
```

- *Type:* java.lang.String

Lowercase DNS label for the IP address.

The service appends the endpoint ID to build the DNS name. The label of an existing IP address cannot be changed; to use a new label, change the IP address too.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#dns_label Route53GlobalresolverCoreNetworkEndpoint#dns_label}

---

##### `regionScope`<sup>Required</sup> <a name="regionScope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regionScope"></a>

```java
public java.lang.String getRegionScope();
```

- *Type:* java.lang.String

ALL to serve the IP address in every available region of the endpoint, or REGIONAL to serve it only in Regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#region_scope Route53GlobalresolverCoreNetworkEndpoint#region_scope}

---

##### `ipv4Address`<sup>Optional</sup> <a name="ipv4Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv4Address"></a>

```java
public java.lang.String getIpv4Address();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_4_address Route53GlobalresolverCoreNetworkEndpoint#ipv_4_address}.

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_6_address Route53GlobalresolverCoreNetworkEndpoint#ipv_6_address}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

Regions that serve the IP address.

Required when RegionScope is REGIONAL and not allowed when it is ALL. Must be a subset of AvailableRegions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#regions Route53GlobalresolverCoreNetworkEndpoint#regions}

---

### Route53GlobalresolverCoreNetworkEndpointTags <a name="Route53GlobalresolverCoreNetworkEndpointTags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_core_network_endpoint.Route53GlobalresolverCoreNetworkEndpointTags;

Route53GlobalresolverCoreNetworkEndpointTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#key Route53GlobalresolverCoreNetworkEndpoint#key}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#value Route53GlobalresolverCoreNetworkEndpoint#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#key Route53GlobalresolverCoreNetworkEndpoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#value Route53GlobalresolverCoreNetworkEndpoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53GlobalresolverCoreNetworkEndpointIpAddressesList <a name="Route53GlobalresolverCoreNetworkEndpointIpAddressesList" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_core_network_endpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList;

new Route53GlobalresolverCoreNetworkEndpointIpAddressesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.get"></a>

```java
public Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Route53GlobalresolverCoreNetworkEndpointIpAddresses> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>>

---


### Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference <a name="Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_core_network_endpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference;

new Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv4Address">resetIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetRegions">resetRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv4Address` <a name="resetIpv4Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv4Address"></a>

```java
public void resetIpv4Address()
```

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv6Address"></a>

```java
public void resetIpv6Address()
```

##### `resetRegions` <a name="resetRegions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetRegions"></a>

```java
public void resetRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabelInput">dnsLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4AddressInput">ipv4AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScopeInput">regionScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabel">dnsLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4Address">ipv4Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScope">regionScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsLabelInput`<sup>Optional</sup> <a name="dnsLabelInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabelInput"></a>

```java
public java.lang.String getDnsLabelInput();
```

- *Type:* java.lang.String

---

##### `ipv4AddressInput`<sup>Optional</sup> <a name="ipv4AddressInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4AddressInput"></a>

```java
public java.lang.String getIpv4AddressInput();
```

- *Type:* java.lang.String

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6AddressInput"></a>

```java
public java.lang.String getIpv6AddressInput();
```

- *Type:* java.lang.String

---

##### `regionScopeInput`<sup>Optional</sup> <a name="regionScopeInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScopeInput"></a>

```java
public java.lang.String getRegionScopeInput();
```

- *Type:* java.lang.String

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsLabel`<sup>Required</sup> <a name="dnsLabel" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabel"></a>

```java
public java.lang.String getDnsLabel();
```

- *Type:* java.lang.String

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4Address"></a>

```java
public java.lang.String getIpv4Address();
```

- *Type:* java.lang.String

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionScope`<sup>Required</sup> <a name="regionScope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScope"></a>

```java
public java.lang.String getRegionScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53GlobalresolverCoreNetworkEndpointIpAddresses getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses">Route53GlobalresolverCoreNetworkEndpointIpAddresses</a>

---


### Route53GlobalresolverCoreNetworkEndpointTagsList <a name="Route53GlobalresolverCoreNetworkEndpointTagsList" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_core_network_endpoint.Route53GlobalresolverCoreNetworkEndpointTagsList;

new Route53GlobalresolverCoreNetworkEndpointTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.get"></a>

```java
public Route53GlobalresolverCoreNetworkEndpointTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Route53GlobalresolverCoreNetworkEndpointTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>>

---


### Route53GlobalresolverCoreNetworkEndpointTagsOutputReference <a name="Route53GlobalresolverCoreNetworkEndpointTagsOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_core_network_endpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference;

new Route53GlobalresolverCoreNetworkEndpointTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53GlobalresolverCoreNetworkEndpointTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags">Route53GlobalresolverCoreNetworkEndpointTags</a>

---



