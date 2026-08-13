# `ec2NetworkInterfaceAttachment` Submodule <a name="`ec2NetworkInterfaceAttachment` Submodule" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NetworkInterfaceAttachment <a name="Ec2NetworkInterfaceAttachment" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment awscc_ec2_network_interface_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface_attachment.Ec2NetworkInterfaceAttachment;

Ec2NetworkInterfaceAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .deviceIndex(java.lang.String)
    .instanceId(java.lang.String)
    .networkInterfaceId(java.lang.String)
//  .deleteOnTermination(java.lang.Boolean|IResolvable)
//  .enaQueueCount(java.lang.Number)
//  .enaSrdSpecification(Ec2NetworkInterfaceAttachmentEnaSrdSpecification)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.deviceIndex">deviceIndex</a></code> | <code>java.lang.String</code> | The network interface's position in the attachment order. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The ID of the instance to which you will attach the ENI. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | The ID of the ENI that you want to attach. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to delete the network interface when the instance terminates. By default, this value is set to ``true``. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.enaQueueCount">enaQueueCount</a></code> | <code>java.lang.Number</code> | The number of ENA queues created with the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.enaSrdSpecification">enaSrdSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a></code> | Configures ENA Express for the network interface that this action attaches to the instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.deviceIndex"></a>

- *Type:* java.lang.String

The network interface's position in the attachment order.

For example, the first attached network interface has a `DeviceIndex` of 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#device_index Ec2NetworkInterfaceAttachment#device_index}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

The ID of the instance to which you will attach the ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#instance_id Ec2NetworkInterfaceAttachment#instance_id}

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.networkInterfaceId"></a>

- *Type:* java.lang.String

The ID of the ENI that you want to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#network_interface_id Ec2NetworkInterfaceAttachment#network_interface_id}

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.deleteOnTermination"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to delete the network interface when the instance terminates. By default, this value is set to ``true``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#delete_on_termination Ec2NetworkInterfaceAttachment#delete_on_termination}

---

##### `enaQueueCount`<sup>Optional</sup> <a name="enaQueueCount" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.enaQueueCount"></a>

- *Type:* java.lang.Number

The number of ENA queues created with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#ena_queue_count Ec2NetworkInterfaceAttachment#ena_queue_count}

---

##### `enaSrdSpecification`<sup>Optional</sup> <a name="enaSrdSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.enaSrdSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a>

Configures ENA Express for the network interface that this action attaches to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#ena_srd_specification Ec2NetworkInterfaceAttachment#ena_srd_specification}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.putEnaSrdSpecification">putEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetEnaQueueCount">resetEnaQueueCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetEnaSrdSpecification">resetEnaSrdSpecification</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEnaSrdSpecification` <a name="putEnaSrdSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.putEnaSrdSpecification"></a>

```java
public void putEnaSrdSpecification(Ec2NetworkInterfaceAttachmentEnaSrdSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.putEnaSrdSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a>

---

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetDeleteOnTermination"></a>

```java
public void resetDeleteOnTermination()
```

##### `resetEnaQueueCount` <a name="resetEnaQueueCount" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetEnaQueueCount"></a>

```java
public void resetEnaQueueCount()
```

##### `resetEnaSrdSpecification` <a name="resetEnaSrdSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetEnaSrdSpecification"></a>

```java
public void resetEnaSrdSpecification()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2NetworkInterfaceAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface_attachment.Ec2NetworkInterfaceAttachment;

Ec2NetworkInterfaceAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface_attachment.Ec2NetworkInterfaceAttachment;

Ec2NetworkInterfaceAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface_attachment.Ec2NetworkInterfaceAttachment;

Ec2NetworkInterfaceAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface_attachment.Ec2NetworkInterfaceAttachment;

Ec2NetworkInterfaceAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2NetworkInterfaceAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2NetworkInterfaceAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2NetworkInterfaceAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2NetworkInterfaceAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2NetworkInterfaceAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.attachmentId">attachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaSrdSpecification">enaSrdSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deviceIndexInput">deviceIndexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaQueueCountInput">enaQueueCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaSrdSpecificationInput">enaSrdSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deviceIndex">deviceIndex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaQueueCount">enaQueueCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.attachmentId"></a>

