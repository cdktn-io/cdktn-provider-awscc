# `route53GlobalresolverGlobalResolver` Submodule <a name="`route53GlobalresolverGlobalResolver` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverGlobalResolver <a name="Route53GlobalresolverGlobalResolver" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver awscc_route53globalresolver_global_resolver}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_global_resolver.Route53GlobalresolverGlobalResolver;

Route53GlobalresolverGlobalResolver.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .regions(java.util.List<java.lang.String>)
//  .clientToken(java.lang.String)
//  .description(java.lang.String)
//  .ipAddressType(java.lang.String)
//  .observabilityRegion(java.lang.String)
//  .tags(IResolvable|java.util.List<Route53GlobalresolverGlobalResolverTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#name Route53GlobalresolverGlobalResolver#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | A list of regions the Global Resolver will exist in. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.clientToken">clientToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#client_token Route53GlobalresolverGlobalResolver#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#description Route53GlobalresolverGlobalResolver#description}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#ip_address_type Route53GlobalresolverGlobalResolver#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.observabilityRegion">observabilityRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#observability_region Route53GlobalresolverGlobalResolver#observability_region}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#tags Route53GlobalresolverGlobalResolver#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#name Route53GlobalresolverGlobalResolver#name}.

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.regions"></a>

- *Type:* java.util.List<java.lang.String>

A list of regions the Global Resolver will exist in.

This list cannot be updated and will stay fixed for the duration of the Global Resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#regions Route53GlobalresolverGlobalResolver#regions}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.clientToken"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#client_token Route53GlobalresolverGlobalResolver#client_token}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#description Route53GlobalresolverGlobalResolver#description}.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.ipAddressType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#ip_address_type Route53GlobalresolverGlobalResolver#ip_address_type}.

---

##### `observabilityRegion`<sup>Optional</sup> <a name="observabilityRegion" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.observabilityRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#observability_region Route53GlobalresolverGlobalResolver#observability_region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#tags Route53GlobalresolverGlobalResolver#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetClientToken">resetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetObservabilityRegion">resetObservabilityRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Route53GlobalresolverGlobalResolverTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>>

---

##### `resetClientToken` <a name="resetClientToken" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetClientToken"></a>

```java
public void resetClientToken()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```

##### `resetObservabilityRegion` <a name="resetObservabilityRegion" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetObservabilityRegion"></a>

```java
public void resetObservabilityRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53GlobalresolverGlobalResolver resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isConstruct"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_global_resolver.Route53GlobalresolverGlobalResolver;

Route53GlobalresolverGlobalResolver.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_global_resolver.Route53GlobalresolverGlobalResolver;

Route53GlobalresolverGlobalResolver.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_global_resolver.Route53GlobalresolverGlobalResolver;

Route53GlobalresolverGlobalResolver.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_global_resolver.Route53GlobalresolverGlobalResolver;

Route53GlobalresolverGlobalResolver.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53GlobalresolverGlobalResolver.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Route53GlobalresolverGlobalResolver resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53GlobalresolverGlobalResolver to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53GlobalresolverGlobalResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverGlobalResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.globalResolverId">globalResolverId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.iPv4Addresses">iPv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.iPv6Addresses">iPv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList">Route53GlobalresolverGlobalResolverTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.clientTokenInput">clientTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.observabilityRegionInput">observabilityRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.observabilityRegion">observabilityRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `globalResolverId`<sup>Required</sup> <a name="globalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.globalResolverId"></a>

```java
public java.lang.String getGlobalResolverId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `iPv4Addresses`<sup>Required</sup> <a name="iPv4Addresses" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.iPv4Addresses"></a>

```java
public java.util.List<java.lang.String> getIPv4Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `iPv6Addresses`<sup>Required</sup> <a name="iPv6Addresses" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.iPv6Addresses"></a>

```java
public java.util.List<java.lang.String> getIPv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tags"></a>

