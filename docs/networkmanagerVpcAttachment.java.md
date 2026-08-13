# `networkmanagerVpcAttachment` Submodule <a name="`networkmanagerVpcAttachment` Submodule" id="@cdktn/provider-awscc.networkmanagerVpcAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerVpcAttachment <a name="NetworkmanagerVpcAttachment" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment awscc_networkmanager_vpc_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachment;

NetworkmanagerVpcAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .coreNetworkId(java.lang.String)
    .subnetArns(java.util.List<java.lang.String>)
    .vpcArn(java.lang.String)
//  .options(NetworkmanagerVpcAttachmentOptions)
//  .proposedNetworkFunctionGroupChange(NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange)
//  .proposedSegmentChange(NetworkmanagerVpcAttachmentProposedSegmentChange)
//  .routingPolicyLabel(java.lang.String)
//  .tags(IResolvable|java.util.List<NetworkmanagerVpcAttachmentTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.coreNetworkId">coreNetworkId</a></code> | <code>java.lang.String</code> | The ID of a core network for the VPC attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.subnetArns">subnetArns</a></code> | <code>java.util.List<java.lang.String></code> | Subnet Arn list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.vpcArn">vpcArn</a></code> | <code>java.lang.String</code> | The ARN of the VPC. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | Vpc options of the attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.proposedNetworkFunctionGroupChange">proposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a></code> | The attachment to move from one network function group to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.proposedSegmentChange">proposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a></code> | The attachment to move from one segment to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.routingPolicyLabel">routingPolicyLabel</a></code> | <code>java.lang.String</code> | Routing policy label. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>></code> | Tags for the attachment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.coreNetworkId"></a>

- *Type:* java.lang.String

The ID of a core network for the VPC attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#core_network_id NetworkmanagerVpcAttachment#core_network_id}

---

##### `subnetArns`<sup>Required</sup> <a name="subnetArns" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.subnetArns"></a>

- *Type:* java.util.List<java.lang.String>

Subnet Arn list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#subnet_arns NetworkmanagerVpcAttachment#subnet_arns}

---

##### `vpcArn`<sup>Required</sup> <a name="vpcArn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.vpcArn"></a>

- *Type:* java.lang.String

The ARN of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#vpc_arn NetworkmanagerVpcAttachment#vpc_arn}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

Vpc options of the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#options NetworkmanagerVpcAttachment#options}

---

##### `proposedNetworkFunctionGroupChange`<sup>Optional</sup> <a name="proposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.proposedNetworkFunctionGroupChange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a>

The attachment to move from one network function group to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#proposed_network_function_group_change NetworkmanagerVpcAttachment#proposed_network_function_group_change}

---

##### `proposedSegmentChange`<sup>Optional</sup> <a name="proposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.proposedSegmentChange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a>

The attachment to move from one segment to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#proposed_segment_change NetworkmanagerVpcAttachment#proposed_segment_change}

---

##### `routingPolicyLabel`<sup>Optional</sup> <a name="routingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.routingPolicyLabel"></a>

- *Type:* java.lang.String

Routing policy label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#routing_policy_label NetworkmanagerVpcAttachment#routing_policy_label}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>>

Tags for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedNetworkFunctionGroupChange">putProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedSegmentChange">putProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetProposedNetworkFunctionGroupChange">resetProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetProposedSegmentChange">resetProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetRoutingPolicyLabel">resetRoutingPolicyLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptions` <a name="putOptions" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions"></a>