```java
public java.lang.String getAttachmentId();
```

- *Type:* java.lang.String

---

##### `enaSrdSpecification`<sup>Required</sup> <a name="enaSrdSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaSrdSpecification"></a>

```java
public Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference getEnaSrdSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deleteOnTerminationInput"></a>

```java
public java.lang.Boolean|IResolvable getDeleteOnTerminationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deviceIndexInput`<sup>Optional</sup> <a name="deviceIndexInput" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deviceIndexInput"></a>

```java
public java.lang.String getDeviceIndexInput();
```

- *Type:* java.lang.String

---

##### `enaQueueCountInput`<sup>Optional</sup> <a name="enaQueueCountInput" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaQueueCountInput"></a>

```java
public java.lang.Number getEnaQueueCountInput();
```

- *Type:* java.lang.Number

---

##### `enaSrdSpecificationInput`<sup>Optional</sup> <a name="enaSrdSpecificationInput" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaSrdSpecificationInput"></a>

```java
public IResolvable|Ec2NetworkInterfaceAttachmentEnaSrdSpecification getEnaSrdSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a>

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.networkInterfaceIdInput"></a>

```java
public java.lang.String getNetworkInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deleteOnTermination"></a>

```java
public java.lang.Boolean|IResolvable getDeleteOnTermination();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deviceIndex"></a>

```java
public java.lang.String getDeviceIndex();
```

- *Type:* java.lang.String

---

##### `enaQueueCount`<sup>Required</sup> <a name="enaQueueCount" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaQueueCount"></a>

```java
public java.lang.Number getEnaQueueCount();
```

- *Type:* java.lang.Number

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NetworkInterfaceAttachmentConfig <a name="Ec2NetworkInterfaceAttachmentConfig" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface_attachment.Ec2NetworkInterfaceAttachmentConfig;

Ec2NetworkInterfaceAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .deviceIndex(java.lang.String)
    .instanceId(java.lang.String)
    .networkInterfaceId(java.lang.String)
//  .deleteOnTermination(java.lang.Boolean|IResolvable)
//  .enaQueueCount(java.lang.Number)
//  .enaSrdSpecification(Ec2NetworkInterfaceAttachmentEnaSrdSpecification)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.deviceIndex">deviceIndex</a></code> | <code>java.lang.String</code> | The network interface's position in the attachment order. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The ID of the instance to which you will attach the ENI. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | The ID of the ENI that you want to attach. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to delete the network interface when the instance terminates. By default, this value is set to ``true``. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.enaQueueCount">enaQueueCount</a></code> | <code>java.lang.Number</code> | The number of ENA queues created with the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.enaSrdSpecification">enaSrdSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a></code> | Configures ENA Express for the network interface that this action attaches to the instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.deviceIndex"></a>

```java
public java.lang.String getDeviceIndex();
```

- *Type:* java.lang.String

The network interface's position in the attachment order.

For example, the first attached network interface has a `DeviceIndex` of 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#device_index Ec2NetworkInterfaceAttachment#device_index}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

The ID of the instance to which you will attach the ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#instance_id Ec2NetworkInterfaceAttachment#instance_id}

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

The ID of the ENI that you want to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#network_interface_id Ec2NetworkInterfaceAttachment#network_interface_id}

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.deleteOnTermination"></a>

```java
public java.lang.Boolean|IResolvable getDeleteOnTermination();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to delete the network interface when the instance terminates. By default, this value is set to ``true``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#delete_on_termination Ec2NetworkInterfaceAttachment#delete_on_termination}

---

##### `enaQueueCount`<sup>Optional</sup> <a name="enaQueueCount" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.enaQueueCount"></a>

```java
public java.lang.Number getEnaQueueCount();
```

- *Type:* java.lang.Number

The number of ENA queues created with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#ena_queue_count Ec2NetworkInterfaceAttachment#ena_queue_count}

---

##### `enaSrdSpecification`<sup>Optional</sup> <a name="enaSrdSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.enaSrdSpecification"></a>

```java
public Ec2NetworkInterfaceAttachmentEnaSrdSpecification getEnaSrdSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a>

