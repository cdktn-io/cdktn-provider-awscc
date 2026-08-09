# `ssmcontactsPlan` Submodule <a name="`ssmcontactsPlan` Submodule" id="@cdktn/provider-awscc.ssmcontactsPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsPlan <a name="SsmcontactsPlan" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_plan awscc_ssmcontacts_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_plan.SsmcontactsPlan;

SsmcontactsPlan.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .contactId(java.lang.String)
//  .rotationIds(java.util.List<java.lang.String>)
//  .stages(IResolvable|java.util.List<SsmcontactsPlanStages>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.contactId">contactId</a></code> | <code>java.lang.String</code> | Contact ID for the AWS SSM Incident Manager Contact to associate the plan. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.rotationIds">rotationIds</a></code> | <code>java.util.List<java.lang.String></code> | Rotation Ids to associate with Oncall Contact for engagement. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.stages">stages</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>></code> | The stages that an escalation plan or engagement plan engages contacts and contact methods in. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `contactId`<sup>Optional</sup> <a name="contactId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.contactId"></a>

- *Type:* java.lang.String

Contact ID for the AWS SSM Incident Manager Contact to associate the plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}

---

##### `rotationIds`<sup>Optional</sup> <a name="rotationIds" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.rotationIds"></a>

- *Type:* java.util.List<java.lang.String>

Rotation Ids to associate with Oncall Contact for engagement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_plan#rotation_ids SsmcontactsPlan#rotation_ids}

---

##### `stages`<sup>Optional</sup> <a name="stages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.stages"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>>

The stages that an escalation plan or engagement plan engages contacts and contact methods in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_plan#stages SsmcontactsPlan#stages}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.putStages">putStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetContactId">resetContactId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetRotationIds">resetRotationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetStages">resetStages</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStages` <a name="putStages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.putStages"></a>

```java
public void putStages(IResolvable|java.util.List<SsmcontactsPlanStages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.putStages.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>>

---

##### `resetContactId` <a name="resetContactId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetContactId"></a>

```java
public void resetContactId()
```

##### `resetRotationIds` <a name="resetRotationIds" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetRotationIds"></a>

```java
public void resetRotationIds()
```

##### `resetStages` <a name="resetStages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetStages"></a>

```java
public void resetStages()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmcontactsPlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_plan.SsmcontactsPlan;

SsmcontactsPlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_plan.SsmcontactsPlan;

SsmcontactsPlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_plan.SsmcontactsPlan;

SsmcontactsPlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_plan.SsmcontactsPlan;

SsmcontactsPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SsmcontactsPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SsmcontactsPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SsmcontactsPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SsmcontactsPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SsmcontactsPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList">SsmcontactsPlanStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.contactIdInput">contactIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.rotationIdsInput">rotationIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.stagesInput">stagesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.contactId">contactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.rotationIds">rotationIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.stages"></a>

```java
public SsmcontactsPlanStagesList getStages();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList">SsmcontactsPlanStagesList</a>

---

##### `contactIdInput`<sup>Optional</sup> <a name="contactIdInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.contactIdInput"></a>

```java
public java.lang.String getContactIdInput();
```

- *Type:* java.lang.String

---

##### `rotationIdsInput`<sup>Optional</sup> <a name="rotationIdsInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.rotationIdsInput"></a>

```java
public java.util.List<java.lang.String> getRotationIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stagesInput`<sup>Optional</sup> <a name="stagesInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.stagesInput"></a>

```java
public IResolvable|java.util.List<SsmcontactsPlanStages> getStagesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>>

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.contactId"></a>

```java
public java.lang.String getContactId();
```

- *Type:* java.lang.String

---

##### `rotationIds`<sup>Required</sup> <a name="rotationIds" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.rotationIds"></a>

