# `ec2VpcPeeringConnection` Submodule <a name="`ec2VpcPeeringConnection` Submodule" id="@cdktn/provider-awscc.ec2VpcPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcPeeringConnection <a name="Ec2VpcPeeringConnection" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection awscc_ec2_vpc_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_peering_connection.Ec2VpcPeeringConnection;

Ec2VpcPeeringConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .peerVpcId(java.lang.String)
    .vpcId(java.lang.String)
//  .assumeRoleRegion(java.lang.String)
//  .peerOwnerId(java.lang.String)
//  .peerRegion(java.lang.String)
//  .peerRoleArn(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2VpcPeeringConnectionTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.peerVpcId">peerVpcId</a></code> | <code>java.lang.String</code> | The ID of the VPC with which you are creating the VPC peering connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.assumeRoleRegion">assumeRoleRegion</a></code> | <code>java.lang.String</code> | The Region code to use when calling Security Token Service (STS) to assume the PeerRoleArn, if provided. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.peerOwnerId">peerOwnerId</a></code> | <code>java.lang.String</code> | The AWS account ID of the owner of the accepter VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.peerRegion">peerRegion</a></code> | <code>java.lang.String</code> | The Region code for the accepter VPC, if the accepter VPC is located in a Region other than the Region in which you make the request. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.peerRoleArn">peerRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the VPC peer role for the peering connection in another AWS account. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#tags Ec2VpcPeeringConnection#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `peerVpcId`<sup>Required</sup> <a name="peerVpcId" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.peerVpcId"></a>

- *Type:* java.lang.String

The ID of the VPC with which you are creating the VPC peering connection.

You must specify this parameter in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#peer_vpc_id Ec2VpcPeeringConnection#peer_vpc_id}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#vpc_id Ec2VpcPeeringConnection#vpc_id}

---

##### `assumeRoleRegion`<sup>Optional</sup> <a name="assumeRoleRegion" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.assumeRoleRegion"></a>

- *Type:* java.lang.String

The Region code to use when calling Security Token Service (STS) to assume the PeerRoleArn, if provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#assume_role_region Ec2VpcPeeringConnection#assume_role_region}

---

##### `peerOwnerId`<sup>Optional</sup> <a name="peerOwnerId" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.peerOwnerId"></a>

- *Type:* java.lang.String

The AWS account ID of the owner of the accepter VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#peer_owner_id Ec2VpcPeeringConnection#peer_owner_id}

---

##### `peerRegion`<sup>Optional</sup> <a name="peerRegion" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.peerRegion"></a>

- *Type:* java.lang.String

The Region code for the accepter VPC, if the accepter VPC is located in a Region other than the Region in which you make the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#peer_region Ec2VpcPeeringConnection#peer_region}

---

##### `peerRoleArn`<sup>Optional</sup> <a name="peerRoleArn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.peerRoleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the VPC peer role for the peering connection in another AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#peer_role_arn Ec2VpcPeeringConnection#peer_role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#tags Ec2VpcPeeringConnection#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetAssumeRoleRegion">resetAssumeRoleRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetPeerOwnerId">resetPeerOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetPeerRegion">resetPeerRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetPeerRoleArn">resetPeerRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2VpcPeeringConnectionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>>

---

##### `resetAssumeRoleRegion` <a name="resetAssumeRoleRegion" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetAssumeRoleRegion"></a>

```java
public void resetAssumeRoleRegion()
```

##### `resetPeerOwnerId` <a name="resetPeerOwnerId" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetPeerOwnerId"></a>

```java
public void resetPeerOwnerId()
```

##### `resetPeerRegion` <a name="resetPeerRegion" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetPeerRegion"></a>

```java
public void resetPeerRegion()
```

##### `resetPeerRoleArn` <a name="resetPeerRoleArn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetPeerRoleArn"></a>

```java
public void resetPeerRoleArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpcPeeringConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_peering_connection.Ec2VpcPeeringConnection;

Ec2VpcPeeringConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_peering_connection.Ec2VpcPeeringConnection;

Ec2VpcPeeringConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_peering_connection.Ec2VpcPeeringConnection;

Ec2VpcPeeringConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_peering_connection.Ec2VpcPeeringConnection;

Ec2VpcPeeringConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2VpcPeeringConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2VpcPeeringConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2VpcPeeringConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2VpcPeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcPeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList">Ec2VpcPeeringConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.assumeRoleRegionInput">assumeRoleRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerOwnerIdInput">peerOwnerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerRegionInput">peerRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerRoleArnInput">peerRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerVpcIdInput">peerVpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.assumeRoleRegion">assumeRoleRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerOwnerId">peerOwnerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerRegion">peerRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerRoleArn">peerRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerVpcId">peerVpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.tags"></a>

```java
public Ec2VpcPeeringConnectionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList">Ec2VpcPeeringConnectionTagsList</a>

---

##### `vpcPeeringConnectionId`<sup>Required</sup> <a name="vpcPeeringConnectionId" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.vpcPeeringConnectionId"></a>

```java
public java.lang.String getVpcPeeringConnectionId();
```

- *Type:* java.lang.String

---

##### `assumeRoleRegionInput`<sup>Optional</sup> <a name="assumeRoleRegionInput" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.assumeRoleRegionInput"></a>

```java
public java.lang.String getAssumeRoleRegionInput();
```

- *Type:* java.lang.String

---

##### `peerOwnerIdInput`<sup>Optional</sup> <a name="peerOwnerIdInput" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerOwnerIdInput"></a>

```java
public java.lang.String getPeerOwnerIdInput();
```

- *Type:* java.lang.String

---

##### `peerRegionInput`<sup>Optional</sup> <a name="peerRegionInput" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerRegionInput"></a>