```java
public void putOptions(NetworkmanagerVpcAttachmentOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

---

##### `putProposedNetworkFunctionGroupChange` <a name="putProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedNetworkFunctionGroupChange"></a>

```java
public void putProposedNetworkFunctionGroupChange(NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedNetworkFunctionGroupChange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a>

---

##### `putProposedSegmentChange` <a name="putProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedSegmentChange"></a>

```java
public void putProposedSegmentChange(NetworkmanagerVpcAttachmentProposedSegmentChange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedSegmentChange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<NetworkmanagerVpcAttachmentTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>>

---

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetProposedNetworkFunctionGroupChange` <a name="resetProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetProposedNetworkFunctionGroupChange"></a>

```java
public void resetProposedNetworkFunctionGroupChange()
```

##### `resetProposedSegmentChange` <a name="resetProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetProposedSegmentChange"></a>

```java
public void resetProposedSegmentChange()
```

##### `resetRoutingPolicyLabel` <a name="resetRoutingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetRoutingPolicyLabel"></a>

```java
public void resetRoutingPolicyLabel()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerVpcAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachment;

NetworkmanagerVpcAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachment;

NetworkmanagerVpcAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachment;

NetworkmanagerVpcAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachment;

NetworkmanagerVpcAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkmanagerVpcAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkmanagerVpcAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkmanagerVpcAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkmanagerVpcAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerVpcAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentId">attachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentType">attachmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkArn">coreNetworkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.edgeLocation">edgeLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.lastModificationErrors">lastModificationErrors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference">NetworkmanagerVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.ownerAccountId">ownerAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedNetworkFunctionGroupChange">proposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedSegmentChange">proposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference">NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.segmentName">segmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList">NetworkmanagerVpcAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkIdInput">coreNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.optionsInput">optionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedNetworkFunctionGroupChangeInput">proposedNetworkFunctionGroupChangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedSegmentChangeInput">proposedSegmentChangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.routingPolicyLabelInput">routingPolicyLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArnsInput">subnetArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArnInput">vpcArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkId">coreNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.routingPolicyLabel">routingPolicyLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArns">subnetArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArn">vpcArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentId"></a>

```java
public java.lang.String getAttachmentId();
```

- *Type:* java.lang.String

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentPolicyRuleNumber"></a>

```java
public java.lang.Number getAttachmentPolicyRuleNumber();
```

- *Type:* java.lang.Number

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentType"></a>

```java
public java.lang.String getAttachmentType();
```

- *Type:* java.lang.String

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkArn"></a>

```java
public java.lang.String getCoreNetworkArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `edgeLocation`<sup>Required</sup> <a name="edgeLocation" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.edgeLocation"></a>

```java
public java.lang.String getEdgeLocation();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModificationErrors`<sup>Required</sup> <a name="lastModificationErrors" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.lastModificationErrors"></a>

```java
public java.util.List<java.lang.String> getLastModificationErrors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkFunctionGroupName`<sup>Required</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.networkFunctionGroupName"></a>

```java
public java.lang.String getNetworkFunctionGroupName();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.options"></a>

```java
public NetworkmanagerVpcAttachmentOptionsOutputReference getOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference">NetworkmanagerVpcAttachmentOptionsOutputReference</a>

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.ownerAccountId"></a>

```java
public java.lang.String getOwnerAccountId();
```

- *Type:* java.lang.String

---

##### `proposedNetworkFunctionGroupChange`<sup>Required</sup> <a name="proposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedNetworkFunctionGroupChange"></a>

```java
public NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference getProposedNetworkFunctionGroupChange();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference</a>

---

##### `proposedSegmentChange`<sup>Required</sup> <a name="proposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedSegmentChange"></a>

```java
public NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference getProposedSegmentChange();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference">NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference</a>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.segmentName"></a>

```java
public java.lang.String getSegmentName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tags"></a>

```java
public NetworkmanagerVpcAttachmentTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList">NetworkmanagerVpcAttachmentTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `coreNetworkIdInput`<sup>Optional</sup> <a name="coreNetworkIdInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkIdInput"></a>

```java
public java.lang.String getCoreNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.optionsInput"></a>

```java
public IResolvable|NetworkmanagerVpcAttachmentOptions getOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

---

##### `proposedNetworkFunctionGroupChangeInput`<sup>Optional</sup> <a name="proposedNetworkFunctionGroupChangeInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedNetworkFunctionGroupChangeInput"></a>

```java
public IResolvable|NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange getProposedNetworkFunctionGroupChangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a>

---

##### `proposedSegmentChangeInput`<sup>Optional</sup> <a name="proposedSegmentChangeInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedSegmentChangeInput"></a>

```java
public IResolvable|NetworkmanagerVpcAttachmentProposedSegmentChange getProposedSegmentChangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a>

---

##### `routingPolicyLabelInput`<sup>Optional</sup> <a name="routingPolicyLabelInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.routingPolicyLabelInput"></a>

```java
public java.lang.String getRoutingPolicyLabelInput();
```

- *Type:* java.lang.String

---

##### `subnetArnsInput`<sup>Optional</sup> <a name="subnetArnsInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArnsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsInput"></a>

```java
public IResolvable|java.util.List<NetworkmanagerVpcAttachmentTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>>

---

##### `vpcArnInput`<sup>Optional</sup> <a name="vpcArnInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArnInput"></a>

```java
public java.lang.String getVpcArnInput();
```

- *Type:* java.lang.String

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkId"></a>

```java
public java.lang.String getCoreNetworkId();
```

- *Type:* java.lang.String

---

##### `routingPolicyLabel`<sup>Required</sup> <a name="routingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.routingPolicyLabel"></a>

```java
public java.lang.String getRoutingPolicyLabel();
```

- *Type:* java.lang.String

---

##### `subnetArns`<sup>Required</sup> <a name="subnetArns" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArns"></a>

```java
public java.util.List<java.lang.String> getSubnetArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcArn`<sup>Required</sup> <a name="vpcArn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArn"></a>

```java
public java.lang.String getVpcArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerVpcAttachmentConfig <a name="NetworkmanagerVpcAttachmentConfig" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachmentConfig;

NetworkmanagerVpcAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .coreNetworkId(java.lang.String)
    .subnetArns(java.util.List<java.lang.String>)
    .vpcArn(java.lang.String)
//  .options(NetworkmanagerVpcAttachmentOptions)
//  .proposedNetworkFunctionGroupChange(NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange)
//  .proposedSegmentChange(NetworkmanagerVpcAttachmentProposedSegmentChange)
//  .routingPolicyLabel(java.lang.String)
//  .tags(IResolvable|java.util.List<NetworkmanagerVpcAttachmentTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.coreNetworkId">coreNetworkId</a></code> | <code>java.lang.String</code> | The ID of a core network for the VPC attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.subnetArns">subnetArns</a></code> | <code>java.util.List<java.lang.String></code> | Subnet Arn list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.vpcArn">vpcArn</a></code> | <code>java.lang.String</code> | The ARN of the VPC. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | Vpc options of the attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.proposedNetworkFunctionGroupChange">proposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a></code> | The attachment to move from one network function group to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.proposedSegmentChange">proposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a></code> | The attachment to move from one segment to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.routingPolicyLabel">routingPolicyLabel</a></code> | <code>java.lang.String</code> | Routing policy label. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>></code> | Tags for the attachment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.coreNetworkId"></a>

```java
public java.lang.String getCoreNetworkId();
```

- *Type:* java.lang.String

The ID of a core network for the VPC attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#core_network_id NetworkmanagerVpcAttachment#core_network_id}

---

##### `subnetArns`<sup>Required</sup> <a name="subnetArns" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.subnetArns"></a>

```java
public java.util.List<java.lang.String> getSubnetArns();
```

- *Type:* java.util.List<java.lang.String>

Subnet Arn list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#subnet_arns NetworkmanagerVpcAttachment#subnet_arns}

---

##### `vpcArn`<sup>Required</sup> <a name="vpcArn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.vpcArn"></a>

```java
public java.lang.String getVpcArn();
```

- *Type:* java.lang.String

The ARN of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#vpc_arn NetworkmanagerVpcAttachment#vpc_arn}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.options"></a>

```java
public NetworkmanagerVpcAttachmentOptions getOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

Vpc options of the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#options NetworkmanagerVpcAttachment#options}

---

##### `proposedNetworkFunctionGroupChange`<sup>Optional</sup> <a name="proposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.proposedNetworkFunctionGroupChange"></a>

```java
public NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange getProposedNetworkFunctionGroupChange();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a>

The attachment to move from one network function group to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#proposed_network_function_group_change NetworkmanagerVpcAttachment#proposed_network_function_group_change}

---

##### `proposedSegmentChange`<sup>Optional</sup> <a name="proposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.proposedSegmentChange"></a>

```java
public NetworkmanagerVpcAttachmentProposedSegmentChange getProposedSegmentChange();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a>

The attachment to move from one segment to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#proposed_segment_change NetworkmanagerVpcAttachment#proposed_segment_change}

---

##### `routingPolicyLabel`<sup>Optional</sup> <a name="routingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.routingPolicyLabel"></a>

```java
public java.lang.String getRoutingPolicyLabel();
```

- *Type:* java.lang.String

Routing policy label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#routing_policy_label NetworkmanagerVpcAttachment#routing_policy_label}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.tags"></a>

```java
public IResolvable|java.util.List<NetworkmanagerVpcAttachmentTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>>

Tags for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}

