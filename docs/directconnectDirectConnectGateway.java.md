# `directconnectDirectConnectGateway` Submodule <a name="`directconnectDirectConnectGateway` Submodule" id="@cdktn/provider-awscc.directconnectDirectConnectGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectDirectConnectGateway <a name="DirectconnectDirectConnectGateway" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_direct_connect_gateway awscc_directconnect_direct_connect_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_direct_connect_gateway.DirectconnectDirectConnectGateway;

DirectconnectDirectConnectGateway.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .directConnectGatewayName(java.lang.String)
//  .amazonSideAsn(java.lang.String)
//  .tags(IResolvable|java.util.List<DirectconnectDirectConnectGatewayTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.directConnectGatewayName">directConnectGatewayName</a></code> | <code>java.lang.String</code> | The name of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.amazonSideAsn">amazonSideAsn</a></code> | <code>java.lang.String</code> | The autonomous system number (ASN) for the Amazon side of the connection. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a>></code> | The tags associated with the Direct Connect gateway. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `directConnectGatewayName`<sup>Required</sup> <a name="directConnectGatewayName" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.directConnectGatewayName"></a>

- *Type:* java.lang.String

The name of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_direct_connect_gateway#direct_connect_gateway_name DirectconnectDirectConnectGateway#direct_connect_gateway_name}

---

##### `amazonSideAsn`<sup>Optional</sup> <a name="amazonSideAsn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.amazonSideAsn"></a>

- *Type:* java.lang.String

The autonomous system number (ASN) for the Amazon side of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_direct_connect_gateway#amazon_side_asn DirectconnectDirectConnectGateway#amazon_side_asn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a>>

The tags associated with the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_direct_connect_gateway#tags DirectconnectDirectConnectGateway#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.resetAmazonSideAsn">resetAmazonSideAsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DirectconnectDirectConnectGatewayTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a>>

---

##### `resetAmazonSideAsn` <a name="resetAmazonSideAsn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.resetAmazonSideAsn"></a>

```java
public void resetAmazonSideAsn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectDirectConnectGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.isConstruct"></a>

```java
import io.cdktn.providers.awscc.directconnect_direct_connect_gateway.DirectconnectDirectConnectGateway;

DirectconnectDirectConnectGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.directconnect_direct_connect_gateway.DirectconnectDirectConnectGateway;

DirectconnectDirectConnectGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.directconnect_direct_connect_gateway.DirectconnectDirectConnectGateway;

DirectconnectDirectConnectGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.directconnect_direct_connect_gateway.DirectconnectDirectConnectGateway;

DirectconnectDirectConnectGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DirectconnectDirectConnectGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DirectconnectDirectConnectGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DirectconnectDirectConnectGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DirectconnectDirectConnectGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_direct_connect_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectDirectConnectGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.directConnectGatewayArn">directConnectGatewayArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.directConnectGatewayId">directConnectGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList">DirectconnectDirectConnectGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.amazonSideAsnInput">amazonSideAsnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.directConnectGatewayNameInput">directConnectGatewayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.amazonSideAsn">amazonSideAsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.directConnectGatewayName">directConnectGatewayName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `directConnectGatewayArn`<sup>Required</sup> <a name="directConnectGatewayArn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.directConnectGatewayArn"></a>

```java
public java.lang.String getDirectConnectGatewayArn();
```

- *Type:* java.lang.String

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="directConnectGatewayId" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.directConnectGatewayId"></a>

```java
public java.lang.String getDirectConnectGatewayId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.tags"></a>

```java
public DirectconnectDirectConnectGatewayTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList">DirectconnectDirectConnectGatewayTagsList</a>

---

##### `amazonSideAsnInput`<sup>Optional</sup> <a name="amazonSideAsnInput" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.amazonSideAsnInput"></a>

```java
public java.lang.String getAmazonSideAsnInput();
```

- *Type:* java.lang.String

---

##### `directConnectGatewayNameInput`<sup>Optional</sup> <a name="directConnectGatewayNameInput" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.directConnectGatewayNameInput"></a>

```java
public java.lang.String getDirectConnectGatewayNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DirectconnectDirectConnectGatewayTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a>>

---

##### `amazonSideAsn`<sup>Required</sup> <a name="amazonSideAsn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.amazonSideAsn"></a>

```java
public java.lang.String getAmazonSideAsn();
```

- *Type:* java.lang.String

---

##### `directConnectGatewayName`<sup>Required</sup> <a name="directConnectGatewayName" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.directConnectGatewayName"></a>

```java
public java.lang.String getDirectConnectGatewayName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectDirectConnectGatewayConfig <a name="DirectconnectDirectConnectGatewayConfig" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_direct_connect_gateway.DirectconnectDirectConnectGatewayConfig;

DirectconnectDirectConnectGatewayConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .directConnectGatewayName(java.lang.String)
//  .amazonSideAsn(java.lang.String)
//  .tags(IResolvable|java.util.List<DirectconnectDirectConnectGatewayTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.directConnectGatewayName">directConnectGatewayName</a></code> | <code>java.lang.String</code> | The name of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.amazonSideAsn">amazonSideAsn</a></code> | <code>java.lang.String</code> | The autonomous system number (ASN) for the Amazon side of the connection. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a>></code> | The tags associated with the Direct Connect gateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `directConnectGatewayName`<sup>Required</sup> <a name="directConnectGatewayName" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.directConnectGatewayName"></a>

```java
public java.lang.String getDirectConnectGatewayName();
```

- *Type:* java.lang.String

The name of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_direct_connect_gateway#direct_connect_gateway_name DirectconnectDirectConnectGateway#direct_connect_gateway_name}

---

##### `amazonSideAsn`<sup>Optional</sup> <a name="amazonSideAsn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.amazonSideAsn"></a>

```java
public java.lang.String getAmazonSideAsn();
```

- *Type:* java.lang.String

The autonomous system number (ASN) for the Amazon side of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_direct_connect_gateway#amazon_side_asn DirectconnectDirectConnectGateway#amazon_side_asn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DirectconnectDirectConnectGatewayTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a>>

The tags associated with the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_direct_connect_gateway#tags DirectconnectDirectConnectGateway#tags}

---

### DirectconnectDirectConnectGatewayTags <a name="DirectconnectDirectConnectGatewayTags" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_direct_connect_gateway.DirectconnectDirectConnectGatewayTags;

DirectconnectDirectConnectGatewayTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_direct_connect_gateway#key DirectconnectDirectConnectGateway#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/directconnect_direct_connect_gateway#value DirectconnectDirectConnectGateway#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectconnectDirectConnectGatewayTagsList <a name="DirectconnectDirectConnectGatewayTagsList" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_direct_connect_gateway.DirectconnectDirectConnectGatewayTagsList;

new DirectconnectDirectConnectGatewayTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.get"></a>

```java
public DirectconnectDirectConnectGatewayTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DirectconnectDirectConnectGatewayTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a>>

---


### DirectconnectDirectConnectGatewayTagsOutputReference <a name="DirectconnectDirectConnectGatewayTagsOutputReference" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_direct_connect_gateway.DirectconnectDirectConnectGatewayTagsOutputReference;

new DirectconnectDirectConnectGatewayTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DirectconnectDirectConnectGatewayTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a>

---



