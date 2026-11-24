# `ec2TransitGatewayNetworkFunctionAttachment` Submodule <a name="`ec2TransitGatewayNetworkFunctionAttachment` Submodule" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayNetworkFunctionAttachment <a name="Ec2TransitGatewayNetworkFunctionAttachment" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment awscc_ec2_transit_gateway_network_function_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_network_function_attachment.Ec2TransitGatewayNetworkFunctionAttachment;

Ec2TransitGatewayNetworkFunctionAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .transitGatewayId(java.lang.String)
//  .availabilityZoneIds(java.util.List<java.lang.String>)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .serviceName(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2TransitGatewayNetworkFunctionAttachmentTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | The ID of the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.availabilityZoneIds">availabilityZoneIds</a></code> | <code>java.util.List<java.lang.String></code> | The Availability Zone IDs for the attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | The Availability Zones for the attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the network function service. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>></code> | The tags for the attachment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.transitGatewayId"></a>

- *Type:* java.lang.String

The ID of the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#transit_gateway_id Ec2TransitGatewayNetworkFunctionAttachment#transit_gateway_id}

---

##### `availabilityZoneIds`<sup>Optional</sup> <a name="availabilityZoneIds" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.availabilityZoneIds"></a>

- *Type:* java.util.List<java.lang.String>

The Availability Zone IDs for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#availability_zone_ids Ec2TransitGatewayNetworkFunctionAttachment#availability_zone_ids}

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.availabilityZones"></a>

- *Type:* java.util.List<java.lang.String>

The Availability Zones for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#availability_zones Ec2TransitGatewayNetworkFunctionAttachment#availability_zones}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

The name of the network function service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#service_name Ec2TransitGatewayNetworkFunctionAttachment#service_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>>

The tags for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#tags Ec2TransitGatewayNetworkFunctionAttachment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetAvailabilityZoneIds">resetAvailabilityZoneIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2TransitGatewayNetworkFunctionAttachmentTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>>

---

##### `resetAvailabilityZoneIds` <a name="resetAvailabilityZoneIds" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetAvailabilityZoneIds"></a>

```java
public void resetAvailabilityZoneIds()
```

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetAvailabilityZones"></a>

```java
public void resetAvailabilityZones()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetServiceName"></a>

```java
public void resetServiceName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayNetworkFunctionAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_network_function_attachment.Ec2TransitGatewayNetworkFunctionAttachment;

Ec2TransitGatewayNetworkFunctionAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_network_function_attachment.Ec2TransitGatewayNetworkFunctionAttachment;

Ec2TransitGatewayNetworkFunctionAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_network_function_attachment.Ec2TransitGatewayNetworkFunctionAttachment;

Ec2TransitGatewayNetworkFunctionAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_network_function_attachment.Ec2TransitGatewayNetworkFunctionAttachment;

Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2TransitGatewayNetworkFunctionAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2TransitGatewayNetworkFunctionAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2TransitGatewayNetworkFunctionAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayNetworkFunctionAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList">Ec2TransitGatewayNetworkFunctionAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIdsInput">availabilityZoneIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIds">availabilityZoneIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tags"></a>

```java
public Ec2TransitGatewayNetworkFunctionAttachmentTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList">Ec2TransitGatewayNetworkFunctionAttachmentTagsList</a>

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayAttachmentId"></a>

```java
public java.lang.String getTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

---

##### `availabilityZoneIdsInput`<sup>Optional</sup> <a name="availabilityZoneIdsInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIdsInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZoneIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2TransitGatewayNetworkFunctionAttachmentTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>>

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayIdInput"></a>

```java
public java.lang.String getTransitGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityZoneIds`<sup>Required</sup> <a name="availabilityZoneIds" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIds"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZoneIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayNetworkFunctionAttachmentConfig <a name="Ec2TransitGatewayNetworkFunctionAttachmentConfig" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_network_function_attachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig;

Ec2TransitGatewayNetworkFunctionAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .transitGatewayId(java.lang.String)
//  .availabilityZoneIds(java.util.List<java.lang.String>)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .serviceName(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2TransitGatewayNetworkFunctionAttachmentTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | The ID of the transit gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.availabilityZoneIds">availabilityZoneIds</a></code> | <code>java.util.List<java.lang.String></code> | The Availability Zone IDs for the attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | The Availability Zones for the attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the network function service. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>></code> | The tags for the attachment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

The ID of the transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#transit_gateway_id Ec2TransitGatewayNetworkFunctionAttachment#transit_gateway_id}

---

##### `availabilityZoneIds`<sup>Optional</sup> <a name="availabilityZoneIds" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.availabilityZoneIds"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZoneIds();
```

- *Type:* java.util.List<java.lang.String>

The Availability Zone IDs for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#availability_zone_ids Ec2TransitGatewayNetworkFunctionAttachment#availability_zone_ids}

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

The Availability Zones for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#availability_zones Ec2TransitGatewayNetworkFunctionAttachment#availability_zones}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The name of the network function service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#service_name Ec2TransitGatewayNetworkFunctionAttachment#service_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2TransitGatewayNetworkFunctionAttachmentTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>>

The tags for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#tags Ec2TransitGatewayNetworkFunctionAttachment#tags}

---

### Ec2TransitGatewayNetworkFunctionAttachmentTags <a name="Ec2TransitGatewayNetworkFunctionAttachmentTags" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_network_function_attachment.Ec2TransitGatewayNetworkFunctionAttachmentTags;

Ec2TransitGatewayNetworkFunctionAttachmentTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#key Ec2TransitGatewayNetworkFunctionAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_transit_gateway_network_function_attachment#value Ec2TransitGatewayNetworkFunctionAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayNetworkFunctionAttachmentTagsList <a name="Ec2TransitGatewayNetworkFunctionAttachmentTagsList" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_network_function_attachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList;

new Ec2TransitGatewayNetworkFunctionAttachmentTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.get"></a>

```java
public Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2TransitGatewayNetworkFunctionAttachmentTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>>

---


### Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference <a name="Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_transit_gateway_network_function_attachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference;

new Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2TransitGatewayNetworkFunctionAttachmentTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TransitGatewayNetworkFunctionAttachment.Ec2TransitGatewayNetworkFunctionAttachmentTags">Ec2TransitGatewayNetworkFunctionAttachmentTags</a>

---



