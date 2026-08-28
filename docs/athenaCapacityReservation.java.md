# `athenaCapacityReservation` Submodule <a name="`athenaCapacityReservation` Submodule" id="@cdktn/provider-awscc.athenaCapacityReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaCapacityReservation <a name="AthenaCapacityReservation" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation awscc_athena_capacity_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_capacity_reservation.AthenaCapacityReservation;

AthenaCapacityReservation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .targetDpus(java.lang.Number)
//  .capacityAssignmentConfiguration(AthenaCapacityReservationCapacityAssignmentConfiguration)
//  .tags(IResolvable|java.util.List<AthenaCapacityReservationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The reservation name. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.targetDpus">targetDpus</a></code> | <code>java.lang.Number</code> | The number of DPUs to request to be allocated to the reservation. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.capacityAssignmentConfiguration">capacityAssignmentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a></code> | Assignment configuration to assign workgroups to a reservation. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The reservation name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#name AthenaCapacityReservation#name}

---

##### `targetDpus`<sup>Required</sup> <a name="targetDpus" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.targetDpus"></a>

- *Type:* java.lang.Number

The number of DPUs to request to be allocated to the reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#target_dpus AthenaCapacityReservation#target_dpus}

---

##### `capacityAssignmentConfiguration`<sup>Optional</sup> <a name="capacityAssignmentConfiguration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.capacityAssignmentConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a>

Assignment configuration to assign workgroups to a reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#capacity_assignment_configuration AthenaCapacityReservation#capacity_assignment_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#tags AthenaCapacityReservation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putCapacityAssignmentConfiguration">putCapacityAssignmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetCapacityAssignmentConfiguration">resetCapacityAssignmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacityAssignmentConfiguration` <a name="putCapacityAssignmentConfiguration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putCapacityAssignmentConfiguration"></a>

```java
public void putCapacityAssignmentConfiguration(AthenaCapacityReservationCapacityAssignmentConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putCapacityAssignmentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<AthenaCapacityReservationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>>

---

##### `resetCapacityAssignmentConfiguration` <a name="resetCapacityAssignmentConfiguration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetCapacityAssignmentConfiguration"></a>

```java
public void resetCapacityAssignmentConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AthenaCapacityReservation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.athena_capacity_reservation.AthenaCapacityReservation;

AthenaCapacityReservation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.athena_capacity_reservation.AthenaCapacityReservation;

AthenaCapacityReservation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.athena_capacity_reservation.AthenaCapacityReservation;

AthenaCapacityReservation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.athena_capacity_reservation.AthenaCapacityReservation;

AthenaCapacityReservation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AthenaCapacityReservation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AthenaCapacityReservation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AthenaCapacityReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AthenaCapacityReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AthenaCapacityReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.allocatedDpus">allocatedDpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.capacityAssignmentConfiguration">capacityAssignmentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference">AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.lastSuccessfulAllocationTime">lastSuccessfulAllocationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList">AthenaCapacityReservationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.capacityAssignmentConfigurationInput">capacityAssignmentConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.targetDpusInput">targetDpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.targetDpus">targetDpus</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allocatedDpus`<sup>Required</sup> <a name="allocatedDpus" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.allocatedDpus"></a>

```java
public java.lang.Number getAllocatedDpus();
```

- *Type:* java.lang.Number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `capacityAssignmentConfiguration`<sup>Required</sup> <a name="capacityAssignmentConfiguration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.capacityAssignmentConfiguration"></a>

```java
public AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference getCapacityAssignmentConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference">AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastSuccessfulAllocationTime`<sup>Required</sup> <a name="lastSuccessfulAllocationTime" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.lastSuccessfulAllocationTime"></a>

```java
public java.lang.String getLastSuccessfulAllocationTime();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tags"></a>

```java
public AthenaCapacityReservationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList">AthenaCapacityReservationTagsList</a>

---

##### `capacityAssignmentConfigurationInput`<sup>Optional</sup> <a name="capacityAssignmentConfigurationInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.capacityAssignmentConfigurationInput"></a>

```java
public IResolvable|AthenaCapacityReservationCapacityAssignmentConfiguration getCapacityAssignmentConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tagsInput"></a>

```java
public IResolvable|java.util.List<AthenaCapacityReservationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>>

---

##### `targetDpusInput`<sup>Optional</sup> <a name="targetDpusInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.targetDpusInput"></a>

```java
public java.lang.Number getTargetDpusInput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `targetDpus`<sup>Required</sup> <a name="targetDpus" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.targetDpus"></a>

```java
public java.lang.Number getTargetDpus();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaCapacityReservationCapacityAssignmentConfiguration <a name="AthenaCapacityReservationCapacityAssignmentConfiguration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_capacity_reservation.AthenaCapacityReservationCapacityAssignmentConfiguration;

AthenaCapacityReservationCapacityAssignmentConfiguration.builder()
//  .capacityAssignments(IResolvable|java.util.List<AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration.property.capacityAssignments">capacityAssignments</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>></code> | List of capacity assignments. |

---

##### `capacityAssignments`<sup>Optional</sup> <a name="capacityAssignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration.property.capacityAssignments"></a>

