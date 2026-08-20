# `mediaconnectBridge` Submodule <a name="`mediaconnectBridge` Submodule" id="@cdktn/provider-awscc.mediaconnectBridge"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectBridge <a name="MediaconnectBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge awscc_mediaconnect_bridge}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridge;

MediaconnectBridge.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .placementArn(java.lang.String)
    .sources(IResolvable|java.util.List<MediaconnectBridgeSources>)
//  .egressGatewayBridge(MediaconnectBridgeEgressGatewayBridge)
//  .ingressGatewayBridge(MediaconnectBridgeIngressGatewayBridge)
//  .outputs(IResolvable|java.util.List<MediaconnectBridgeOutputs>)
//  .sourceFailoverConfig(MediaconnectBridgeSourceFailoverConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.placementArn">placementArn</a></code> | <code>java.lang.String</code> | The placement Amazon Resource Number (ARN) of the bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.sources">sources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>></code> | The sources on this bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.egressGatewayBridge">egressGatewayBridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#egress_gateway_bridge MediaconnectBridge#egress_gateway_bridge}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.ingressGatewayBridge">ingressGatewayBridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#ingress_gateway_bridge MediaconnectBridge#ingress_gateway_bridge}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.outputs">outputs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>></code> | The outputs on this bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.sourceFailoverConfig">sourceFailoverConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a></code> | The settings for source failover. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

##### `placementArn`<sup>Required</sup> <a name="placementArn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.placementArn"></a>

- *Type:* java.lang.String

The placement Amazon Resource Number (ARN) of the bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#placement_arn MediaconnectBridge#placement_arn}

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.sources"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>>

The sources on this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#sources MediaconnectBridge#sources}

---

##### `egressGatewayBridge`<sup>Optional</sup> <a name="egressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.egressGatewayBridge"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#egress_gateway_bridge MediaconnectBridge#egress_gateway_bridge}.

---

##### `ingressGatewayBridge`<sup>Optional</sup> <a name="ingressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.ingressGatewayBridge"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#ingress_gateway_bridge MediaconnectBridge#ingress_gateway_bridge}.

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.outputs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>>

The outputs on this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#outputs MediaconnectBridge#outputs}

---

##### `sourceFailoverConfig`<sup>Optional</sup> <a name="sourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.sourceFailoverConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a>

The settings for source failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#source_failover_config MediaconnectBridge#source_failover_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putEgressGatewayBridge">putEgressGatewayBridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putIngressGatewayBridge">putIngressGatewayBridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putOutputs">putOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSourceFailoverConfig">putSourceFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetEgressGatewayBridge">resetEgressGatewayBridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetIngressGatewayBridge">resetIngressGatewayBridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetOutputs">resetOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetSourceFailoverConfig">resetSourceFailoverConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEgressGatewayBridge` <a name="putEgressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putEgressGatewayBridge"></a>

