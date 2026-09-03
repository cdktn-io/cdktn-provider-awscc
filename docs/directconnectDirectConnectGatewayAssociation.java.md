# `directconnectDirectConnectGatewayAssociation` Submodule <a name="`directconnectDirectConnectGatewayAssociation` Submodule" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectDirectConnectGatewayAssociation <a name="DirectconnectDirectConnectGatewayAssociation" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_direct_connect_gateway_association awscc_directconnect_direct_connect_gateway_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_direct_connect_gateway_association.DirectconnectDirectConnectGatewayAssociation;

DirectconnectDirectConnectGatewayAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .associatedGatewayId(java.lang.String)
    .directConnectGatewayId(java.lang.String)
//  .acceptDirectConnectGatewayAssociationProposalRoleArn(java.lang.String)
//  .allowedPrefixesToDirectConnectGateway(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.associatedGatewayId">associatedGatewayId</a></code> | <code>java.lang.String</code> | The ID or ARN of the virtual private gateway or transit gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.directConnectGatewayId">directConnectGatewayId</a></code> | <code>java.lang.String</code> | The ID or ARN of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.acceptDirectConnectGatewayAssociationProposalRoleArn">acceptDirectConnectGatewayAssociationProposalRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the role to accept the Direct Connect Gateway association proposal. Needs directconnect:AcceptDirectConnectGatewayAssociationProposal permissions. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.allowedPrefixesToDirectConnectGateway">allowedPrefixesToDirectConnectGateway</a></code> | <code>java.util.List<java.lang.String></code> | The Amazon VPC prefixes to advertise to the Direct Connect gateway. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `associatedGatewayId`<sup>Required</sup> <a name="associatedGatewayId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.associatedGatewayId"></a>

- *Type:* java.lang.String

The ID or ARN of the virtual private gateway or transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_direct_connect_gateway_association#associated_gateway_id DirectconnectDirectConnectGatewayAssociation#associated_gateway_id}

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="directConnectGatewayId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.directConnectGatewayId"></a>

- *Type:* java.lang.String

The ID or ARN of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_direct_connect_gateway_association#direct_connect_gateway_id DirectconnectDirectConnectGatewayAssociation#direct_connect_gateway_id}

---

##### `acceptDirectConnectGatewayAssociationProposalRoleArn`<sup>Optional</sup> <a name="acceptDirectConnectGatewayAssociationProposalRoleArn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.acceptDirectConnectGatewayAssociationProposalRoleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the role to accept the Direct Connect Gateway association proposal. Needs directconnect:AcceptDirectConnectGatewayAssociationProposal permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_direct_connect_gateway_association#accept_direct_connect_gateway_association_proposal_role_arn DirectconnectDirectConnectGatewayAssociation#accept_direct_connect_gateway_association_proposal_role_arn}

---

##### `allowedPrefixesToDirectConnectGateway`<sup>Optional</sup> <a name="allowedPrefixesToDirectConnectGateway" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.allowedPrefixesToDirectConnectGateway"></a>

- *Type:* java.util.List<java.lang.String>

The Amazon VPC prefixes to advertise to the Direct Connect gateway.

This parameter is required when you create an association to a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_direct_connect_gateway_association#allowed_prefixes_to_direct_connect_gateway DirectconnectDirectConnectGatewayAssociation#allowed_prefixes_to_direct_connect_gateway}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetAcceptDirectConnectGatewayAssociationProposalRoleArn">resetAcceptDirectConnectGatewayAssociationProposalRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetAllowedPrefixesToDirectConnectGateway">resetAllowedPrefixesToDirectConnectGateway</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAcceptDirectConnectGatewayAssociationProposalRoleArn` <a name="resetAcceptDirectConnectGatewayAssociationProposalRoleArn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetAcceptDirectConnectGatewayAssociationProposalRoleArn"></a>

```java
public void resetAcceptDirectConnectGatewayAssociationProposalRoleArn()
```

##### `resetAllowedPrefixesToDirectConnectGateway` <a name="resetAllowedPrefixesToDirectConnectGateway" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetAllowedPrefixesToDirectConnectGateway"></a>

```java
public void resetAllowedPrefixesToDirectConnectGateway()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectDirectConnectGatewayAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.directconnect_direct_connect_gateway_association.DirectconnectDirectConnectGatewayAssociation;

DirectconnectDirectConnectGatewayAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.directconnect_direct_connect_gateway_association.DirectconnectDirectConnectGatewayAssociation;

DirectconnectDirectConnectGatewayAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.directconnect_direct_connect_gateway_association.DirectconnectDirectConnectGatewayAssociation;

DirectconnectDirectConnectGatewayAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.directconnect_direct_connect_gateway_association.DirectconnectDirectConnectGatewayAssociation;

DirectconnectDirectConnectGatewayAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DirectconnectDirectConnectGatewayAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DirectconnectDirectConnectGatewayAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DirectconnectDirectConnectGatewayAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DirectconnectDirectConnectGatewayAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_direct_connect_gateway_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectDirectConnectGatewayAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associationId">associationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.acceptDirectConnectGatewayAssociationProposalRoleArnInput">acceptDirectConnectGatewayAssociationProposalRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGatewayInput">allowedPrefixesToDirectConnectGatewayInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associatedGatewayIdInput">associatedGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.directConnectGatewayIdInput">directConnectGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.acceptDirectConnectGatewayAssociationProposalRoleArn">acceptDirectConnectGatewayAssociationProposalRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGateway">allowedPrefixesToDirectConnectGateway</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associatedGatewayId">associatedGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.directConnectGatewayId">directConnectGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associationId"></a>

```java
public java.lang.String getAssociationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `acceptDirectConnectGatewayAssociationProposalRoleArnInput`<sup>Optional</sup> <a name="acceptDirectConnectGatewayAssociationProposalRoleArnInput" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.acceptDirectConnectGatewayAssociationProposalRoleArnInput"></a>