```java
public java.lang.String getPeerRegionInput();
```

- *Type:* java.lang.String

---

##### `peerRoleArnInput`<sup>Optional</sup> <a name="peerRoleArnInput" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerRoleArnInput"></a>

```java
public java.lang.String getPeerRoleArnInput();
```

- *Type:* java.lang.String

---

##### `peerVpcIdInput`<sup>Optional</sup> <a name="peerVpcIdInput" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerVpcIdInput"></a>

```java
public java.lang.String getPeerVpcIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2VpcPeeringConnectionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `assumeRoleRegion`<sup>Required</sup> <a name="assumeRoleRegion" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.assumeRoleRegion"></a>

```java
public java.lang.String getAssumeRoleRegion();
```

- *Type:* java.lang.String

---

##### `peerOwnerId`<sup>Required</sup> <a name="peerOwnerId" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerOwnerId"></a>

```java
public java.lang.String getPeerOwnerId();
```

- *Type:* java.lang.String

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerRegion"></a>

```java
public java.lang.String getPeerRegion();
```

- *Type:* java.lang.String

---

##### `peerRoleArn`<sup>Required</sup> <a name="peerRoleArn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerRoleArn"></a>

```java
public java.lang.String getPeerRoleArn();
```

- *Type:* java.lang.String

---

##### `peerVpcId`<sup>Required</sup> <a name="peerVpcId" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.peerVpcId"></a>

```java
public java.lang.String getPeerVpcId();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcPeeringConnectionConfig <a name="Ec2VpcPeeringConnectionConfig" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_peering_connection.Ec2VpcPeeringConnectionConfig;

Ec2VpcPeeringConnectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .peerVpcId(java.lang.String)
    .vpcId(java.lang.String)
//  .assumeRoleRegion(java.lang.String)
//  .peerOwnerId(java.lang.String)
//  .peerRegion(java.lang.String)
//  .peerRoleArn(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2VpcPeeringConnectionTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.peerVpcId">peerVpcId</a></code> | <code>java.lang.String</code> | The ID of the VPC with which you are creating the VPC peering connection. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.assumeRoleRegion">assumeRoleRegion</a></code> | <code>java.lang.String</code> | The Region code to use when calling Security Token Service (STS) to assume the PeerRoleArn, if provided. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.peerOwnerId">peerOwnerId</a></code> | <code>java.lang.String</code> | The AWS account ID of the owner of the accepter VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.peerRegion">peerRegion</a></code> | <code>java.lang.String</code> | The Region code for the accepter VPC, if the accepter VPC is located in a Region other than the Region in which you make the request. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.peerRoleArn">peerRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the VPC peer role for the peering connection in another AWS account. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#tags Ec2VpcPeeringConnection#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `peerVpcId`<sup>Required</sup> <a name="peerVpcId" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.peerVpcId"></a>

```java
public java.lang.String getPeerVpcId();
```

- *Type:* java.lang.String

The ID of the VPC with which you are creating the VPC peering connection.

You must specify this parameter in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#peer_vpc_id Ec2VpcPeeringConnection#peer_vpc_id}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#vpc_id Ec2VpcPeeringConnection#vpc_id}

---

##### `assumeRoleRegion`<sup>Optional</sup> <a name="assumeRoleRegion" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.assumeRoleRegion"></a>

```java
public java.lang.String getAssumeRoleRegion();
```

- *Type:* java.lang.String

The Region code to use when calling Security Token Service (STS) to assume the PeerRoleArn, if provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#assume_role_region Ec2VpcPeeringConnection#assume_role_region}

---

##### `peerOwnerId`<sup>Optional</sup> <a name="peerOwnerId" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.peerOwnerId"></a>

```java
public java.lang.String getPeerOwnerId();
```

- *Type:* java.lang.String

The AWS account ID of the owner of the accepter VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#peer_owner_id Ec2VpcPeeringConnection#peer_owner_id}

---

##### `peerRegion`<sup>Optional</sup> <a name="peerRegion" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.peerRegion"></a>

```java
public java.lang.String getPeerRegion();
```

- *Type:* java.lang.String

The Region code for the accepter VPC, if the accepter VPC is located in a Region other than the Region in which you make the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#peer_region Ec2VpcPeeringConnection#peer_region}

---

##### `peerRoleArn`<sup>Optional</sup> <a name="peerRoleArn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.peerRoleArn"></a>

```java
public java.lang.String getPeerRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the VPC peer role for the peering connection in another AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#peer_role_arn Ec2VpcPeeringConnection#peer_role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2VpcPeeringConnectionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#tags Ec2VpcPeeringConnection#tags}.

---

### Ec2VpcPeeringConnectionTags <a name="Ec2VpcPeeringConnectionTags" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_peering_connection.Ec2VpcPeeringConnectionTags;

Ec2VpcPeeringConnectionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#key Ec2VpcPeeringConnection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_peering_connection#value Ec2VpcPeeringConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VpcPeeringConnectionTagsList <a name="Ec2VpcPeeringConnectionTagsList" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_peering_connection.Ec2VpcPeeringConnectionTagsList;

new Ec2VpcPeeringConnectionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.get"></a>

```java
public Ec2VpcPeeringConnectionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2VpcPeeringConnectionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>>

---


### Ec2VpcPeeringConnectionTagsOutputReference <a name="Ec2VpcPeeringConnectionTagsOutputReference" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_peering_connection.Ec2VpcPeeringConnectionTagsOutputReference;

new Ec2VpcPeeringConnectionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2VpcPeeringConnectionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcPeeringConnection.Ec2VpcPeeringConnectionTags">Ec2VpcPeeringConnectionTags</a>

---