Configures ENA Express for the network interface that this action attaches to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#ena_srd_specification Ec2NetworkInterfaceAttachment#ena_srd_specification}

---

### Ec2NetworkInterfaceAttachmentEnaSrdSpecification <a name="Ec2NetworkInterfaceAttachmentEnaSrdSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface_attachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification;

Ec2NetworkInterfaceAttachmentEnaSrdSpecification.builder()
//  .enaSrdEnabled(java.lang.Boolean|IResolvable)
//  .enaSrdUdpSpecification(Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification.property.enaSrdEnabled">enaSrdEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether ENA Express is enabled for the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification.property.enaSrdUdpSpecification">enaSrdUdpSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | Configures ENA Express for UDP network traffic. |

---

##### `enaSrdEnabled`<sup>Optional</sup> <a name="enaSrdEnabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification.property.enaSrdEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEnaSrdEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether ENA Express is enabled for the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#ena_srd_enabled Ec2NetworkInterfaceAttachment#ena_srd_enabled}

---

##### `enaSrdUdpSpecification`<sup>Optional</sup> <a name="enaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification.property.enaSrdUdpSpecification"></a>

```java
public Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification getEnaSrdUdpSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a>

Configures ENA Express for UDP network traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#ena_srd_udp_specification Ec2NetworkInterfaceAttachment#ena_srd_udp_specification}

---

### Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification <a name="Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface_attachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification;

Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification.builder()
//  .enaSrdUdpEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled">enaSrdUdpEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#ena_srd_udp_enabled Ec2NetworkInterfaceAttachment#ena_srd_udp_enabled}. |

---

##### `enaSrdUdpEnabled`<sup>Optional</sup> <a name="enaSrdUdpEnabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEnaSrdUdpEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_network_interface_attachment#ena_srd_udp_enabled Ec2NetworkInterfaceAttachment#ena_srd_udp_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference <a name="Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface_attachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference;

new Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled">resetEnaSrdUdpEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnaSrdUdpEnabled` <a name="resetEnaSrdUdpEnabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled"></a>

```java
public void resetEnaSrdUdpEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput">enaSrdUdpEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled">enaSrdUdpEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enaSrdUdpEnabledInput`<sup>Optional</sup> <a name="enaSrdUdpEnabledInput" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnaSrdUdpEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enaSrdUdpEnabled`<sup>Required</sup> <a name="enaSrdUdpEnabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEnaSrdUdpEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a>

---


### Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference <a name="Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_network_interface_attachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference;

new Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification">putEnaSrdUdpSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resetEnaSrdEnabled">resetEnaSrdEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification">resetEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnaSrdUdpSpecification` <a name="putEnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification"></a>

```java
public void putEnaSrdUdpSpecification(Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a>

---

##### `resetEnaSrdEnabled` <a name="resetEnaSrdEnabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resetEnaSrdEnabled"></a>

```java
public void resetEnaSrdEnabled()
```

##### `resetEnaSrdUdpSpecification` <a name="resetEnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification"></a>

```java
public void resetEnaSrdUdpSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification">enaSrdUdpSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput">enaSrdEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput">enaSrdUdpSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdEnabled">enaSrdEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enaSrdUdpSpecification`<sup>Required</sup> <a name="enaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification"></a>

```java
public Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference getEnaSrdUdpSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a>

---

##### `enaSrdEnabledInput`<sup>Optional</sup> <a name="enaSrdEnabledInput" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnaSrdEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enaSrdUdpSpecificationInput`<sup>Optional</sup> <a name="enaSrdUdpSpecificationInput" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput"></a>

```java
public IResolvable|Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification getEnaSrdUdpSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a>

---

##### `enaSrdEnabled`<sup>Required</sup> <a name="enaSrdEnabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdEnabled"></a>

```java
public java.lang.Boolean|IResolvable getEnaSrdEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2NetworkInterfaceAttachmentEnaSrdSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a>

---