---

### NetworkmanagerVpcAttachmentOptions <a name="NetworkmanagerVpcAttachmentOptions" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachmentOptions;

NetworkmanagerVpcAttachmentOptions.builder()
//  .applianceModeSupport(java.lang.Boolean|IResolvable)
//  .dnsSupport(java.lang.Boolean|IResolvable)
//  .ipv6Support(java.lang.Boolean|IResolvable)
//  .securityGroupReferencingSupport(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.applianceModeSupport">applianceModeSupport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to enable ApplianceModeSupport Support for Vpc Attachment. Valid Values: true \| false. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.dnsSupport">dnsSupport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to enable private DNS Support for Vpc Attachment. Valid Values: true \| false. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.ipv6Support">ipv6Support</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable \| disable. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.securityGroupReferencingSupport">securityGroupReferencingSupport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to enable Security Group Referencing Support for Vpc Attachment. Valid Values: true \| false. |

---

##### `applianceModeSupport`<sup>Optional</sup> <a name="applianceModeSupport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.applianceModeSupport"></a>

```java
public java.lang.Boolean|IResolvable getApplianceModeSupport();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to enable ApplianceModeSupport Support for Vpc Attachment. Valid Values: true | false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#appliance_mode_support NetworkmanagerVpcAttachment#appliance_mode_support}

---

##### `dnsSupport`<sup>Optional</sup> <a name="dnsSupport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.dnsSupport"></a>

```java
public java.lang.Boolean|IResolvable getDnsSupport();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to enable private DNS Support for Vpc Attachment. Valid Values: true | false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#dns_support NetworkmanagerVpcAttachment#dns_support}