```java
public void putEgressGatewayBridge(MediaconnectBridgeEgressGatewayBridge value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putEgressGatewayBridge.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a>

---

##### `putIngressGatewayBridge` <a name="putIngressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putIngressGatewayBridge"></a>

```java
public void putIngressGatewayBridge(MediaconnectBridgeIngressGatewayBridge value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putIngressGatewayBridge.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a>

---

##### `putOutputs` <a name="putOutputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putOutputs"></a>

```java
public void putOutputs(IResolvable|java.util.List<MediaconnectBridgeOutputs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putOutputs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>>

---

##### `putSourceFailoverConfig` <a name="putSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSourceFailoverConfig"></a>

```java
public void putSourceFailoverConfig(MediaconnectBridgeSourceFailoverConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSourceFailoverConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a>

---

##### `putSources` <a name="putSources" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSources"></a>

```java
public void putSources(IResolvable|java.util.List<MediaconnectBridgeSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>>

---

##### `resetEgressGatewayBridge` <a name="resetEgressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetEgressGatewayBridge"></a>

```java
public void resetEgressGatewayBridge()
```

##### `resetIngressGatewayBridge` <a name="resetIngressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetIngressGatewayBridge"></a>

```java
public void resetIngressGatewayBridge()
```

##### `resetOutputs` <a name="resetOutputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetOutputs"></a>

```java
public void resetOutputs()
```

##### `resetSourceFailoverConfig` <a name="resetSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetSourceFailoverConfig"></a>

```java
public void resetSourceFailoverConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectBridge resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isConstruct"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridge;

MediaconnectBridge.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridge;

MediaconnectBridge.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridge;

MediaconnectBridge.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridge;

MediaconnectBridge.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediaconnectBridge.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MediaconnectBridge resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediaconnectBridge to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediaconnectBridge that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectBridge to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.bridgeArn">bridgeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.bridgeState">bridgeState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.egressGatewayBridge">egressGatewayBridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference">MediaconnectBridgeEgressGatewayBridgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.ingressGatewayBridge">ingressGatewayBridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference">MediaconnectBridgeIngressGatewayBridgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList">MediaconnectBridgeOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourceFailoverConfig">sourceFailoverConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference">MediaconnectBridgeSourceFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList">MediaconnectBridgeSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.egressGatewayBridgeInput">egressGatewayBridgeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.ingressGatewayBridgeInput">ingressGatewayBridgeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.outputsInput">outputsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.placementArnInput">placementArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourceFailoverConfigInput">sourceFailoverConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourcesInput">sourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.placementArn">placementArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bridgeArn`<sup>Required</sup> <a name="bridgeArn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.bridgeArn"></a>

```java
public java.lang.String getBridgeArn();
```

- *Type:* java.lang.String

---

##### `bridgeState`<sup>Required</sup> <a name="bridgeState" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.bridgeState"></a>

```java
public java.lang.String getBridgeState();
```

- *Type:* java.lang.String

---

##### `egressGatewayBridge`<sup>Required</sup> <a name="egressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.egressGatewayBridge"></a>

```java
public MediaconnectBridgeEgressGatewayBridgeOutputReference getEgressGatewayBridge();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference">MediaconnectBridgeEgressGatewayBridgeOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ingressGatewayBridge`<sup>Required</sup> <a name="ingressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.ingressGatewayBridge"></a>

```java
public MediaconnectBridgeIngressGatewayBridgeOutputReference getIngressGatewayBridge();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference">MediaconnectBridgeIngressGatewayBridgeOutputReference</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.outputs"></a>

```java
public MediaconnectBridgeOutputsList getOutputs();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList">MediaconnectBridgeOutputsList</a>

---

##### `sourceFailoverConfig`<sup>Required</sup> <a name="sourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourceFailoverConfig"></a>

```java
public MediaconnectBridgeSourceFailoverConfigOutputReference getSourceFailoverConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference">MediaconnectBridgeSourceFailoverConfigOutputReference</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sources"></a>

```java
public MediaconnectBridgeSourcesList getSources();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList">MediaconnectBridgeSourcesList</a>

---

##### `egressGatewayBridgeInput`<sup>Optional</sup> <a name="egressGatewayBridgeInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.egressGatewayBridgeInput"></a>

```java
public IResolvable|MediaconnectBridgeEgressGatewayBridge getEgressGatewayBridgeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a>

---

##### `ingressGatewayBridgeInput`<sup>Optional</sup> <a name="ingressGatewayBridgeInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.ingressGatewayBridgeInput"></a>

```java
public IResolvable|MediaconnectBridgeIngressGatewayBridge getIngressGatewayBridgeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outputsInput`<sup>Optional</sup> <a name="outputsInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.outputsInput"></a>

```java
public IResolvable|java.util.List<MediaconnectBridgeOutputs> getOutputsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>>

---

##### `placementArnInput`<sup>Optional</sup> <a name="placementArnInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.placementArnInput"></a>

```java
public java.lang.String getPlacementArnInput();
```

- *Type:* java.lang.String

---

##### `sourceFailoverConfigInput`<sup>Optional</sup> <a name="sourceFailoverConfigInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourceFailoverConfigInput"></a>

```java
public IResolvable|MediaconnectBridgeSourceFailoverConfig getSourceFailoverConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a>

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourcesInput"></a>

```java
public IResolvable|java.util.List<MediaconnectBridgeSources> getSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `placementArn`<sup>Required</sup> <a name="placementArn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.placementArn"></a>

```java
public java.lang.String getPlacementArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectBridgeConfig <a name="MediaconnectBridgeConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeConfig;

MediaconnectBridgeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .placementArn(java.lang.String)
    .sources(IResolvable|java.util.List<MediaconnectBridgeSources>)
//  .egressGatewayBridge(MediaconnectBridgeEgressGatewayBridge)
//  .ingressGatewayBridge(MediaconnectBridgeIngressGatewayBridge)
//  .outputs(IResolvable|java.util.List<MediaconnectBridgeOutputs>)
//  .sourceFailoverConfig(MediaconnectBridgeSourceFailoverConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.placementArn">placementArn</a></code> | <code>java.lang.String</code> | The placement Amazon Resource Number (ARN) of the bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.sources">sources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>></code> | The sources on this bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.egressGatewayBridge">egressGatewayBridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#egress_gateway_bridge MediaconnectBridge#egress_gateway_bridge}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.ingressGatewayBridge">ingressGatewayBridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#ingress_gateway_bridge MediaconnectBridge#ingress_gateway_bridge}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.outputs">outputs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>></code> | The outputs on this bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.sourceFailoverConfig">sourceFailoverConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a></code> | The settings for source failover. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

##### `placementArn`<sup>Required</sup> <a name="placementArn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.placementArn"></a>

```java
public java.lang.String getPlacementArn();
```

- *Type:* java.lang.String

The placement Amazon Resource Number (ARN) of the bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#placement_arn MediaconnectBridge#placement_arn}

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.sources"></a>

```java
public IResolvable|java.util.List<MediaconnectBridgeSources> getSources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>>

The sources on this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#sources MediaconnectBridge#sources}

---

##### `egressGatewayBridge`<sup>Optional</sup> <a name="egressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.egressGatewayBridge"></a>

```java
public MediaconnectBridgeEgressGatewayBridge getEgressGatewayBridge();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#egress_gateway_bridge MediaconnectBridge#egress_gateway_bridge}.

---

##### `ingressGatewayBridge`<sup>Optional</sup> <a name="ingressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.ingressGatewayBridge"></a>

```java
public MediaconnectBridgeIngressGatewayBridge getIngressGatewayBridge();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#ingress_gateway_bridge MediaconnectBridge#ingress_gateway_bridge}.

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.outputs"></a>

```java
public IResolvable|java.util.List<MediaconnectBridgeOutputs> getOutputs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>>

The outputs on this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#outputs MediaconnectBridge#outputs}

---

##### `sourceFailoverConfig`<sup>Optional</sup> <a name="sourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.sourceFailoverConfig"></a>

```java
public MediaconnectBridgeSourceFailoverConfig getSourceFailoverConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a>

The settings for source failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#source_failover_config MediaconnectBridge#source_failover_config}

---

### MediaconnectBridgeEgressGatewayBridge <a name="MediaconnectBridgeEgressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeEgressGatewayBridge;

MediaconnectBridgeEgressGatewayBridge.builder()
//  .maxBitrate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge.property.maxBitrate">maxBitrate</a></code> | <code>java.lang.Number</code> | The maximum expected bitrate of the egress bridge. |

---

##### `maxBitrate`<sup>Optional</sup> <a name="maxBitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge.property.maxBitrate"></a>

```java
public java.lang.Number getMaxBitrate();
```

- *Type:* java.lang.Number

The maximum expected bitrate of the egress bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#max_bitrate MediaconnectBridge#max_bitrate}

---

### MediaconnectBridgeIngressGatewayBridge <a name="MediaconnectBridgeIngressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeIngressGatewayBridge;

MediaconnectBridgeIngressGatewayBridge.builder()
//  .maxBitrate(java.lang.Number)
//  .maxOutputs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.property.maxBitrate">maxBitrate</a></code> | <code>java.lang.Number</code> | The maximum expected bitrate of the ingress bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.property.maxOutputs">maxOutputs</a></code> | <code>java.lang.Number</code> | The maximum number of outputs on the ingress bridge. |

---

##### `maxBitrate`<sup>Optional</sup> <a name="maxBitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.property.maxBitrate"></a>

```java
public java.lang.Number getMaxBitrate();
```

- *Type:* java.lang.Number

The maximum expected bitrate of the ingress bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#max_bitrate MediaconnectBridge#max_bitrate}

---

##### `maxOutputs`<sup>Optional</sup> <a name="maxOutputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.property.maxOutputs"></a>

```java
public java.lang.Number getMaxOutputs();
```

- *Type:* java.lang.Number

The maximum number of outputs on the ingress bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#max_outputs MediaconnectBridge#max_outputs}

---

### MediaconnectBridgeOutputs <a name="MediaconnectBridgeOutputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeOutputs;

MediaconnectBridgeOutputs.builder()
//  .networkOutput(MediaconnectBridgeOutputsNetworkOutput)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs.property.networkOutput">networkOutput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a></code> | The output of the bridge. A network output is delivered to your premises. |

---

##### `networkOutput`<sup>Optional</sup> <a name="networkOutput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs.property.networkOutput"></a>

```java
public MediaconnectBridgeOutputsNetworkOutput getNetworkOutput();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a>

The output of the bridge. A network output is delivered to your premises.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#network_output MediaconnectBridge#network_output}

---

### MediaconnectBridgeOutputsNetworkOutput <a name="MediaconnectBridgeOutputsNetworkOutput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeOutputsNetworkOutput;

MediaconnectBridgeOutputsNetworkOutput.builder()
//  .ipAddress(java.lang.String)
//  .name(java.lang.String)
//  .networkName(java.lang.String)
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | The network output IP Address. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.name">name</a></code> | <code>java.lang.String</code> | The network output name. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.networkName">networkName</a></code> | <code>java.lang.String</code> | The network output's gateway network name. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.port">port</a></code> | <code>java.lang.Number</code> | The network output port. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The network output protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | The network output TTL. |

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

The network output IP Address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#ip_address MediaconnectBridge#ip_address}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The network output name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

##### `networkName`<sup>Optional</sup> <a name="networkName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.networkName"></a>

```java
public java.lang.String getNetworkName();
```

- *Type:* java.lang.String

The network output's gateway network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#network_name MediaconnectBridge#network_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The network output port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#port MediaconnectBridge#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The network output protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#protocol MediaconnectBridge#protocol}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

The network output TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#ttl MediaconnectBridge#ttl}

---

### MediaconnectBridgeSourceFailoverConfig <a name="MediaconnectBridgeSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeSourceFailoverConfig;

MediaconnectBridgeSourceFailoverConfig.builder()
//  .failoverMode(java.lang.String)
//  .sourcePriority(MediaconnectBridgeSourceFailoverConfigSourcePriority)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.failoverMode">failoverMode</a></code> | <code>java.lang.String</code> | The type of failover you choose for this flow. FAILOVER allows switching between different streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.sourcePriority">sourcePriority</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a></code> | The priority you want to assign to a source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#state MediaconnectBridge#state}. |

---

##### `failoverMode`<sup>Optional</sup> <a name="failoverMode" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.failoverMode"></a>

```java
public java.lang.String getFailoverMode();
```

- *Type:* java.lang.String

The type of failover you choose for this flow. FAILOVER allows switching between different streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#failover_mode MediaconnectBridge#failover_mode}

---

##### `sourcePriority`<sup>Optional</sup> <a name="sourcePriority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.sourcePriority"></a>

```java
public MediaconnectBridgeSourceFailoverConfigSourcePriority getSourcePriority();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a>

The priority you want to assign to a source.

You can have a primary stream and a backup stream or two equally prioritized streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#source_priority MediaconnectBridge#source_priority}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#state MediaconnectBridge#state}.

---

### MediaconnectBridgeSourceFailoverConfigSourcePriority <a name="MediaconnectBridgeSourceFailoverConfigSourcePriority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeSourceFailoverConfigSourcePriority;

MediaconnectBridgeSourceFailoverConfigSourcePriority.builder()
//  .primarySource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority.property.primarySource">primarySource</a></code> | <code>java.lang.String</code> | The name of the source you choose as the primary source for this flow. |

---

##### `primarySource`<sup>Optional</sup> <a name="primarySource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority.property.primarySource"></a>

```java
public java.lang.String getPrimarySource();
```

- *Type:* java.lang.String

The name of the source you choose as the primary source for this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#primary_source MediaconnectBridge#primary_source}

---

### MediaconnectBridgeSources <a name="MediaconnectBridgeSources" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeSources;

MediaconnectBridgeSources.builder()
//  .flowSource(MediaconnectBridgeSourcesFlowSource)
//  .networkSource(MediaconnectBridgeSourcesNetworkSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.property.flowSource">flowSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a></code> | The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.property.networkSource">networkSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a></code> | The source of the bridge. A network source originates at your premises. |

---

##### `flowSource`<sup>Optional</sup> <a name="flowSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.property.flowSource"></a>

```java
public MediaconnectBridgeSourcesFlowSource getFlowSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a>

The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#flow_source MediaconnectBridge#flow_source}

---

##### `networkSource`<sup>Optional</sup> <a name="networkSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.property.networkSource"></a>

```java
public MediaconnectBridgeSourcesNetworkSource getNetworkSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a>

The source of the bridge. A network source originates at your premises.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#network_source MediaconnectBridge#network_source}

---

### MediaconnectBridgeSourcesFlowSource <a name="MediaconnectBridgeSourcesFlowSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeSourcesFlowSource;

MediaconnectBridgeSourcesFlowSource.builder()
//  .flowArn(java.lang.String)
//  .flowVpcInterfaceAttachment(MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.flowArn">flowArn</a></code> | <code>java.lang.String</code> | The ARN of the cloud flow used as a source of this bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.flowVpcInterfaceAttachment">flowVpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a></code> | The name of the VPC interface attachment to use for this source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.name">name</a></code> | <code>java.lang.String</code> | The name of the flow source. |

---

##### `flowArn`<sup>Optional</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.flowArn"></a>

```java
public java.lang.String getFlowArn();
```

- *Type:* java.lang.String

The ARN of the cloud flow used as a source of this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#flow_arn MediaconnectBridge#flow_arn}

---

##### `flowVpcInterfaceAttachment`<sup>Optional</sup> <a name="flowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.flowVpcInterfaceAttachment"></a>

```java
public MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment getFlowVpcInterfaceAttachment();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a>

The name of the VPC interface attachment to use for this source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#flow_vpc_interface_attachment MediaconnectBridge#flow_vpc_interface_attachment}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the flow source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

### MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment <a name="MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment;

MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment.builder()
//  .vpcInterfaceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>java.lang.String</code> | The name of the VPC interface to use for this resource. |

---

##### `vpcInterfaceName`<sup>Optional</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment.property.vpcInterfaceName"></a>

```java
public java.lang.String getVpcInterfaceName();
```

- *Type:* java.lang.String

The name of the VPC interface to use for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#vpc_interface_name MediaconnectBridge#vpc_interface_name}

---

### MediaconnectBridgeSourcesNetworkSource <a name="MediaconnectBridgeSourcesNetworkSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeSourcesNetworkSource;

MediaconnectBridgeSourcesNetworkSource.builder()
//  .multicastIp(java.lang.String)
//  .multicastSourceSettings(MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings)
//  .name(java.lang.String)
//  .networkName(java.lang.String)
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.multicastIp">multicastIp</a></code> | <code>java.lang.String</code> | The network source multicast IP. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.multicastSourceSettings">multicastSourceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a></code> | The settings related to the multicast source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.name">name</a></code> | <code>java.lang.String</code> | The name of the network source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.networkName">networkName</a></code> | <code>java.lang.String</code> | The network source's gateway network name. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.port">port</a></code> | <code>java.lang.Number</code> | The network source port. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The network source protocol. |

---

##### `multicastIp`<sup>Optional</sup> <a name="multicastIp" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.multicastIp"></a>

```java
public java.lang.String getMulticastIp();
```

- *Type:* java.lang.String

The network source multicast IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#multicast_ip MediaconnectBridge#multicast_ip}

---

##### `multicastSourceSettings`<sup>Optional</sup> <a name="multicastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.multicastSourceSettings"></a>

```java
public MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings getMulticastSourceSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a>

The settings related to the multicast source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#multicast_source_settings MediaconnectBridge#multicast_source_settings}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the network source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

##### `networkName`<sup>Optional</sup> <a name="networkName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.networkName"></a>

```java
public java.lang.String getNetworkName();
```

- *Type:* java.lang.String

The network source's gateway network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#network_name MediaconnectBridge#network_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The network source port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#port MediaconnectBridge#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The network source protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#protocol MediaconnectBridge#protocol}

---

### MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings <a name="MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings;

MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings.builder()
//  .multicastSourceIp(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings.property.multicastSourceIp">multicastSourceIp</a></code> | <code>java.lang.String</code> | The IP address of the source for source-specific multicast (SSM). |

---

##### `multicastSourceIp`<sup>Optional</sup> <a name="multicastSourceIp" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings.property.multicastSourceIp"></a>

```java
public java.lang.String getMulticastSourceIp();
```

- *Type:* java.lang.String

The IP address of the source for source-specific multicast (SSM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#multicast_source_ip MediaconnectBridge#multicast_source_ip}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectBridgeEgressGatewayBridgeOutputReference <a name="MediaconnectBridgeEgressGatewayBridgeOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeEgressGatewayBridgeOutputReference;

new MediaconnectBridgeEgressGatewayBridgeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resetMaxBitrate">resetMaxBitrate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxBitrate` <a name="resetMaxBitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resetMaxBitrate"></a>

```java
public void resetMaxBitrate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.maxBitrateInput">maxBitrateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.maxBitrate">maxBitrate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxBitrateInput`<sup>Optional</sup> <a name="maxBitrateInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.maxBitrateInput"></a>

```java
public java.lang.Number getMaxBitrateInput();
```

- *Type:* java.lang.Number

---

##### `maxBitrate`<sup>Required</sup> <a name="maxBitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.maxBitrate"></a>

```java
public java.lang.Number getMaxBitrate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectBridgeEgressGatewayBridge getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a>

---


### MediaconnectBridgeIngressGatewayBridgeOutputReference <a name="MediaconnectBridgeIngressGatewayBridgeOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeIngressGatewayBridgeOutputReference;

new MediaconnectBridgeIngressGatewayBridgeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resetMaxBitrate">resetMaxBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resetMaxOutputs">resetMaxOutputs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxBitrate` <a name="resetMaxBitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resetMaxBitrate"></a>

```java
public void resetMaxBitrate()
```

##### `resetMaxOutputs` <a name="resetMaxOutputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resetMaxOutputs"></a>

```java
public void resetMaxOutputs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxBitrateInput">maxBitrateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxOutputsInput">maxOutputsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxBitrate">maxBitrate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxOutputs">maxOutputs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxBitrateInput`<sup>Optional</sup> <a name="maxBitrateInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxBitrateInput"></a>

```java
public java.lang.Number getMaxBitrateInput();
```

- *Type:* java.lang.Number

---

##### `maxOutputsInput`<sup>Optional</sup> <a name="maxOutputsInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxOutputsInput"></a>

```java
public java.lang.Number getMaxOutputsInput();
```

- *Type:* java.lang.Number

---

##### `maxBitrate`<sup>Required</sup> <a name="maxBitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxBitrate"></a>

```java
public java.lang.Number getMaxBitrate();
```

- *Type:* java.lang.Number

---

##### `maxOutputs`<sup>Required</sup> <a name="maxOutputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxOutputs"></a>

```java
public java.lang.Number getMaxOutputs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectBridgeIngressGatewayBridge getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a>

---


### MediaconnectBridgeOutputsList <a name="MediaconnectBridgeOutputsList" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeOutputsList;

new MediaconnectBridgeOutputsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.get"></a>

```java
public MediaconnectBridgeOutputsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediaconnectBridgeOutputs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>>

---


### MediaconnectBridgeOutputsNetworkOutputOutputReference <a name="MediaconnectBridgeOutputsNetworkOutputOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeOutputsNetworkOutputOutputReference;

new MediaconnectBridgeOutputsNetworkOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetNetworkName">resetNetworkName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNetworkName` <a name="resetNetworkName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetNetworkName"></a>

```java
public void resetNetworkName()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.networkNameInput">networkNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.networkName">networkName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkNameInput`<sup>Optional</sup> <a name="networkNameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.networkNameInput"></a>

```java
public java.lang.String getNetworkNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.networkName"></a>

```java
public java.lang.String getNetworkName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectBridgeOutputsNetworkOutput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a>

---


### MediaconnectBridgeOutputsOutputReference <a name="MediaconnectBridgeOutputsOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeOutputsOutputReference;

new MediaconnectBridgeOutputsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.putNetworkOutput">putNetworkOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resetNetworkOutput">resetNetworkOutput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkOutput` <a name="putNetworkOutput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.putNetworkOutput"></a>

```java
public void putNetworkOutput(MediaconnectBridgeOutputsNetworkOutput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.putNetworkOutput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a>

---

##### `resetNetworkOutput` <a name="resetNetworkOutput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resetNetworkOutput"></a>

```java
public void resetNetworkOutput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.networkOutput">networkOutput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference">MediaconnectBridgeOutputsNetworkOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.networkOutputInput">networkOutputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkOutput`<sup>Required</sup> <a name="networkOutput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.networkOutput"></a>

```java
public MediaconnectBridgeOutputsNetworkOutputOutputReference getNetworkOutput();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference">MediaconnectBridgeOutputsNetworkOutputOutputReference</a>

---

##### `networkOutputInput`<sup>Optional</sup> <a name="networkOutputInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.networkOutputInput"></a>

```java
public IResolvable|MediaconnectBridgeOutputsNetworkOutput getNetworkOutputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectBridgeOutputs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>

---


### MediaconnectBridgeSourceFailoverConfigOutputReference <a name="MediaconnectBridgeSourceFailoverConfigOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeSourceFailoverConfigOutputReference;

new MediaconnectBridgeSourceFailoverConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.putSourcePriority">putSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetFailoverMode">resetFailoverMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetSourcePriority">resetSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourcePriority` <a name="putSourcePriority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.putSourcePriority"></a>

```java
public void putSourcePriority(MediaconnectBridgeSourceFailoverConfigSourcePriority value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.putSourcePriority.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a>

---

##### `resetFailoverMode` <a name="resetFailoverMode" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetFailoverMode"></a>

```java
public void resetFailoverMode()
```

##### `resetSourcePriority` <a name="resetSourcePriority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetSourcePriority"></a>

```java
public void resetSourcePriority()
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetState"></a>

```java
public void resetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.sourcePriority">sourcePriority</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference">MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.failoverModeInput">failoverModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.sourcePriorityInput">sourcePriorityInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.failoverMode">failoverMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourcePriority`<sup>Required</sup> <a name="sourcePriority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.sourcePriority"></a>

```java
public MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference getSourcePriority();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference">MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference</a>

---

##### `failoverModeInput`<sup>Optional</sup> <a name="failoverModeInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.failoverModeInput"></a>

```java
public java.lang.String getFailoverModeInput();
```

- *Type:* java.lang.String

---

##### `sourcePriorityInput`<sup>Optional</sup> <a name="sourcePriorityInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.sourcePriorityInput"></a>

```java
public IResolvable|MediaconnectBridgeSourceFailoverConfigSourcePriority getSourcePriorityInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `failoverMode`<sup>Required</sup> <a name="failoverMode" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.failoverMode"></a>

```java
public java.lang.String getFailoverMode();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectBridgeSourceFailoverConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a>

---


### MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference <a name="MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference;

new MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resetPrimarySource">resetPrimarySource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimarySource` <a name="resetPrimarySource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resetPrimarySource"></a>

```java
public void resetPrimarySource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.primarySourceInput">primarySourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.primarySource">primarySource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `primarySourceInput`<sup>Optional</sup> <a name="primarySourceInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.primarySourceInput"></a>

```java
public java.lang.String getPrimarySourceInput();
```

- *Type:* java.lang.String

---

##### `primarySource`<sup>Required</sup> <a name="primarySource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.primarySource"></a>

```java
public java.lang.String getPrimarySource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectBridgeSourceFailoverConfigSourcePriority getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a>

---


### MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference <a name="MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference;

new MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName">resetVpcInterfaceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcInterfaceName` <a name="resetVpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName"></a>

```java
public void resetVpcInterfaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput">vpcInterfaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcInterfaceNameInput`<sup>Optional</sup> <a name="vpcInterfaceNameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput"></a>

```java
public java.lang.String getVpcInterfaceNameInput();
```

- *Type:* java.lang.String

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName"></a>

```java
public java.lang.String getVpcInterfaceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a>

---


### MediaconnectBridgeSourcesFlowSourceOutputReference <a name="MediaconnectBridgeSourcesFlowSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeSourcesFlowSourceOutputReference;

new MediaconnectBridgeSourcesFlowSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.putFlowVpcInterfaceAttachment">putFlowVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetFlowArn">resetFlowArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetFlowVpcInterfaceAttachment">resetFlowVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFlowVpcInterfaceAttachment` <a name="putFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.putFlowVpcInterfaceAttachment"></a>

```java
public void putFlowVpcInterfaceAttachment(MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.putFlowVpcInterfaceAttachment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a>

---

##### `resetFlowArn` <a name="resetFlowArn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetFlowArn"></a>

```java
public void resetFlowArn()
```

##### `resetFlowVpcInterfaceAttachment` <a name="resetFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetFlowVpcInterfaceAttachment"></a>

```java
public void resetFlowVpcInterfaceAttachment()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowVpcInterfaceAttachment">flowVpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowArnInput">flowArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowVpcInterfaceAttachmentInput">flowVpcInterfaceAttachmentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowArn">flowArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `flowVpcInterfaceAttachment`<sup>Required</sup> <a name="flowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowVpcInterfaceAttachment"></a>

```java
public MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference getFlowVpcInterfaceAttachment();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference</a>

---

##### `flowArnInput`<sup>Optional</sup> <a name="flowArnInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowArnInput"></a>

```java
public java.lang.String getFlowArnInput();
```

- *Type:* java.lang.String

---

##### `flowVpcInterfaceAttachmentInput`<sup>Optional</sup> <a name="flowVpcInterfaceAttachmentInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowVpcInterfaceAttachmentInput"></a>

```java
public IResolvable|MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment getFlowVpcInterfaceAttachmentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowArn"></a>

```java
public java.lang.String getFlowArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectBridgeSourcesFlowSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a>

---


### MediaconnectBridgeSourcesList <a name="MediaconnectBridgeSourcesList" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeSourcesList;

new MediaconnectBridgeSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.get"></a>

```java
public MediaconnectBridgeSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediaconnectBridgeSources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>>

---


### MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference <a name="MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference;

new MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resetMulticastSourceIp">resetMulticastSourceIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMulticastSourceIp` <a name="resetMulticastSourceIp" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resetMulticastSourceIp"></a>

```java
public void resetMulticastSourceIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIpInput">multicastSourceIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp">multicastSourceIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `multicastSourceIpInput`<sup>Optional</sup> <a name="multicastSourceIpInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIpInput"></a>

```java
public java.lang.String getMulticastSourceIpInput();
```

- *Type:* java.lang.String

---

##### `multicastSourceIp`<sup>Required</sup> <a name="multicastSourceIp" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp"></a>

```java
public java.lang.String getMulticastSourceIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a>

---


### MediaconnectBridgeSourcesNetworkSourceOutputReference <a name="MediaconnectBridgeSourcesNetworkSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeSourcesNetworkSourceOutputReference;

new MediaconnectBridgeSourcesNetworkSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.putMulticastSourceSettings">putMulticastSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetMulticastIp">resetMulticastIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetMulticastSourceSettings">resetMulticastSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetNetworkName">resetNetworkName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMulticastSourceSettings` <a name="putMulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.putMulticastSourceSettings"></a>

```java
public void putMulticastSourceSettings(MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.putMulticastSourceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a>

---

##### `resetMulticastIp` <a name="resetMulticastIp" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetMulticastIp"></a>

```java
public void resetMulticastIp()
```

##### `resetMulticastSourceSettings` <a name="resetMulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetMulticastSourceSettings"></a>

```java
public void resetMulticastSourceSettings()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNetworkName` <a name="resetNetworkName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetNetworkName"></a>

```java
public void resetNetworkName()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastSourceSettings">multicastSourceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastIpInput">multicastIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastSourceSettingsInput">multicastSourceSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.networkNameInput">networkNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastIp">multicastIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.networkName">networkName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `multicastSourceSettings`<sup>Required</sup> <a name="multicastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastSourceSettings"></a>

```java
public MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference getMulticastSourceSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference</a>

---

##### `multicastIpInput`<sup>Optional</sup> <a name="multicastIpInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastIpInput"></a>

```java
public java.lang.String getMulticastIpInput();
```

- *Type:* java.lang.String

---

##### `multicastSourceSettingsInput`<sup>Optional</sup> <a name="multicastSourceSettingsInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastSourceSettingsInput"></a>

```java
public IResolvable|MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings getMulticastSourceSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkNameInput`<sup>Optional</sup> <a name="networkNameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.networkNameInput"></a>

```java
public java.lang.String getNetworkNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `multicastIp`<sup>Required</sup> <a name="multicastIp" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastIp"></a>

```java
public java.lang.String getMulticastIp();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.networkName"></a>

```java
public java.lang.String getNetworkName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectBridgeSourcesNetworkSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a>

---


### MediaconnectBridgeSourcesOutputReference <a name="MediaconnectBridgeSourcesOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_bridge.MediaconnectBridgeSourcesOutputReference;

new MediaconnectBridgeSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putFlowSource">putFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putNetworkSource">putNetworkSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resetFlowSource">resetFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resetNetworkSource">resetNetworkSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFlowSource` <a name="putFlowSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putFlowSource"></a>

```java
public void putFlowSource(MediaconnectBridgeSourcesFlowSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putFlowSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a>

---

##### `putNetworkSource` <a name="putNetworkSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putNetworkSource"></a>

```java
public void putNetworkSource(MediaconnectBridgeSourcesNetworkSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putNetworkSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a>

---

##### `resetFlowSource` <a name="resetFlowSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resetFlowSource"></a>

```java
public void resetFlowSource()
```

##### `resetNetworkSource` <a name="resetNetworkSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resetNetworkSource"></a>

```java
public void resetNetworkSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.flowSource">flowSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference">MediaconnectBridgeSourcesFlowSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.networkSource">networkSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference">MediaconnectBridgeSourcesNetworkSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.flowSourceInput">flowSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.networkSourceInput">networkSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `flowSource`<sup>Required</sup> <a name="flowSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.flowSource"></a>

```java
public MediaconnectBridgeSourcesFlowSourceOutputReference getFlowSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference">MediaconnectBridgeSourcesFlowSourceOutputReference</a>

---

##### `networkSource`<sup>Required</sup> <a name="networkSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.networkSource"></a>

```java
public MediaconnectBridgeSourcesNetworkSourceOutputReference getNetworkSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference">MediaconnectBridgeSourcesNetworkSourceOutputReference</a>

---

##### `flowSourceInput`<sup>Optional</sup> <a name="flowSourceInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.flowSourceInput"></a>

```java
public IResolvable|MediaconnectBridgeSourcesFlowSource getFlowSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a>

---

##### `networkSourceInput`<sup>Optional</sup> <a name="networkSourceInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.networkSourceInput"></a>

```java
public IResolvable|MediaconnectBridgeSourcesNetworkSource getNetworkSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectBridgeSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>

---



