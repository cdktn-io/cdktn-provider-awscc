# `networkmanagerDirectConnectGatewayAttachment` Submodule <a name="`networkmanagerDirectConnectGatewayAttachment` Submodule" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerDirectConnectGatewayAttachment <a name="NetworkmanagerDirectConnectGatewayAttachment" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment awscc_networkmanager_direct_connect_gateway_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_direct_connect_gateway_attachment.NetworkmanagerDirectConnectGatewayAttachment;

NetworkmanagerDirectConnectGatewayAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .coreNetworkId(java.lang.String)
    .directConnectGatewayArn(java.lang.String)
    .edgeLocations(java.util.List<java.lang.String>)
//  .proposedNetworkFunctionGroupChange(NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange)
//  .proposedSegmentChange(NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange)
//  .routingPolicyLabel(java.lang.String)
//  .tags(IResolvable|java.util.List<NetworkmanagerDirectConnectGatewayAttachmentTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.coreNetworkId">coreNetworkId</a></code> | <code>java.lang.String</code> | The ID of a core network for the Direct Connect Gateway attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.directConnectGatewayArn">directConnectGatewayArn</a></code> | <code>java.lang.String</code> | The ARN of the Direct Connect Gateway. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.edgeLocations">edgeLocations</a></code> | <code>java.util.List<java.lang.String></code> | The Regions where the edges are located. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.proposedNetworkFunctionGroupChange">proposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange</a></code> | The attachment to move from one network function group to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.proposedSegmentChange">proposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange</a></code> | The attachment to move from one segment to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.routingPolicyLabel">routingPolicyLabel</a></code> | <code>java.lang.String</code> | Routing policy label. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a>></code> | Tags for the attachment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.coreNetworkId"></a>

- *Type:* java.lang.String

The ID of a core network for the Direct Connect Gateway attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#core_network_id NetworkmanagerDirectConnectGatewayAttachment#core_network_id}

---

##### `directConnectGatewayArn`<sup>Required</sup> <a name="directConnectGatewayArn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.directConnectGatewayArn"></a>

- *Type:* java.lang.String

The ARN of the Direct Connect Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#direct_connect_gateway_arn NetworkmanagerDirectConnectGatewayAttachment#direct_connect_gateway_arn}

---

##### `edgeLocations`<sup>Required</sup> <a name="edgeLocations" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.edgeLocations"></a>

- *Type:* java.util.List<java.lang.String>

The Regions where the edges are located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#edge_locations NetworkmanagerDirectConnectGatewayAttachment#edge_locations}

---

##### `proposedNetworkFunctionGroupChange`<sup>Optional</sup> <a name="proposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.proposedNetworkFunctionGroupChange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange</a>

The attachment to move from one network function group to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#proposed_network_function_group_change NetworkmanagerDirectConnectGatewayAttachment#proposed_network_function_group_change}

---

##### `proposedSegmentChange`<sup>Optional</sup> <a name="proposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.proposedSegmentChange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange</a>

The attachment to move from one segment to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#proposed_segment_change NetworkmanagerDirectConnectGatewayAttachment#proposed_segment_change}

---

##### `routingPolicyLabel`<sup>Optional</sup> <a name="routingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.routingPolicyLabel"></a>

- *Type:* java.lang.String

Routing policy label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#routing_policy_label NetworkmanagerDirectConnectGatewayAttachment#routing_policy_label}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a>>

Tags for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#tags NetworkmanagerDirectConnectGatewayAttachment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.putProposedNetworkFunctionGroupChange">putProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.putProposedSegmentChange">putProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetProposedNetworkFunctionGroupChange">resetProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetProposedSegmentChange">resetProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetRoutingPolicyLabel">resetRoutingPolicyLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProposedNetworkFunctionGroupChange` <a name="putProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.putProposedNetworkFunctionGroupChange"></a>