---

##### `ipv6Support`<sup>Optional</sup> <a name="ipv6Support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.ipv6Support"></a>

```java
public java.lang.Boolean|IResolvable getIpv6Support();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#ipv_6_support NetworkmanagerVpcAttachment#ipv_6_support}

---

##### `securityGroupReferencingSupport`<sup>Optional</sup> <a name="securityGroupReferencingSupport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.securityGroupReferencingSupport"></a>

```java
public java.lang.Boolean|IResolvable getSecurityGroupReferencingSupport();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to enable Security Group Referencing Support for Vpc Attachment. Valid Values: true | false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#security_group_referencing_support NetworkmanagerVpcAttachment#security_group_referencing_support}

---

### NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange <a name="NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange;

NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.builder()
//  .attachmentPolicyRuleNumber(java.lang.Number)
//  .networkFunctionGroupName(java.lang.String)
//  .tags(IResolvable|java.util.List<NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>java.lang.Number</code> | The rule number in the policy document that applies to this change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>java.lang.String</code> | The name of the network function group to change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>></code> | The key-value tags that changed for the network function group. |

---

##### `attachmentPolicyRuleNumber`<sup>Optional</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.property.attachmentPolicyRuleNumber"></a>

```java
public java.lang.Number getAttachmentPolicyRuleNumber();
```

- *Type:* java.lang.Number

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#attachment_policy_rule_number NetworkmanagerVpcAttachment#attachment_policy_rule_number}

---

##### `networkFunctionGroupName`<sup>Optional</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.property.networkFunctionGroupName"></a>

```java
public java.lang.String getNetworkFunctionGroupName();
```

- *Type:* java.lang.String

The name of the network function group to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#network_function_group_name NetworkmanagerVpcAttachment#network_function_group_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.property.tags"></a>