```java
public java.util.List<java.lang.String> getRotationIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsPlanConfig <a name="SsmcontactsPlanConfig" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_plan.SsmcontactsPlanConfig;

SsmcontactsPlanConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .contactId(java.lang.String)
//  .rotationIds(java.util.List<java.lang.String>)
//  .stages(IResolvable|java.util.List<SsmcontactsPlanStages>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.contactId">contactId</a></code> | <code>java.lang.String</code> | Contact ID for the AWS SSM Incident Manager Contact to associate the plan. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.rotationIds">rotationIds</a></code> | <code>java.util.List<java.lang.String></code> | Rotation Ids to associate with Oncall Contact for engagement. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.stages">stages</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>></code> | The stages that an escalation plan or engagement plan engages contacts and contact methods in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `contactId`<sup>Optional</sup> <a name="contactId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.contactId"></a>

```java
public java.lang.String getContactId();
```

- *Type:* java.lang.String

Contact ID for the AWS SSM Incident Manager Contact to associate the plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}

---

##### `rotationIds`<sup>Optional</sup> <a name="rotationIds" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.rotationIds"></a>

```java
public java.util.List<java.lang.String> getRotationIds();
```

- *Type:* java.util.List<java.lang.String>

Rotation Ids to associate with Oncall Contact for engagement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_plan#rotation_ids SsmcontactsPlan#rotation_ids}

---

##### `stages`<sup>Optional</sup> <a name="stages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.stages"></a>

```java
public IResolvable|java.util.List<SsmcontactsPlanStages> getStages();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>>

The stages that an escalation plan or engagement plan engages contacts and contact methods in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_plan#stages SsmcontactsPlan#stages}

---

### SsmcontactsPlanStages <a name="SsmcontactsPlanStages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_plan.SsmcontactsPlanStages;

SsmcontactsPlanStages.builder()
//  .durationInMinutes(java.lang.Number)
//  .targets(IResolvable|java.util.List<SsmcontactsPlanStagesTargets>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.property.durationInMinutes">durationInMinutes</a></code> | <code>java.lang.Number</code> | The time to wait until beginning the next stage. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.property.targets">targets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>></code> | The contacts or contact methods that the escalation plan or engagement plan is engaging. |

---

##### `durationInMinutes`<sup>Optional</sup> <a name="durationInMinutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.property.durationInMinutes"></a>

```java
public java.lang.Number getDurationInMinutes();
```

- *Type:* java.lang.Number

The time to wait until beginning the next stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_plan#duration_in_minutes SsmcontactsPlan#duration_in_minutes}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.property.targets"></a>

```java
public IResolvable|java.util.List<SsmcontactsPlanStagesTargets> getTargets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>>

The contacts or contact methods that the escalation plan or engagement plan is engaging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_plan#targets SsmcontactsPlan#targets}

---

### SsmcontactsPlanStagesTargets <a name="SsmcontactsPlanStagesTargets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_plan.SsmcontactsPlanStagesTargets;

SsmcontactsPlanStagesTargets.builder()
//  .channelTargetInfo(SsmcontactsPlanStagesTargetsChannelTargetInfo)
//  .contactTargetInfo(SsmcontactsPlanStagesTargetsContactTargetInfo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.property.channelTargetInfo">channelTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a></code> | Information about the contact channel that SSM Incident Manager uses to engage the contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.property.contactTargetInfo">contactTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a></code> | The contact that SSM Incident Manager is engaging during an incident. |

---

##### `channelTargetInfo`<sup>Optional</sup> <a name="channelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.property.channelTargetInfo"></a>

```java
public SsmcontactsPlanStagesTargetsChannelTargetInfo getChannelTargetInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a>

Information about the contact channel that SSM Incident Manager uses to engage the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_plan#channel_target_info SsmcontactsPlan#channel_target_info}

---

##### `contactTargetInfo`<sup>Optional</sup> <a name="contactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.property.contactTargetInfo"></a>