```java
public void putProposedNetworkFunctionGroupChange(NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.putProposedNetworkFunctionGroupChange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange</a>

---

##### `putProposedSegmentChange` <a name="putProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.putProposedSegmentChange"></a>

```java
public void putProposedSegmentChange(NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.putProposedSegmentChange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<NetworkmanagerDirectConnectGatewayAttachmentTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a>>

---

##### `resetProposedNetworkFunctionGroupChange` <a name="resetProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetProposedNetworkFunctionGroupChange"></a>

```java
public void resetProposedNetworkFunctionGroupChange()
```

##### `resetProposedSegmentChange` <a name="resetProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetProposedSegmentChange"></a>

```java
public void resetProposedSegmentChange()
```

##### `resetRoutingPolicyLabel` <a name="resetRoutingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetRoutingPolicyLabel"></a>

```java
public void resetRoutingPolicyLabel()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerDirectConnectGatewayAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.networkmanager_direct_connect_gateway_attachment.NetworkmanagerDirectConnectGatewayAttachment;

NetworkmanagerDirectConnectGatewayAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.networkmanager_direct_connect_gateway_attachment.NetworkmanagerDirectConnectGatewayAttachment;

NetworkmanagerDirectConnectGatewayAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.networkmanager_direct_connect_gateway_attachment.NetworkmanagerDirectConnectGatewayAttachment;

NetworkmanagerDirectConnectGatewayAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.networkmanager_direct_connect_gateway_attachment.NetworkmanagerDirectConnectGatewayAttachment;

NetworkmanagerDirectConnectGatewayAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkmanagerDirectConnectGatewayAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkmanagerDirectConnectGatewayAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkmanagerDirectConnectGatewayAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkmanagerDirectConnectGatewayAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerDirectConnectGatewayAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.attachmentId">attachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.attachmentType">attachmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.coreNetworkArn">coreNetworkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.lastModificationErrors">lastModificationErrors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.ownerAccountId">ownerAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.proposedNetworkFunctionGroupChange">proposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.proposedSegmentChange">proposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.segmentName">segmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList">NetworkmanagerDirectConnectGatewayAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.coreNetworkIdInput">coreNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.directConnectGatewayArnInput">directConnectGatewayArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.edgeLocationsInput">edgeLocationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.proposedNetworkFunctionGroupChangeInput">proposedNetworkFunctionGroupChangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.proposedSegmentChangeInput">proposedSegmentChangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.routingPolicyLabelInput">routingPolicyLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.coreNetworkId">coreNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.directConnectGatewayArn">directConnectGatewayArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.edgeLocations">edgeLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.routingPolicyLabel">routingPolicyLabel</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.attachmentId"></a>

```java
public java.lang.String getAttachmentId();
```

- *Type:* java.lang.String

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.attachmentPolicyRuleNumber"></a>

```java
public java.lang.Number getAttachmentPolicyRuleNumber();
```

- *Type:* java.lang.Number

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.attachmentType"></a>

```java
public java.lang.String getAttachmentType();
```

- *Type:* java.lang.String

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.coreNetworkArn"></a>

```java
public java.lang.String getCoreNetworkArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModificationErrors`<sup>Required</sup> <a name="lastModificationErrors" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.lastModificationErrors"></a>

```java
public java.util.List<java.lang.String> getLastModificationErrors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkFunctionGroupName`<sup>Required</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.networkFunctionGroupName"></a>

```java
public java.lang.String getNetworkFunctionGroupName();
```

- *Type:* java.lang.String

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.ownerAccountId"></a>

```java
public java.lang.String getOwnerAccountId();
```

- *Type:* java.lang.String

---

##### `proposedNetworkFunctionGroupChange`<sup>Required</sup> <a name="proposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.proposedNetworkFunctionGroupChange"></a>

```java
public NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference getProposedNetworkFunctionGroupChange();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference</a>

---

##### `proposedSegmentChange`<sup>Required</sup> <a name="proposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.proposedSegmentChange"></a>

```java
public NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference getProposedSegmentChange();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference</a>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.segmentName"></a>

```java
public java.lang.String getSegmentName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.tags"></a>

```java
public NetworkmanagerDirectConnectGatewayAttachmentTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList">NetworkmanagerDirectConnectGatewayAttachmentTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `coreNetworkIdInput`<sup>Optional</sup> <a name="coreNetworkIdInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.coreNetworkIdInput"></a>

```java
public java.lang.String getCoreNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `directConnectGatewayArnInput`<sup>Optional</sup> <a name="directConnectGatewayArnInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.directConnectGatewayArnInput"></a>

```java
public java.lang.String getDirectConnectGatewayArnInput();
```

- *Type:* java.lang.String

---

##### `edgeLocationsInput`<sup>Optional</sup> <a name="edgeLocationsInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.edgeLocationsInput"></a>

```java
public java.util.List<java.lang.String> getEdgeLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `proposedNetworkFunctionGroupChangeInput`<sup>Optional</sup> <a name="proposedNetworkFunctionGroupChangeInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.proposedNetworkFunctionGroupChangeInput"></a>

```java
public IResolvable|NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange getProposedNetworkFunctionGroupChangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange</a>

---

##### `proposedSegmentChangeInput`<sup>Optional</sup> <a name="proposedSegmentChangeInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.proposedSegmentChangeInput"></a>

```java
public IResolvable|NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange getProposedSegmentChangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange</a>

---

##### `routingPolicyLabelInput`<sup>Optional</sup> <a name="routingPolicyLabelInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.routingPolicyLabelInput"></a>

```java
public java.lang.String getRoutingPolicyLabelInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.tagsInput"></a>

```java
public IResolvable|java.util.List<NetworkmanagerDirectConnectGatewayAttachmentTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a>>

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.coreNetworkId"></a>

```java
public java.lang.String getCoreNetworkId();
```

- *Type:* java.lang.String

---

##### `directConnectGatewayArn`<sup>Required</sup> <a name="directConnectGatewayArn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.directConnectGatewayArn"></a>

```java
public java.lang.String getDirectConnectGatewayArn();
```

- *Type:* java.lang.String

---

##### `edgeLocations`<sup>Required</sup> <a name="edgeLocations" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.edgeLocations"></a>

```java
public java.util.List<java.lang.String> getEdgeLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `routingPolicyLabel`<sup>Required</sup> <a name="routingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.routingPolicyLabel"></a>

```java
public java.lang.String getRoutingPolicyLabel();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerDirectConnectGatewayAttachmentConfig <a name="NetworkmanagerDirectConnectGatewayAttachmentConfig" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_direct_connect_gateway_attachment.NetworkmanagerDirectConnectGatewayAttachmentConfig;

NetworkmanagerDirectConnectGatewayAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .coreNetworkId(java.lang.String)
    .directConnectGatewayArn(java.lang.String)
    .edgeLocations(java.util.List<java.lang.String>)
//  .proposedNetworkFunctionGroupChange(NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange)
//  .proposedSegmentChange(NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange)
//  .routingPolicyLabel(java.lang.String)
//  .tags(IResolvable|java.util.List<NetworkmanagerDirectConnectGatewayAttachmentTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.coreNetworkId">coreNetworkId</a></code> | <code>java.lang.String</code> | The ID of a core network for the Direct Connect Gateway attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.directConnectGatewayArn">directConnectGatewayArn</a></code> | <code>java.lang.String</code> | The ARN of the Direct Connect Gateway. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.edgeLocations">edgeLocations</a></code> | <code>java.util.List<java.lang.String></code> | The Regions where the edges are located. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.proposedNetworkFunctionGroupChange">proposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange</a></code> | The attachment to move from one network function group to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.proposedSegmentChange">proposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange</a></code> | The attachment to move from one segment to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.routingPolicyLabel">routingPolicyLabel</a></code> | <code>java.lang.String</code> | Routing policy label. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a>></code> | Tags for the attachment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.coreNetworkId"></a>

```java
public java.lang.String getCoreNetworkId();
```

- *Type:* java.lang.String

The ID of a core network for the Direct Connect Gateway attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#core_network_id NetworkmanagerDirectConnectGatewayAttachment#core_network_id}

---

##### `directConnectGatewayArn`<sup>Required</sup> <a name="directConnectGatewayArn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.directConnectGatewayArn"></a>

```java
public java.lang.String getDirectConnectGatewayArn();
```

- *Type:* java.lang.String

The ARN of the Direct Connect Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#direct_connect_gateway_arn NetworkmanagerDirectConnectGatewayAttachment#direct_connect_gateway_arn}

---

##### `edgeLocations`<sup>Required</sup> <a name="edgeLocations" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.edgeLocations"></a>

```java
public java.util.List<java.lang.String> getEdgeLocations();
```

- *Type:* java.util.List<java.lang.String>

The Regions where the edges are located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#edge_locations NetworkmanagerDirectConnectGatewayAttachment#edge_locations}

---

##### `proposedNetworkFunctionGroupChange`<sup>Optional</sup> <a name="proposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.proposedNetworkFunctionGroupChange"></a>

```java
public NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange getProposedNetworkFunctionGroupChange();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange</a>

The attachment to move from one network function group to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#proposed_network_function_group_change NetworkmanagerDirectConnectGatewayAttachment#proposed_network_function_group_change}

---

##### `proposedSegmentChange`<sup>Optional</sup> <a name="proposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.proposedSegmentChange"></a>

```java
public NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange getProposedSegmentChange();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange</a>

The attachment to move from one segment to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#proposed_segment_change NetworkmanagerDirectConnectGatewayAttachment#proposed_segment_change}

---

##### `routingPolicyLabel`<sup>Optional</sup> <a name="routingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.routingPolicyLabel"></a>

```java
public java.lang.String getRoutingPolicyLabel();
```

- *Type:* java.lang.String

Routing policy label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#routing_policy_label NetworkmanagerDirectConnectGatewayAttachment#routing_policy_label}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentConfig.property.tags"></a>

```java
public IResolvable|java.util.List<NetworkmanagerDirectConnectGatewayAttachmentTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a>>

Tags for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#tags NetworkmanagerDirectConnectGatewayAttachment#tags}

---

### NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_direct_connect_gateway_attachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange;

NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange.builder()
//  .attachmentPolicyRuleNumber(java.lang.Number)
//  .networkFunctionGroupName(java.lang.String)
//  .tags(IResolvable|java.util.List<NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>java.lang.Number</code> | The rule number in the policy document that applies to this change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>java.lang.String</code> | The name of the network function group to change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags</a>></code> | The key-value tags that changed for the network function group. |

---

##### `attachmentPolicyRuleNumber`<sup>Optional</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange.property.attachmentPolicyRuleNumber"></a>

```java
public java.lang.Number getAttachmentPolicyRuleNumber();
```

- *Type:* java.lang.Number

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#attachment_policy_rule_number NetworkmanagerDirectConnectGatewayAttachment#attachment_policy_rule_number}

---

##### `networkFunctionGroupName`<sup>Optional</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange.property.networkFunctionGroupName"></a>

```java
public java.lang.String getNetworkFunctionGroupName();
```

- *Type:* java.lang.String

The name of the network function group to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#network_function_group_name NetworkmanagerDirectConnectGatewayAttachment#network_function_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange.property.tags"></a>

```java
public IResolvable|java.util.List<NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags</a>>

The key-value tags that changed for the network function group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#tags NetworkmanagerDirectConnectGatewayAttachment#tags}

---

### NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_direct_connect_gateway_attachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags;

NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#key NetworkmanagerDirectConnectGatewayAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#value NetworkmanagerDirectConnectGatewayAttachment#value}

---

### NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_direct_connect_gateway_attachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange;

NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange.builder()
//  .attachmentPolicyRuleNumber(java.lang.Number)
//  .segmentName(java.lang.String)
//  .tags(IResolvable|java.util.List<NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>java.lang.Number</code> | The rule number in the policy document that applies to this change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange.property.segmentName">segmentName</a></code> | <code>java.lang.String</code> | The name of the segment to change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags</a>></code> | The key-value tags that changed for the segment. |

---

##### `attachmentPolicyRuleNumber`<sup>Optional</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange.property.attachmentPolicyRuleNumber"></a>

```java
public java.lang.Number getAttachmentPolicyRuleNumber();
```

- *Type:* java.lang.Number

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#attachment_policy_rule_number NetworkmanagerDirectConnectGatewayAttachment#attachment_policy_rule_number}

---

##### `segmentName`<sup>Optional</sup> <a name="segmentName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange.property.segmentName"></a>

```java
public java.lang.String getSegmentName();
```

- *Type:* java.lang.String

The name of the segment to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#segment_name NetworkmanagerDirectConnectGatewayAttachment#segment_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange.property.tags"></a>

```java
public IResolvable|java.util.List<NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags</a>>

The key-value tags that changed for the segment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#tags NetworkmanagerDirectConnectGatewayAttachment#tags}

---

### NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_direct_connect_gateway_attachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags;

NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#key NetworkmanagerDirectConnectGatewayAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#value NetworkmanagerDirectConnectGatewayAttachment#value}

---

### NetworkmanagerDirectConnectGatewayAttachmentTags <a name="NetworkmanagerDirectConnectGatewayAttachmentTags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_direct_connect_gateway_attachment.NetworkmanagerDirectConnectGatewayAttachmentTags;

NetworkmanagerDirectConnectGatewayAttachmentTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#key NetworkmanagerDirectConnectGatewayAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_direct_connect_gateway_attachment#value NetworkmanagerDirectConnectGatewayAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_direct_connect_gateway_attachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference;

new NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetAttachmentPolicyRuleNumber">resetAttachmentPolicyRuleNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetNetworkFunctionGroupName">resetNetworkFunctionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags</a>>

---

##### `resetAttachmentPolicyRuleNumber` <a name="resetAttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetAttachmentPolicyRuleNumber"></a>

```java
public void resetAttachmentPolicyRuleNumber()
```

##### `resetNetworkFunctionGroupName` <a name="resetNetworkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetNetworkFunctionGroupName"></a>

```java
public void resetNetworkFunctionGroupName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumberInput">attachmentPolicyRuleNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupNameInput">networkFunctionGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags"></a>

```java
public NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList</a>

---

##### `attachmentPolicyRuleNumberInput`<sup>Optional</sup> <a name="attachmentPolicyRuleNumberInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumberInput"></a>

```java
public java.lang.Number getAttachmentPolicyRuleNumberInput();
```

- *Type:* java.lang.Number

---

##### `networkFunctionGroupNameInput`<sup>Optional</sup> <a name="networkFunctionGroupNameInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupNameInput"></a>

```java
public java.lang.String getNetworkFunctionGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags</a>>

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```java
public java.lang.Number getAttachmentPolicyRuleNumber();
```

- *Type:* java.lang.Number

---

##### `networkFunctionGroupName`<sup>Required</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName"></a>

```java
public java.lang.String getNetworkFunctionGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChange</a>

---


### NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_direct_connect_gateway_attachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList;

new NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.get"></a>

```java
public NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags</a>>

---


### NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_direct_connect_gateway_attachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference;

new NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedNetworkFunctionGroupChangeTags</a>

---


### NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_direct_connect_gateway_attachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference;

new NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.resetAttachmentPolicyRuleNumber">resetAttachmentPolicyRuleNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.resetSegmentName">resetSegmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags</a>>

---

##### `resetAttachmentPolicyRuleNumber` <a name="resetAttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.resetAttachmentPolicyRuleNumber"></a>

```java
public void resetAttachmentPolicyRuleNumber()
```

##### `resetSegmentName` <a name="resetSegmentName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.resetSegmentName"></a>

```java
public void resetSegmentName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumberInput">attachmentPolicyRuleNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.segmentNameInput">segmentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.segmentName">segmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.tags"></a>

```java
public NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList</a>

---

##### `attachmentPolicyRuleNumberInput`<sup>Optional</sup> <a name="attachmentPolicyRuleNumberInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumberInput"></a>

```java
public java.lang.Number getAttachmentPolicyRuleNumberInput();
```

- *Type:* java.lang.Number

---

##### `segmentNameInput`<sup>Optional</sup> <a name="segmentNameInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.segmentNameInput"></a>

```java
public java.lang.String getSegmentNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags</a>>

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```java
public java.lang.Number getAttachmentPolicyRuleNumber();
```

- *Type:* java.lang.Number

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.segmentName"></a>

```java
public java.lang.String getSegmentName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChange</a>

---


### NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_direct_connect_gateway_attachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList;

new NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.get"></a>

```java
public NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags</a>>

---


### NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference <a name="NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_direct_connect_gateway_attachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference;

new NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags">NetworkmanagerDirectConnectGatewayAttachmentProposedSegmentChangeTags</a>

---


### NetworkmanagerDirectConnectGatewayAttachmentTagsList <a name="NetworkmanagerDirectConnectGatewayAttachmentTagsList" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_direct_connect_gateway_attachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList;

new NetworkmanagerDirectConnectGatewayAttachmentTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.get"></a>

```java
public NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkmanagerDirectConnectGatewayAttachmentTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a>>

---


### NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference <a name="NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_direct_connect_gateway_attachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference;

new NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkmanagerDirectConnectGatewayAttachmentTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerDirectConnectGatewayAttachment.NetworkmanagerDirectConnectGatewayAttachmentTags">NetworkmanagerDirectConnectGatewayAttachmentTags</a>

---



