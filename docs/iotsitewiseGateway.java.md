# `iotsitewiseGateway` Submodule <a name="`iotsitewiseGateway` Submodule" id="@cdktn/provider-awscc.iotsitewiseGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewiseGateway <a name="IotsitewiseGateway" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway awscc_iotsitewise_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_gateway.IotsitewiseGateway;

IotsitewiseGateway.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .gatewayName(java.lang.String)
    .gatewayPlatform(IotsitewiseGatewayGatewayPlatform)
//  .gatewayCapabilitySummaries(IResolvable|java.util.List<IotsitewiseGatewayGatewayCapabilitySummaries>)
//  .gatewayVersion(java.lang.String)
//  .tags(IResolvable|java.util.List<IotsitewiseGatewayTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.gatewayName">gatewayName</a></code> | <code>java.lang.String</code> | A unique, friendly name for the gateway. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.gatewayPlatform">gatewayPlatform</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a></code> | The gateway's platform. You can only specify one platform in a gateway. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.gatewayCapabilitySummaries">gatewayCapabilitySummaries</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>></code> | A list of gateway capability summaries that each contain a namespace and status. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.gatewayVersion">gatewayVersion</a></code> | <code>java.lang.String</code> | The version of the gateway you want to create. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>></code> | A list of key-value pairs that contain metadata for the gateway. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.gatewayName"></a>

- *Type:* java.lang.String

A unique, friendly name for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#gateway_name IotsitewiseGateway#gateway_name}

---

##### `gatewayPlatform`<sup>Required</sup> <a name="gatewayPlatform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.gatewayPlatform"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a>

The gateway's platform. You can only specify one platform in a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#gateway_platform IotsitewiseGateway#gateway_platform}

---

##### `gatewayCapabilitySummaries`<sup>Optional</sup> <a name="gatewayCapabilitySummaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.gatewayCapabilitySummaries"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>>

A list of gateway capability summaries that each contain a namespace and status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#gateway_capability_summaries IotsitewiseGateway#gateway_capability_summaries}

---

##### `gatewayVersion`<sup>Optional</sup> <a name="gatewayVersion" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.gatewayVersion"></a>

- *Type:* java.lang.String

The version of the gateway you want to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#gateway_version IotsitewiseGateway#gateway_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>>

A list of key-value pairs that contain metadata for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#tags IotsitewiseGateway#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayCapabilitySummaries">putGatewayCapabilitySummaries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayPlatform">putGatewayPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetGatewayCapabilitySummaries">resetGatewayCapabilitySummaries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetGatewayVersion">resetGatewayVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGatewayCapabilitySummaries` <a name="putGatewayCapabilitySummaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayCapabilitySummaries"></a>