```java
public Route53GlobalresolverGlobalResolverTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList">Route53GlobalresolverGlobalResolverTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `clientTokenInput`<sup>Optional</sup> <a name="clientTokenInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.clientTokenInput"></a>

```java
public java.lang.String getClientTokenInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `observabilityRegionInput`<sup>Optional</sup> <a name="observabilityRegionInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.observabilityRegionInput"></a>

```java
public java.lang.String getObservabilityRegionInput();
```

- *Type:* java.lang.String

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Route53GlobalresolverGlobalResolverTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>>

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `observabilityRegion`<sup>Required</sup> <a name="observabilityRegion" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.observabilityRegion"></a>

```java
public java.lang.String getObservabilityRegion();
```

- *Type:* java.lang.String

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolver.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverGlobalResolverConfig <a name="Route53GlobalresolverGlobalResolverConfig" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_global_resolver.Route53GlobalresolverGlobalResolverConfig;

Route53GlobalresolverGlobalResolverConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .regions(java.util.List<java.lang.String>)
//  .clientToken(java.lang.String)
//  .description(java.lang.String)
//  .ipAddressType(java.lang.String)
//  .observabilityRegion(java.lang.String)
//  .tags(IResolvable|java.util.List<Route53GlobalresolverGlobalResolverTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#name Route53GlobalresolverGlobalResolver#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | A list of regions the Global Resolver will exist in. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#client_token Route53GlobalresolverGlobalResolver#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#description Route53GlobalresolverGlobalResolver#description}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#ip_address_type Route53GlobalresolverGlobalResolver#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.observabilityRegion">observabilityRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#observability_region Route53GlobalresolverGlobalResolver#observability_region}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#tags Route53GlobalresolverGlobalResolver#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#name Route53GlobalresolverGlobalResolver#name}.

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

A list of regions the Global Resolver will exist in.

This list cannot be updated and will stay fixed for the duration of the Global Resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#regions Route53GlobalresolverGlobalResolver#regions}

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#client_token Route53GlobalresolverGlobalResolver#client_token}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#description Route53GlobalresolverGlobalResolver#description}.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#ip_address_type Route53GlobalresolverGlobalResolver#ip_address_type}.

---

##### `observabilityRegion`<sup>Optional</sup> <a name="observabilityRegion" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.observabilityRegion"></a>

```java
public java.lang.String getObservabilityRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#observability_region Route53GlobalresolverGlobalResolver#observability_region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Route53GlobalresolverGlobalResolverTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#tags Route53GlobalresolverGlobalResolver#tags}.

---

### Route53GlobalresolverGlobalResolverTags <a name="Route53GlobalresolverGlobalResolverTags" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_global_resolver.Route53GlobalresolverGlobalResolverTags;

Route53GlobalresolverGlobalResolverTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#key Route53GlobalresolverGlobalResolver#key}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#value Route53GlobalresolverGlobalResolver#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#key Route53GlobalresolverGlobalResolver#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53globalresolver_global_resolver#value Route53GlobalresolverGlobalResolver#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53GlobalresolverGlobalResolverTagsList <a name="Route53GlobalresolverGlobalResolverTagsList" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_global_resolver.Route53GlobalresolverGlobalResolverTagsList;

new Route53GlobalresolverGlobalResolverTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.get"></a>

```java
public Route53GlobalresolverGlobalResolverTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Route53GlobalresolverGlobalResolverTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>>

---


### Route53GlobalresolverGlobalResolverTagsOutputReference <a name="Route53GlobalresolverGlobalResolverTagsOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_globalresolver_global_resolver.Route53GlobalresolverGlobalResolverTagsOutputReference;

new Route53GlobalresolverGlobalResolverTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53GlobalresolverGlobalResolverTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53GlobalresolverGlobalResolver.Route53GlobalresolverGlobalResolverTags">Route53GlobalresolverGlobalResolverTags</a>

---



