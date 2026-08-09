# `ec2TransitGatewayMulticastDomainAssociation` Submodule <a name="`ec2TransitGatewayMulticastDomainAssociation` Submodule" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayMulticastDomainAssociation <a name="Ec2TransitGatewayMulticastDomainAssociation" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_multicast_domain_association awscc_ec2_transit_gateway_multicast_domain_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_multicast_domain_association.Ec2TransitGatewayMulticastDomainAssociation;

Ec2TransitGatewayMulticastDomainAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .subnetId(java.lang.String)
    .transitGatewayAttachmentId(java.lang.String)
    .transitGatewayMulticastDomainId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | The IDs of the subnets to associate with the transit gateway multicast domain. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | The ID of the transit gateway attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.transitGatewayMulticastDomainId">transitGatewayMulticastDomainId</a></code> | <code>java.lang.String</code> | The ID of the transit gateway multicast domain. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

The IDs of the subnets to associate with the transit gateway multicast domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_multicast_domain_association#subnet_id Ec2TransitGatewayMulticastDomainAssociation#subnet_id}

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.transitGatewayAttachmentId"></a>

- *Type:* java.lang.String

The ID of the transit gateway attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_multicast_domain_association#transit_gateway_attachment_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_attachment_id}

---

##### `transitGatewayMulticastDomainId`<sup>Required</sup> <a name="transitGatewayMulticastDomainId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.Initializer.parameter.transitGatewayMulticastDomainId"></a>

- *Type:* java.lang.String

The ID of the transit gateway multicast domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_multicast_domain_association#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_multicast_domain_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayMulticastDomainAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_multicast_domain_association.Ec2TransitGatewayMulticastDomainAssociation;

Ec2TransitGatewayMulticastDomainAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_multicast_domain_association.Ec2TransitGatewayMulticastDomainAssociation;

Ec2TransitGatewayMulticastDomainAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_multicast_domain_association.Ec2TransitGatewayMulticastDomainAssociation;

Ec2TransitGatewayMulticastDomainAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_multicast_domain_association.Ec2TransitGatewayMulticastDomainAssociation;

Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2TransitGatewayMulticastDomainAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2TransitGatewayMulticastDomainAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2TransitGatewayMulticastDomainAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_multicast_domain_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayMulticastDomainAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayAttachmentIdInput">transitGatewayAttachmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayMulticastDomainIdInput">transitGatewayMulticastDomainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayMulticastDomainId">transitGatewayMulticastDomainId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `transitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="transitGatewayAttachmentIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayAttachmentIdInput"></a>

```java
public java.lang.String getTransitGatewayAttachmentIdInput();
```

- *Type:* java.lang.String

---

##### `transitGatewayMulticastDomainIdInput`<sup>Optional</sup> <a name="transitGatewayMulticastDomainIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayMulticastDomainIdInput"></a>

```java
public java.lang.String getTransitGatewayMulticastDomainIdInput();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayAttachmentId"></a>

```java
public java.lang.String getTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

---

##### `transitGatewayMulticastDomainId`<sup>Required</sup> <a name="transitGatewayMulticastDomainId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.transitGatewayMulticastDomainId"></a>

```java
public java.lang.String getTransitGatewayMulticastDomainId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayMulticastDomainAssociationConfig <a name="Ec2TransitGatewayMulticastDomainAssociationConfig" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_multicast_domain_association.Ec2TransitGatewayMulticastDomainAssociationConfig;

Ec2TransitGatewayMulticastDomainAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .subnetId(java.lang.String)
    .transitGatewayAttachmentId(java.lang.String)
    .transitGatewayMulticastDomainId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | The IDs of the subnets to associate with the transit gateway multicast domain. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | The ID of the transit gateway attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.transitGatewayMulticastDomainId">transitGatewayMulticastDomainId</a></code> | <code>java.lang.String</code> | The ID of the transit gateway multicast domain. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

The IDs of the subnets to associate with the transit gateway multicast domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_multicast_domain_association#subnet_id Ec2TransitGatewayMulticastDomainAssociation#subnet_id}

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.transitGatewayAttachmentId"></a>

```java
public java.lang.String getTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

The ID of the transit gateway attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_multicast_domain_association#transit_gateway_attachment_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_attachment_id}

---

##### `transitGatewayMulticastDomainId`<sup>Required</sup> <a name="transitGatewayMulticastDomainId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastDomainAssociation.Ec2TransitGatewayMulticastDomainAssociationConfig.property.transitGatewayMulticastDomainId"></a>

```java
public java.lang.String getTransitGatewayMulticastDomainId();
```

- *Type:* java.lang.String

The ID of the transit gateway multicast domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_multicast_domain_association#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_multicast_domain_id}

---