```java
public IResolvable|java.util.List<NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>>

The key-value tags that changed for the network function group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}

---

### NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags <a name="NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags;

NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#key NetworkmanagerVpcAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#value NetworkmanagerVpcAttachment#value}

---

### NetworkmanagerVpcAttachmentProposedSegmentChange <a name="NetworkmanagerVpcAttachmentProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachmentProposedSegmentChange;

NetworkmanagerVpcAttachmentProposedSegmentChange.builder()
//  .attachmentPolicyRuleNumber(java.lang.Number)
//  .segmentName(java.lang.String)
//  .tags(IResolvable|java.util.List<NetworkmanagerVpcAttachmentProposedSegmentChangeTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>java.lang.Number</code> | The rule number in the policy document that applies to this change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.property.segmentName">segmentName</a></code> | <code>java.lang.String</code> | The name of the segment to change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>></code> | The key-value tags that changed for the segment. |

---

##### `attachmentPolicyRuleNumber`<sup>Optional</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.property.attachmentPolicyRuleNumber"></a>

```java
public java.lang.Number getAttachmentPolicyRuleNumber();
```

- *Type:* java.lang.Number

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#attachment_policy_rule_number NetworkmanagerVpcAttachment#attachment_policy_rule_number}

---

##### `segmentName`<sup>Optional</sup> <a name="segmentName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.property.segmentName"></a>

```java
public java.lang.String getSegmentName();
```

- *Type:* java.lang.String

The name of the segment to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#segment_name NetworkmanagerVpcAttachment#segment_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.property.tags"></a>

```java
public IResolvable|java.util.List<NetworkmanagerVpcAttachmentProposedSegmentChangeTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>>

The key-value tags that changed for the segment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}

---

### NetworkmanagerVpcAttachmentProposedSegmentChangeTags <a name="NetworkmanagerVpcAttachmentProposedSegmentChangeTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags;

NetworkmanagerVpcAttachmentProposedSegmentChangeTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#key NetworkmanagerVpcAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#value NetworkmanagerVpcAttachment#value}

---

### NetworkmanagerVpcAttachmentTags <a name="NetworkmanagerVpcAttachmentTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachmentTags;

NetworkmanagerVpcAttachmentTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#key NetworkmanagerVpcAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_vpc_attachment#value NetworkmanagerVpcAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerVpcAttachmentOptionsOutputReference <a name="NetworkmanagerVpcAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachmentOptionsOutputReference;

new NetworkmanagerVpcAttachmentOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetApplianceModeSupport">resetApplianceModeSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetDnsSupport">resetDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetIpv6Support">resetIpv6Support</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetSecurityGroupReferencingSupport">resetSecurityGroupReferencingSupport</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplianceModeSupport` <a name="resetApplianceModeSupport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetApplianceModeSupport"></a>

```java
public void resetApplianceModeSupport()
```

##### `resetDnsSupport` <a name="resetDnsSupport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetDnsSupport"></a>

```java
public void resetDnsSupport()
```

##### `resetIpv6Support` <a name="resetIpv6Support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetIpv6Support"></a>

```java
public void resetIpv6Support()
```

##### `resetSecurityGroupReferencingSupport` <a name="resetSecurityGroupReferencingSupport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetSecurityGroupReferencingSupport"></a>

```java
public void resetSecurityGroupReferencingSupport()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupportInput">applianceModeSupportInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.dnsSupportInput">dnsSupportInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6SupportInput">ipv6SupportInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupportInput">securityGroupReferencingSupportInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupport">applianceModeSupport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.dnsSupport">dnsSupport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6Support">ipv6Support</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupport">securityGroupReferencingSupport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applianceModeSupportInput`<sup>Optional</sup> <a name="applianceModeSupportInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupportInput"></a>

```java
public java.lang.Boolean|IResolvable getApplianceModeSupportInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dnsSupportInput`<sup>Optional</sup> <a name="dnsSupportInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.dnsSupportInput"></a>

```java
public java.lang.Boolean|IResolvable getDnsSupportInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ipv6SupportInput`<sup>Optional</sup> <a name="ipv6SupportInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6SupportInput"></a>

```java
public java.lang.Boolean|IResolvable getIpv6SupportInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `securityGroupReferencingSupportInput`<sup>Optional</sup> <a name="securityGroupReferencingSupportInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupportInput"></a>

```java
public java.lang.Boolean|IResolvable getSecurityGroupReferencingSupportInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `applianceModeSupport`<sup>Required</sup> <a name="applianceModeSupport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupport"></a>

```java
public java.lang.Boolean|IResolvable getApplianceModeSupport();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dnsSupport`<sup>Required</sup> <a name="dnsSupport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.dnsSupport"></a>

```java
public java.lang.Boolean|IResolvable getDnsSupport();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ipv6Support`<sup>Required</sup> <a name="ipv6Support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6Support"></a>

```java
public java.lang.Boolean|IResolvable getIpv6Support();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `securityGroupReferencingSupport`<sup>Required</sup> <a name="securityGroupReferencingSupport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupport"></a>