```java
public IResolvable|java.util.List<AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments> getCapacityAssignments();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>>

List of capacity assignments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#capacity_assignments AthenaCapacityReservation#capacity_assignments}

---

### AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments <a name="AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_capacity_reservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments;

AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments.builder()
//  .workgroupNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments.property.workgroupNames">workgroupNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#workgroup_names AthenaCapacityReservation#workgroup_names}. |

---

##### `workgroupNames`<sup>Optional</sup> <a name="workgroupNames" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments.property.workgroupNames"></a>

```java
public java.util.List<java.lang.String> getWorkgroupNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#workgroup_names AthenaCapacityReservation#workgroup_names}.

---

### AthenaCapacityReservationConfig <a name="AthenaCapacityReservationConfig" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_capacity_reservation.AthenaCapacityReservationConfig;

AthenaCapacityReservationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .targetDpus(java.lang.Number)
//  .capacityAssignmentConfiguration(AthenaCapacityReservationCapacityAssignmentConfiguration)
//  .tags(IResolvable|java.util.List<AthenaCapacityReservationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The reservation name. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.targetDpus">targetDpus</a></code> | <code>java.lang.Number</code> | The number of DPUs to request to be allocated to the reservation. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.capacityAssignmentConfiguration">capacityAssignmentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a></code> | Assignment configuration to assign workgroups to a reservation. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The reservation name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#name AthenaCapacityReservation#name}

---

##### `targetDpus`<sup>Required</sup> <a name="targetDpus" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.targetDpus"></a>

```java
public java.lang.Number getTargetDpus();
```

- *Type:* java.lang.Number

The number of DPUs to request to be allocated to the reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#target_dpus AthenaCapacityReservation#target_dpus}

---

##### `capacityAssignmentConfiguration`<sup>Optional</sup> <a name="capacityAssignmentConfiguration" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.capacityAssignmentConfiguration"></a>

```java
public AthenaCapacityReservationCapacityAssignmentConfiguration getCapacityAssignmentConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a>

Assignment configuration to assign workgroups to a reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#capacity_assignment_configuration AthenaCapacityReservation#capacity_assignment_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<AthenaCapacityReservationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#tags AthenaCapacityReservation#tags}

---

### AthenaCapacityReservationTags <a name="AthenaCapacityReservationTags" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_capacity_reservation.AthenaCapacityReservationTags;

AthenaCapacityReservationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#key AthenaCapacityReservation#key}. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#value AthenaCapacityReservation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#key AthenaCapacityReservation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/athena_capacity_reservation#value AthenaCapacityReservation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList <a name="AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_capacity_reservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList;

new AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.get"></a>

```java
public AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>>

---


### AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference <a name="AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_capacity_reservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference;

new AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resetWorkgroupNames">resetWorkgroupNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkgroupNames` <a name="resetWorkgroupNames" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.resetWorkgroupNames"></a>

```java
public void resetWorkgroupNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.workgroupNamesInput">workgroupNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.workgroupNames">workgroupNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workgroupNamesInput`<sup>Optional</sup> <a name="workgroupNamesInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.workgroupNamesInput"></a>

```java
public java.util.List<java.lang.String> getWorkgroupNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workgroupNames`<sup>Required</sup> <a name="workgroupNames" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.workgroupNames"></a>

```java
public java.util.List<java.lang.String> getWorkgroupNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>

---


### AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference <a name="AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_capacity_reservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference;

new AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.putCapacityAssignments">putCapacityAssignments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resetCapacityAssignments">resetCapacityAssignments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacityAssignments` <a name="putCapacityAssignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.putCapacityAssignments"></a>

```java
public void putCapacityAssignments(IResolvable|java.util.List<AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.putCapacityAssignments.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>>

---

##### `resetCapacityAssignments` <a name="resetCapacityAssignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.resetCapacityAssignments"></a>

```java
public void resetCapacityAssignments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.capacityAssignments">capacityAssignments</a></code> | <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.capacityAssignmentsInput">capacityAssignmentsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityAssignments`<sup>Required</sup> <a name="capacityAssignments" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.capacityAssignments"></a>

```java
public AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList getCapacityAssignments();
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignmentsList</a>

---

##### `capacityAssignmentsInput`<sup>Optional</sup> <a name="capacityAssignmentsInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.capacityAssignmentsInput"></a>

```java
public IResolvable|java.util.List<AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments> getCapacityAssignmentsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments">AthenaCapacityReservationCapacityAssignmentConfigurationCapacityAssignments</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaCapacityReservationCapacityAssignmentConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationCapacityAssignmentConfiguration">AthenaCapacityReservationCapacityAssignmentConfiguration</a>

---


### AthenaCapacityReservationTagsList <a name="AthenaCapacityReservationTagsList" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_capacity_reservation.AthenaCapacityReservationTagsList;

new AthenaCapacityReservationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.get"></a>

```java
public AthenaCapacityReservationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AthenaCapacityReservationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>>

---


### AthenaCapacityReservationTagsOutputReference <a name="AthenaCapacityReservationTagsOutputReference" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_capacity_reservation.AthenaCapacityReservationTagsOutputReference;

new AthenaCapacityReservationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AthenaCapacityReservationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.athenaCapacityReservation.AthenaCapacityReservationTags">AthenaCapacityReservationTags</a>

---