```java
public SsmcontactsPlanStagesTargetsContactTargetInfo getContactTargetInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a>

The contact that SSM Incident Manager is engaging during an incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_plan#contact_target_info SsmcontactsPlan#contact_target_info}

---

### SsmcontactsPlanStagesTargetsChannelTargetInfo <a name="SsmcontactsPlanStagesTargetsChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_plan.SsmcontactsPlanStagesTargetsChannelTargetInfo;

SsmcontactsPlanStagesTargetsChannelTargetInfo.builder()
//  .channelId(java.lang.String)
//  .retryIntervalInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.property.channelId">channelId</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the contact channel. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.property.retryIntervalInMinutes">retryIntervalInMinutes</a></code> | <code>java.lang.Number</code> | The number of minutes to wait to retry sending engagement in the case the engagement initially fails. |

---

##### `channelId`<sup>Optional</sup> <a name="channelId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the contact channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_plan#channel_id SsmcontactsPlan#channel_id}

---

##### `retryIntervalInMinutes`<sup>Optional</sup> <a name="retryIntervalInMinutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.property.retryIntervalInMinutes"></a>

```java
public java.lang.Number getRetryIntervalInMinutes();
```

- *Type:* java.lang.Number

The number of minutes to wait to retry sending engagement in the case the engagement initially fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_plan#retry_interval_in_minutes SsmcontactsPlan#retry_interval_in_minutes}

---

### SsmcontactsPlanStagesTargetsContactTargetInfo <a name="SsmcontactsPlanStagesTargetsContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_plan.SsmcontactsPlanStagesTargetsContactTargetInfo;

SsmcontactsPlanStagesTargetsContactTargetInfo.builder()
//  .contactId(java.lang.String)
//  .isEssential(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.property.contactId">contactId</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.property.isEssential">isEssential</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan. |

---

##### `contactId`<sup>Optional</sup> <a name="contactId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.property.contactId"></a>

```java
public java.lang.String getContactId();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}

---

##### `isEssential`<sup>Optional</sup> <a name="isEssential" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.property.isEssential"></a>

```java
public java.lang.Boolean|IResolvable getIsEssential();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssmcontacts_plan#is_essential SsmcontactsPlan#is_essential}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmcontactsPlanStagesList <a name="SsmcontactsPlanStagesList" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_plan.SsmcontactsPlanStagesList;

new SsmcontactsPlanStagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.get"></a>

```java
public SsmcontactsPlanStagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmcontactsPlanStages> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>>

---


### SsmcontactsPlanStagesOutputReference <a name="SsmcontactsPlanStagesOutputReference" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_plan.SsmcontactsPlanStagesOutputReference;

new SsmcontactsPlanStagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resetDurationInMinutes">resetDurationInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resetTargets">resetTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargets` <a name="putTargets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.putTargets"></a>

```java
public void putTargets(IResolvable|java.util.List<SsmcontactsPlanStagesTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.putTargets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>>

---

##### `resetDurationInMinutes` <a name="resetDurationInMinutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resetDurationInMinutes"></a>

```java
public void resetDurationInMinutes()
```

##### `resetTargets` <a name="resetTargets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resetTargets"></a>

```java
public void resetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList">SsmcontactsPlanStagesTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.durationInMinutesInput">durationInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.targetsInput">targetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.durationInMinutes">durationInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.targets"></a>

```java
public SsmcontactsPlanStagesTargetsList getTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList">SsmcontactsPlanStagesTargetsList</a>

---

##### `durationInMinutesInput`<sup>Optional</sup> <a name="durationInMinutesInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.durationInMinutesInput"></a>

```java
public java.lang.Number getDurationInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.targetsInput"></a>

```java
public IResolvable|java.util.List<SsmcontactsPlanStagesTargets> getTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>>

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.durationInMinutes"></a>

```java
public java.lang.Number getDurationInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmcontactsPlanStages getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>

---


### SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference <a name="SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_plan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference;

new SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resetChannelId">resetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resetRetryIntervalInMinutes">resetRetryIntervalInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannelId` <a name="resetChannelId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resetChannelId"></a>

```java
public void resetChannelId()
```

##### `resetRetryIntervalInMinutes` <a name="resetRetryIntervalInMinutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resetRetryIntervalInMinutes"></a>

```java
public void resetRetryIntervalInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.channelIdInput">channelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput">retryIntervalInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.channelId">channelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutes">retryIntervalInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.channelIdInput"></a>

```java
public java.lang.String getChannelIdInput();
```

- *Type:* java.lang.String

---

##### `retryIntervalInMinutesInput`<sup>Optional</sup> <a name="retryIntervalInMinutesInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput"></a>

```java
public java.lang.Number getRetryIntervalInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

---

##### `retryIntervalInMinutes`<sup>Required</sup> <a name="retryIntervalInMinutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutes"></a>

```java
public java.lang.Number getRetryIntervalInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmcontactsPlanStagesTargetsChannelTargetInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a>

---


### SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference <a name="SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_plan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference;

new SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resetContactId">resetContactId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resetIsEssential">resetIsEssential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContactId` <a name="resetContactId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resetContactId"></a>

```java
public void resetContactId()
```

##### `resetIsEssential` <a name="resetIsEssential" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resetIsEssential"></a>

```java
public void resetIsEssential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.contactIdInput">contactIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.isEssentialInput">isEssentialInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.contactId">contactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.isEssential">isEssential</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contactIdInput`<sup>Optional</sup> <a name="contactIdInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.contactIdInput"></a>

```java
public java.lang.String getContactIdInput();
```

- *Type:* java.lang.String

---

##### `isEssentialInput`<sup>Optional</sup> <a name="isEssentialInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.isEssentialInput"></a>

```java
public java.lang.Boolean|IResolvable getIsEssentialInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.contactId"></a>

```java
public java.lang.String getContactId();
```

- *Type:* java.lang.String

---

##### `isEssential`<sup>Required</sup> <a name="isEssential" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.isEssential"></a>

```java
public java.lang.Boolean|IResolvable getIsEssential();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmcontactsPlanStagesTargetsContactTargetInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a>

---


### SsmcontactsPlanStagesTargetsList <a name="SsmcontactsPlanStagesTargetsList" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_plan.SsmcontactsPlanStagesTargetsList;

new SsmcontactsPlanStagesTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.get"></a>

```java
public SsmcontactsPlanStagesTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmcontactsPlanStagesTargets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>>

---


### SsmcontactsPlanStagesTargetsOutputReference <a name="SsmcontactsPlanStagesTargetsOutputReference" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_plan.SsmcontactsPlanStagesTargetsOutputReference;

new SsmcontactsPlanStagesTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putChannelTargetInfo">putChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putContactTargetInfo">putContactTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resetChannelTargetInfo">resetChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resetContactTargetInfo">resetContactTargetInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChannelTargetInfo` <a name="putChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putChannelTargetInfo"></a>

```java
public void putChannelTargetInfo(SsmcontactsPlanStagesTargetsChannelTargetInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putChannelTargetInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a>

---

##### `putContactTargetInfo` <a name="putContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putContactTargetInfo"></a>

```java
public void putContactTargetInfo(SsmcontactsPlanStagesTargetsContactTargetInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putContactTargetInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a>

---

##### `resetChannelTargetInfo` <a name="resetChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resetChannelTargetInfo"></a>

```java
public void resetChannelTargetInfo()
```

##### `resetContactTargetInfo` <a name="resetContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resetContactTargetInfo"></a>

```java
public void resetContactTargetInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.channelTargetInfo">channelTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference">SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.contactTargetInfo">contactTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference">SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.channelTargetInfoInput">channelTargetInfoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.contactTargetInfoInput">contactTargetInfoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channelTargetInfo`<sup>Required</sup> <a name="channelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.channelTargetInfo"></a>

```java
public SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference getChannelTargetInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference">SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference</a>

---

##### `contactTargetInfo`<sup>Required</sup> <a name="contactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.contactTargetInfo"></a>

```java
public SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference getContactTargetInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference">SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference</a>

---

##### `channelTargetInfoInput`<sup>Optional</sup> <a name="channelTargetInfoInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.channelTargetInfoInput"></a>

```java
public IResolvable|SsmcontactsPlanStagesTargetsChannelTargetInfo getChannelTargetInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a>

---

##### `contactTargetInfoInput`<sup>Optional</sup> <a name="contactTargetInfoInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.contactTargetInfoInput"></a>

```java
public IResolvable|SsmcontactsPlanStagesTargetsContactTargetInfo getContactTargetInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmcontactsPlanStagesTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>

---