```java
public java.lang.Boolean|IResolvable getSecurityGroupReferencingSupport();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkmanagerVpcAttachmentOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

---


### NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference <a name="NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference;

new NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetAttachmentPolicyRuleNumber">resetAttachmentPolicyRuleNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetNetworkFunctionGroupName">resetNetworkFunctionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>>

---

##### `resetAttachmentPolicyRuleNumber` <a name="resetAttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetAttachmentPolicyRuleNumber"></a>

```java
public void resetAttachmentPolicyRuleNumber()
```

##### `resetNetworkFunctionGroupName` <a name="resetNetworkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetNetworkFunctionGroupName"></a>

```java
public void resetNetworkFunctionGroupName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumberInput">attachmentPolicyRuleNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupNameInput">networkFunctionGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName">networkFunctionGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags"></a>

```java
public NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList</a>

---

##### `attachmentPolicyRuleNumberInput`<sup>Optional</sup> <a name="attachmentPolicyRuleNumberInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumberInput"></a>

```java
public java.lang.Number getAttachmentPolicyRuleNumberInput();
```

- *Type:* java.lang.Number

---

##### `networkFunctionGroupNameInput`<sup>Optional</sup> <a name="networkFunctionGroupNameInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupNameInput"></a>

```java
public java.lang.String getNetworkFunctionGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>>

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```java
public java.lang.Number getAttachmentPolicyRuleNumber();
```

- *Type:* java.lang.Number

---

##### `networkFunctionGroupName`<sup>Required</sup> <a name="networkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName"></a>

```java
public java.lang.String getNetworkFunctionGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a>

---


### NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList <a name="NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList;

new NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.get"></a>

```java
public NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>>

---


### NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference <a name="NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference;

new NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>

---


### NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference <a name="NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference;

new NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resetAttachmentPolicyRuleNumber">resetAttachmentPolicyRuleNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resetSegmentName">resetSegmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<NetworkmanagerVpcAttachmentProposedSegmentChangeTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>>

---

##### `resetAttachmentPolicyRuleNumber` <a name="resetAttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resetAttachmentPolicyRuleNumber"></a>

```java
public void resetAttachmentPolicyRuleNumber()
```

##### `resetSegmentName` <a name="resetSegmentName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resetSegmentName"></a>

```java
public void resetSegmentName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList">NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumberInput">attachmentPolicyRuleNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.segmentNameInput">segmentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.segmentName">segmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.tags"></a>

```java
public NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList">NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList</a>

---

##### `attachmentPolicyRuleNumberInput`<sup>Optional</sup> <a name="attachmentPolicyRuleNumberInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumberInput"></a>

```java
public java.lang.Number getAttachmentPolicyRuleNumberInput();
```

- *Type:* java.lang.Number

---

##### `segmentNameInput`<sup>Optional</sup> <a name="segmentNameInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.segmentNameInput"></a>

```java
public java.lang.String getSegmentNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<NetworkmanagerVpcAttachmentProposedSegmentChangeTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>>

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```java
public java.lang.Number getAttachmentPolicyRuleNumber();
```

- *Type:* java.lang.Number

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.segmentName"></a>

```java
public java.lang.String getSegmentName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkmanagerVpcAttachmentProposedSegmentChange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a>

---


### NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList <a name="NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList;

new NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.get"></a>

```java
public NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkmanagerVpcAttachmentProposedSegmentChangeTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>>

---


### NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference <a name="NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference;

new NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkmanagerVpcAttachmentProposedSegmentChangeTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>

---


### NetworkmanagerVpcAttachmentTagsList <a name="NetworkmanagerVpcAttachmentTagsList" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachmentTagsList;

new NetworkmanagerVpcAttachmentTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.get"></a>

```java
public NetworkmanagerVpcAttachmentTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworkmanagerVpcAttachmentTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>>

---


### NetworkmanagerVpcAttachmentTagsOutputReference <a name="NetworkmanagerVpcAttachmentTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.networkmanager_vpc_attachment.NetworkmanagerVpcAttachmentTagsOutputReference;

new NetworkmanagerVpcAttachmentTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworkmanagerVpcAttachmentTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>

---