```java
public java.lang.String getAcceptDirectConnectGatewayAssociationProposalRoleArnInput();
```

- *Type:* java.lang.String

---

##### `allowedPrefixesToDirectConnectGatewayInput`<sup>Optional</sup> <a name="allowedPrefixesToDirectConnectGatewayInput" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGatewayInput"></a>

```java
public java.util.List<java.lang.String> getAllowedPrefixesToDirectConnectGatewayInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `associatedGatewayIdInput`<sup>Optional</sup> <a name="associatedGatewayIdInput" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associatedGatewayIdInput"></a>

```java
public java.lang.String getAssociatedGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `directConnectGatewayIdInput`<sup>Optional</sup> <a name="directConnectGatewayIdInput" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.directConnectGatewayIdInput"></a>

```java
public java.lang.String getDirectConnectGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `acceptDirectConnectGatewayAssociationProposalRoleArn`<sup>Required</sup> <a name="acceptDirectConnectGatewayAssociationProposalRoleArn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.acceptDirectConnectGatewayAssociationProposalRoleArn"></a>

```java
public java.lang.String getAcceptDirectConnectGatewayAssociationProposalRoleArn();
```

- *Type:* java.lang.String

---

##### `allowedPrefixesToDirectConnectGateway`<sup>Required</sup> <a name="allowedPrefixesToDirectConnectGateway" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGateway"></a>

```java
public java.util.List<java.lang.String> getAllowedPrefixesToDirectConnectGateway();
```

- *Type:* java.util.List<java.lang.String>

---

##### `associatedGatewayId`<sup>Required</sup> <a name="associatedGatewayId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associatedGatewayId"></a>

```java
public java.lang.String getAssociatedGatewayId();
```

- *Type:* java.lang.String

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="directConnectGatewayId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.directConnectGatewayId"></a>

```java
public java.lang.String getDirectConnectGatewayId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectDirectConnectGatewayAssociationConfig <a name="DirectconnectDirectConnectGatewayAssociationConfig" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.directconnect_direct_connect_gateway_association.DirectconnectDirectConnectGatewayAssociationConfig;

DirectconnectDirectConnectGatewayAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .associatedGatewayId(java.lang.String)
    .directConnectGatewayId(java.lang.String)
//  .acceptDirectConnectGatewayAssociationProposalRoleArn(java.lang.String)
//  .allowedPrefixesToDirectConnectGateway(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.associatedGatewayId">associatedGatewayId</a></code> | <code>java.lang.String</code> | The ID or ARN of the virtual private gateway or transit gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.directConnectGatewayId">directConnectGatewayId</a></code> | <code>java.lang.String</code> | The ID or ARN of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.acceptDirectConnectGatewayAssociationProposalRoleArn">acceptDirectConnectGatewayAssociationProposalRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the role to accept the Direct Connect Gateway association proposal. Needs directconnect:AcceptDirectConnectGatewayAssociationProposal permissions. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.allowedPrefixesToDirectConnectGateway">allowedPrefixesToDirectConnectGateway</a></code> | <code>java.util.List<java.lang.String></code> | The Amazon VPC prefixes to advertise to the Direct Connect gateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `associatedGatewayId`<sup>Required</sup> <a name="associatedGatewayId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.associatedGatewayId"></a>

```java
public java.lang.String getAssociatedGatewayId();
```

- *Type:* java.lang.String

The ID or ARN of the virtual private gateway or transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_direct_connect_gateway_association#associated_gateway_id DirectconnectDirectConnectGatewayAssociation#associated_gateway_id}

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="directConnectGatewayId" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.directConnectGatewayId"></a>

```java
public java.lang.String getDirectConnectGatewayId();
```

- *Type:* java.lang.String

The ID or ARN of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_direct_connect_gateway_association#direct_connect_gateway_id DirectconnectDirectConnectGatewayAssociation#direct_connect_gateway_id}

---

##### `acceptDirectConnectGatewayAssociationProposalRoleArn`<sup>Optional</sup> <a name="acceptDirectConnectGatewayAssociationProposalRoleArn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.acceptDirectConnectGatewayAssociationProposalRoleArn"></a>

```java
public java.lang.String getAcceptDirectConnectGatewayAssociationProposalRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the role to accept the Direct Connect Gateway association proposal. Needs directconnect:AcceptDirectConnectGatewayAssociationProposal permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_direct_connect_gateway_association#accept_direct_connect_gateway_association_proposal_role_arn DirectconnectDirectConnectGatewayAssociation#accept_direct_connect_gateway_association_proposal_role_arn}

---

##### `allowedPrefixesToDirectConnectGateway`<sup>Optional</sup> <a name="allowedPrefixesToDirectConnectGateway" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.allowedPrefixesToDirectConnectGateway"></a>

```java
public java.util.List<java.lang.String> getAllowedPrefixesToDirectConnectGateway();
```

- *Type:* java.util.List<java.lang.String>

The Amazon VPC prefixes to advertise to the Direct Connect gateway.

This parameter is required when you create an association to a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_direct_connect_gateway_association#allowed_prefixes_to_direct_connect_gateway DirectconnectDirectConnectGatewayAssociation#allowed_prefixes_to_direct_connect_gateway}

---