```java
public void putGatewayCapabilitySummaries(IResolvable|java.util.List<IotsitewiseGatewayGatewayCapabilitySummaries> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayCapabilitySummaries.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>>

---

##### `putGatewayPlatform` <a name="putGatewayPlatform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayPlatform"></a>

```java
public void putGatewayPlatform(IotsitewiseGatewayGatewayPlatform value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayPlatform.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotsitewiseGatewayTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>>

---

##### `resetGatewayCapabilitySummaries` <a name="resetGatewayCapabilitySummaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetGatewayCapabilitySummaries"></a>

```java
public void resetGatewayCapabilitySummaries()
```

##### `resetGatewayVersion` <a name="resetGatewayVersion" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetGatewayVersion"></a>

```java
public void resetGatewayVersion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotsitewiseGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_gateway.IotsitewiseGateway;

IotsitewiseGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_gateway.IotsitewiseGateway;

IotsitewiseGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_gateway.IotsitewiseGateway;

IotsitewiseGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_gateway.IotsitewiseGateway;

IotsitewiseGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotsitewiseGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotsitewiseGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotsitewiseGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotsitewiseGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewiseGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayCapabilitySummaries">gatewayCapabilitySummaries</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList">IotsitewiseGatewayGatewayCapabilitySummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayPlatform">gatewayPlatform</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference">IotsitewiseGatewayGatewayPlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList">IotsitewiseGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayCapabilitySummariesInput">gatewayCapabilitySummariesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayNameInput">gatewayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayPlatformInput">gatewayPlatformInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayVersionInput">gatewayVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayName">gatewayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayVersion">gatewayVersion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `gatewayCapabilitySummaries`<sup>Required</sup> <a name="gatewayCapabilitySummaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayCapabilitySummaries"></a>

```java
public IotsitewiseGatewayGatewayCapabilitySummariesList getGatewayCapabilitySummaries();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList">IotsitewiseGatewayGatewayCapabilitySummariesList</a>

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

---

##### `gatewayPlatform`<sup>Required</sup> <a name="gatewayPlatform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayPlatform"></a>

```java
public IotsitewiseGatewayGatewayPlatformOutputReference getGatewayPlatform();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference">IotsitewiseGatewayGatewayPlatformOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tags"></a>

```java
public IotsitewiseGatewayTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList">IotsitewiseGatewayTagsList</a>

---

##### `gatewayCapabilitySummariesInput`<sup>Optional</sup> <a name="gatewayCapabilitySummariesInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayCapabilitySummariesInput"></a>

```java
public IResolvable|java.util.List<IotsitewiseGatewayGatewayCapabilitySummaries> getGatewayCapabilitySummariesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>>

---

##### `gatewayNameInput`<sup>Optional</sup> <a name="gatewayNameInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayNameInput"></a>

```java
public java.lang.String getGatewayNameInput();
```

- *Type:* java.lang.String

---

##### `gatewayPlatformInput`<sup>Optional</sup> <a name="gatewayPlatformInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayPlatformInput"></a>

```java
public IResolvable|IotsitewiseGatewayGatewayPlatform getGatewayPlatformInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a>

---

##### `gatewayVersionInput`<sup>Optional</sup> <a name="gatewayVersionInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayVersionInput"></a>

```java
public java.lang.String getGatewayVersionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotsitewiseGatewayTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>>

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayName"></a>

```java
public java.lang.String getGatewayName();
```

- *Type:* java.lang.String

---

##### `gatewayVersion`<sup>Required</sup> <a name="gatewayVersion" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayVersion"></a>

```java
public java.lang.String getGatewayVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewiseGatewayConfig <a name="IotsitewiseGatewayConfig" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_gateway.IotsitewiseGatewayConfig;

IotsitewiseGatewayConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .gatewayName(java.lang.String)
    .gatewayPlatform(IotsitewiseGatewayGatewayPlatform)
//  .gatewayCapabilitySummaries(IResolvable|java.util.List<IotsitewiseGatewayGatewayCapabilitySummaries>)
//  .gatewayVersion(java.lang.String)
//  .tags(IResolvable|java.util.List<IotsitewiseGatewayTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayName">gatewayName</a></code> | <code>java.lang.String</code> | A unique, friendly name for the gateway. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayPlatform">gatewayPlatform</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a></code> | The gateway's platform. You can only specify one platform in a gateway. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayCapabilitySummaries">gatewayCapabilitySummaries</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>></code> | A list of gateway capability summaries that each contain a namespace and status. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayVersion">gatewayVersion</a></code> | <code>java.lang.String</code> | The version of the gateway you want to create. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>></code> | A list of key-value pairs that contain metadata for the gateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayName"></a>

```java
public java.lang.String getGatewayName();
```

- *Type:* java.lang.String

A unique, friendly name for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#gateway_name IotsitewiseGateway#gateway_name}

---

##### `gatewayPlatform`<sup>Required</sup> <a name="gatewayPlatform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayPlatform"></a>

```java
public IotsitewiseGatewayGatewayPlatform getGatewayPlatform();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a>

The gateway's platform. You can only specify one platform in a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#gateway_platform IotsitewiseGateway#gateway_platform}

---

##### `gatewayCapabilitySummaries`<sup>Optional</sup> <a name="gatewayCapabilitySummaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayCapabilitySummaries"></a>

```java
public IResolvable|java.util.List<IotsitewiseGatewayGatewayCapabilitySummaries> getGatewayCapabilitySummaries();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>>

A list of gateway capability summaries that each contain a namespace and status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#gateway_capability_summaries IotsitewiseGateway#gateway_capability_summaries}

---

##### `gatewayVersion`<sup>Optional</sup> <a name="gatewayVersion" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayVersion"></a>

```java
public java.lang.String getGatewayVersion();
```

- *Type:* java.lang.String

The version of the gateway you want to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#gateway_version IotsitewiseGateway#gateway_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotsitewiseGatewayTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>>

A list of key-value pairs that contain metadata for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#tags IotsitewiseGateway#tags}

---

### IotsitewiseGatewayGatewayCapabilitySummaries <a name="IotsitewiseGatewayGatewayCapabilitySummaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_gateway.IotsitewiseGatewayGatewayCapabilitySummaries;

IotsitewiseGatewayGatewayCapabilitySummaries.builder()
//  .capabilityConfiguration(java.lang.String)
//  .capabilityNamespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.property.capabilityConfiguration">capabilityConfiguration</a></code> | <code>java.lang.String</code> | The JSON document that defines the gateway capability's configuration. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.property.capabilityNamespace">capabilityNamespace</a></code> | <code>java.lang.String</code> | The namespace of the capability configuration. |

---

##### `capabilityConfiguration`<sup>Optional</sup> <a name="capabilityConfiguration" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.property.capabilityConfiguration"></a>

```java
public java.lang.String getCapabilityConfiguration();
```

- *Type:* java.lang.String

The JSON document that defines the gateway capability's configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#capability_configuration IotsitewiseGateway#capability_configuration}

---

##### `capabilityNamespace`<sup>Optional</sup> <a name="capabilityNamespace" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.property.capabilityNamespace"></a>

```java
public java.lang.String getCapabilityNamespace();
```

- *Type:* java.lang.String

The namespace of the capability configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#capability_namespace IotsitewiseGateway#capability_namespace}

---

### IotsitewiseGatewayGatewayPlatform <a name="IotsitewiseGatewayGatewayPlatform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_gateway.IotsitewiseGatewayGatewayPlatform;

IotsitewiseGatewayGatewayPlatform.builder()
//  .greengrassV2(IotsitewiseGatewayGatewayPlatformGreengrassV2)
//  .siemensIe(IotsitewiseGatewayGatewayPlatformSiemensIe)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.property.greengrassV2">greengrassV2</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a></code> | A gateway that runs on AWS IoT Greengrass V2. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.property.siemensIe">siemensIe</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a></code> | A gateway that runs on Siemens Industrial Edge. |

---

##### `greengrassV2`<sup>Optional</sup> <a name="greengrassV2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.property.greengrassV2"></a>

```java
public IotsitewiseGatewayGatewayPlatformGreengrassV2 getGreengrassV2();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a>

A gateway that runs on AWS IoT Greengrass V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#greengrass_v2 IotsitewiseGateway#greengrass_v2}

---

##### `siemensIe`<sup>Optional</sup> <a name="siemensIe" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.property.siemensIe"></a>

```java
public IotsitewiseGatewayGatewayPlatformSiemensIe getSiemensIe();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a>

A gateway that runs on Siemens Industrial Edge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#siemens_ie IotsitewiseGateway#siemens_ie}

---

### IotsitewiseGatewayGatewayPlatformGreengrassV2 <a name="IotsitewiseGatewayGatewayPlatformGreengrassV2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_gateway.IotsitewiseGatewayGatewayPlatformGreengrassV2;

IotsitewiseGatewayGatewayPlatformGreengrassV2.builder()
//  .coreDeviceOperatingSystem(java.lang.String)
//  .coreDeviceThingName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.property.coreDeviceOperatingSystem">coreDeviceOperatingSystem</a></code> | <code>java.lang.String</code> | The operating system of the core device in AWS IoT Greengrass V2. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.property.coreDeviceThingName">coreDeviceThingName</a></code> | <code>java.lang.String</code> | The name of the CoreDevice in GreenGrass V2. |

---

##### `coreDeviceOperatingSystem`<sup>Optional</sup> <a name="coreDeviceOperatingSystem" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.property.coreDeviceOperatingSystem"></a>

```java
public java.lang.String getCoreDeviceOperatingSystem();
```

- *Type:* java.lang.String

The operating system of the core device in AWS IoT Greengrass V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#core_device_operating_system IotsitewiseGateway#core_device_operating_system}

---

##### `coreDeviceThingName`<sup>Optional</sup> <a name="coreDeviceThingName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.property.coreDeviceThingName"></a>

```java
public java.lang.String getCoreDeviceThingName();
```

- *Type:* java.lang.String

The name of the CoreDevice in GreenGrass V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#core_device_thing_name IotsitewiseGateway#core_device_thing_name}

---

### IotsitewiseGatewayGatewayPlatformSiemensIe <a name="IotsitewiseGatewayGatewayPlatformSiemensIe" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_gateway.IotsitewiseGatewayGatewayPlatformSiemensIe;

IotsitewiseGatewayGatewayPlatformSiemensIe.builder()
//  .iotCoreThingName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe.property.iotCoreThingName">iotCoreThingName</a></code> | <code>java.lang.String</code> | The name of the IoT Core Thing. |

---

##### `iotCoreThingName`<sup>Optional</sup> <a name="iotCoreThingName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe.property.iotCoreThingName"></a>

```java
public java.lang.String getIotCoreThingName();
```

- *Type:* java.lang.String

The name of the IoT Core Thing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#iot_core_thing_name IotsitewiseGateway#iot_core_thing_name}

---

### IotsitewiseGatewayTags <a name="IotsitewiseGatewayTags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_gateway.IotsitewiseGatewayTags;

IotsitewiseGatewayTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#key IotsitewiseGateway#key}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#value IotsitewiseGateway#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#key IotsitewiseGateway#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#value IotsitewiseGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewiseGatewayGatewayCapabilitySummariesList <a name="IotsitewiseGatewayGatewayCapabilitySummariesList" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_gateway.IotsitewiseGatewayGatewayCapabilitySummariesList;

new IotsitewiseGatewayGatewayCapabilitySummariesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.get"></a>

```java
public IotsitewiseGatewayGatewayCapabilitySummariesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotsitewiseGatewayGatewayCapabilitySummaries> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>>

---


### IotsitewiseGatewayGatewayCapabilitySummariesOutputReference <a name="IotsitewiseGatewayGatewayCapabilitySummariesOutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_gateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference;

new IotsitewiseGatewayGatewayCapabilitySummariesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resetCapabilityConfiguration">resetCapabilityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resetCapabilityNamespace">resetCapabilityNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCapabilityConfiguration` <a name="resetCapabilityConfiguration" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resetCapabilityConfiguration"></a>

```java
public void resetCapabilityConfiguration()
```

##### `resetCapabilityNamespace` <a name="resetCapabilityNamespace" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resetCapabilityNamespace"></a>

```java
public void resetCapabilityNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfigurationInput">capabilityConfigurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespaceInput">capabilityNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfiguration">capabilityConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespace">capabilityNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capabilityConfigurationInput`<sup>Optional</sup> <a name="capabilityConfigurationInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfigurationInput"></a>

```java
public java.lang.String getCapabilityConfigurationInput();
```

- *Type:* java.lang.String

---

##### `capabilityNamespaceInput`<sup>Optional</sup> <a name="capabilityNamespaceInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespaceInput"></a>

```java
public java.lang.String getCapabilityNamespaceInput();
```

- *Type:* java.lang.String

---

##### `capabilityConfiguration`<sup>Required</sup> <a name="capabilityConfiguration" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfiguration"></a>

```java
public java.lang.String getCapabilityConfiguration();
```

- *Type:* java.lang.String

---

##### `capabilityNamespace`<sup>Required</sup> <a name="capabilityNamespace" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespace"></a>

```java
public java.lang.String getCapabilityNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseGatewayGatewayCapabilitySummaries getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>

---


### IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference <a name="IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_gateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference;

new IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resetCoreDeviceOperatingSystem">resetCoreDeviceOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resetCoreDeviceThingName">resetCoreDeviceThingName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCoreDeviceOperatingSystem` <a name="resetCoreDeviceOperatingSystem" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resetCoreDeviceOperatingSystem"></a>

```java
public void resetCoreDeviceOperatingSystem()
```

##### `resetCoreDeviceThingName` <a name="resetCoreDeviceThingName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resetCoreDeviceThingName"></a>

```java
public void resetCoreDeviceThingName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystemInput">coreDeviceOperatingSystemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingNameInput">coreDeviceThingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystem">coreDeviceOperatingSystem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingName">coreDeviceThingName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coreDeviceOperatingSystemInput`<sup>Optional</sup> <a name="coreDeviceOperatingSystemInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystemInput"></a>

```java
public java.lang.String getCoreDeviceOperatingSystemInput();
```

- *Type:* java.lang.String

---

##### `coreDeviceThingNameInput`<sup>Optional</sup> <a name="coreDeviceThingNameInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingNameInput"></a>

```java
public java.lang.String getCoreDeviceThingNameInput();
```

- *Type:* java.lang.String

---

##### `coreDeviceOperatingSystem`<sup>Required</sup> <a name="coreDeviceOperatingSystem" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystem"></a>

```java
public java.lang.String getCoreDeviceOperatingSystem();
```

- *Type:* java.lang.String

---

##### `coreDeviceThingName`<sup>Required</sup> <a name="coreDeviceThingName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingName"></a>

```java
public java.lang.String getCoreDeviceThingName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseGatewayGatewayPlatformGreengrassV2 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a>

---


### IotsitewiseGatewayGatewayPlatformOutputReference <a name="IotsitewiseGatewayGatewayPlatformOutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_gateway.IotsitewiseGatewayGatewayPlatformOutputReference;

new IotsitewiseGatewayGatewayPlatformOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putGreengrassV2">putGreengrassV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putSiemensIe">putSiemensIe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resetGreengrassV2">resetGreengrassV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resetSiemensIe">resetSiemensIe</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGreengrassV2` <a name="putGreengrassV2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putGreengrassV2"></a>

```java
public void putGreengrassV2(IotsitewiseGatewayGatewayPlatformGreengrassV2 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putGreengrassV2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a>

---

##### `putSiemensIe` <a name="putSiemensIe" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putSiemensIe"></a>

```java
public void putSiemensIe(IotsitewiseGatewayGatewayPlatformSiemensIe value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putSiemensIe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a>

---

##### `resetGreengrassV2` <a name="resetGreengrassV2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resetGreengrassV2"></a>

```java
public void resetGreengrassV2()
```

##### `resetSiemensIe` <a name="resetSiemensIe" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resetSiemensIe"></a>

```java
public void resetSiemensIe()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2">greengrassV2</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference">IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIe">siemensIe</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference">IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2Input">greengrassV2Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIeInput">siemensIeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `greengrassV2`<sup>Required</sup> <a name="greengrassV2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2"></a>

```java
public IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference getGreengrassV2();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference">IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference</a>

---

##### `siemensIe`<sup>Required</sup> <a name="siemensIe" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIe"></a>

```java
public IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference getSiemensIe();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference">IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference</a>

---

##### `greengrassV2Input`<sup>Optional</sup> <a name="greengrassV2Input" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2Input"></a>

```java
public IResolvable|IotsitewiseGatewayGatewayPlatformGreengrassV2 getGreengrassV2Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a>

---

##### `siemensIeInput`<sup>Optional</sup> <a name="siemensIeInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIeInput"></a>

```java
public IResolvable|IotsitewiseGatewayGatewayPlatformSiemensIe getSiemensIeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseGatewayGatewayPlatform getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a>

---


### IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference <a name="IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_gateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference;

new IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resetIotCoreThingName">resetIotCoreThingName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIotCoreThingName` <a name="resetIotCoreThingName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resetIotCoreThingName"></a>

```java
public void resetIotCoreThingName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingNameInput">iotCoreThingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingName">iotCoreThingName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iotCoreThingNameInput`<sup>Optional</sup> <a name="iotCoreThingNameInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingNameInput"></a>

```java
public java.lang.String getIotCoreThingNameInput();
```

- *Type:* java.lang.String

---

##### `iotCoreThingName`<sup>Required</sup> <a name="iotCoreThingName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingName"></a>

```java
public java.lang.String getIotCoreThingName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseGatewayGatewayPlatformSiemensIe getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a>

---


### IotsitewiseGatewayTagsList <a name="IotsitewiseGatewayTagsList" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_gateway.IotsitewiseGatewayTagsList;

new IotsitewiseGatewayTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.get"></a>

```java
public IotsitewiseGatewayTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotsitewiseGatewayTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>>

---


### IotsitewiseGatewayTagsOutputReference <a name="IotsitewiseGatewayTagsOutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_gateway.IotsitewiseGatewayTagsOutputReference;

new IotsitewiseGatewayTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseGatewayTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>

---



