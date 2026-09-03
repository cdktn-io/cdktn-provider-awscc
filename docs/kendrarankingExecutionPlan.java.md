# `kendrarankingExecutionPlan` Submodule <a name="`kendrarankingExecutionPlan` Submodule" id="@cdktn/provider-awscc.kendrarankingExecutionPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendrarankingExecutionPlan <a name="KendrarankingExecutionPlan" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kendraranking_execution_plan awscc_kendraranking_execution_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendraranking_execution_plan.KendrarankingExecutionPlan;

KendrarankingExecutionPlan.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .capacityUnits(KendrarankingExecutionPlanCapacityUnits)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<KendrarankingExecutionPlanTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of kendra ranking rescore execution plan. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.capacityUnits">capacityUnits</a></code> | <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a></code> | Capacity units. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description for the execution plan. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>></code> | Tags for labeling the execution plan. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of kendra ranking rescore execution plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kendraranking_execution_plan#name KendrarankingExecutionPlan#name}

---

##### `capacityUnits`<sup>Optional</sup> <a name="capacityUnits" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.capacityUnits"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a>

Capacity units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kendraranking_execution_plan#capacity_units KendrarankingExecutionPlan#capacity_units}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description for the execution plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kendraranking_execution_plan#description KendrarankingExecutionPlan#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>>

Tags for labeling the execution plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kendraranking_execution_plan#tags KendrarankingExecutionPlan#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.putCapacityUnits">putCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetCapacityUnits">resetCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacityUnits` <a name="putCapacityUnits" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.putCapacityUnits"></a>

```java
public void putCapacityUnits(KendrarankingExecutionPlanCapacityUnits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.putCapacityUnits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<KendrarankingExecutionPlanTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>>

---

##### `resetCapacityUnits` <a name="resetCapacityUnits" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetCapacityUnits"></a>

```java
public void resetCapacityUnits()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KendrarankingExecutionPlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isConstruct"></a>

```java
import io.cdktn.providers.awscc.kendraranking_execution_plan.KendrarankingExecutionPlan;

KendrarankingExecutionPlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.kendraranking_execution_plan.KendrarankingExecutionPlan;

KendrarankingExecutionPlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.kendraranking_execution_plan.KendrarankingExecutionPlan;

KendrarankingExecutionPlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.kendraranking_execution_plan.KendrarankingExecutionPlan;

KendrarankingExecutionPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KendrarankingExecutionPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KendrarankingExecutionPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KendrarankingExecutionPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KendrarankingExecutionPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kendraranking_execution_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KendrarankingExecutionPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.capacityUnits">capacityUnits</a></code> | <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference">KendrarankingExecutionPlanCapacityUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.executionPlanId">executionPlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList">KendrarankingExecutionPlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.capacityUnitsInput">capacityUnitsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `capacityUnits`<sup>Required</sup> <a name="capacityUnits" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.capacityUnits"></a>

```java
public KendrarankingExecutionPlanCapacityUnitsOutputReference getCapacityUnits();
```

- *Type:* <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference">KendrarankingExecutionPlanCapacityUnitsOutputReference</a>

---

##### `executionPlanId`<sup>Required</sup> <a name="executionPlanId" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.executionPlanId"></a>

```java
public java.lang.String getExecutionPlanId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.tags"></a>

```java
public KendrarankingExecutionPlanTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList">KendrarankingExecutionPlanTagsList</a>

---

##### `capacityUnitsInput`<sup>Optional</sup> <a name="capacityUnitsInput" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.capacityUnitsInput"></a>

```java
public IResolvable|KendrarankingExecutionPlanCapacityUnits getCapacityUnitsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.tagsInput"></a>

```java
public IResolvable|java.util.List<KendrarankingExecutionPlanTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KendrarankingExecutionPlanCapacityUnits <a name="KendrarankingExecutionPlanCapacityUnits" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendraranking_execution_plan.KendrarankingExecutionPlanCapacityUnits;

KendrarankingExecutionPlanCapacityUnits.builder()
//  .rescoreCapacityUnits(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits.property.rescoreCapacityUnits">rescoreCapacityUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kendraranking_execution_plan#rescore_capacity_units KendrarankingExecutionPlan#rescore_capacity_units}. |

---

##### `rescoreCapacityUnits`<sup>Optional</sup> <a name="rescoreCapacityUnits" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits.property.rescoreCapacityUnits"></a>

```java
public java.lang.Number getRescoreCapacityUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kendraranking_execution_plan#rescore_capacity_units KendrarankingExecutionPlan#rescore_capacity_units}.

---

### KendrarankingExecutionPlanConfig <a name="KendrarankingExecutionPlanConfig" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendraranking_execution_plan.KendrarankingExecutionPlanConfig;

KendrarankingExecutionPlanConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .capacityUnits(KendrarankingExecutionPlanCapacityUnits)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<KendrarankingExecutionPlanTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of kendra ranking rescore execution plan. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.capacityUnits">capacityUnits</a></code> | <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a></code> | Capacity units. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description for the execution plan. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>></code> | Tags for labeling the execution plan. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of kendra ranking rescore execution plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kendraranking_execution_plan#name KendrarankingExecutionPlan#name}

---

##### `capacityUnits`<sup>Optional</sup> <a name="capacityUnits" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.capacityUnits"></a>

```java
public KendrarankingExecutionPlanCapacityUnits getCapacityUnits();
```

- *Type:* <a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a>

Capacity units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kendraranking_execution_plan#capacity_units KendrarankingExecutionPlan#capacity_units}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the execution plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kendraranking_execution_plan#description KendrarankingExecutionPlan#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanConfig.property.tags"></a>

```java
public IResolvable|java.util.List<KendrarankingExecutionPlanTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>>

Tags for labeling the execution plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kendraranking_execution_plan#tags KendrarankingExecutionPlan#tags}

---

### KendrarankingExecutionPlanTags <a name="KendrarankingExecutionPlanTags" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendraranking_execution_plan.KendrarankingExecutionPlanTags;

KendrarankingExecutionPlanTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags.property.key">key</a></code> | <code>java.lang.String</code> | A string used to identify this tag. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags.property.value">value</a></code> | <code>java.lang.String</code> | A string containing the value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A string used to identify this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kendraranking_execution_plan#key KendrarankingExecutionPlan#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A string containing the value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/kendraranking_execution_plan#value KendrarankingExecutionPlan#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KendrarankingExecutionPlanCapacityUnitsOutputReference <a name="KendrarankingExecutionPlanCapacityUnitsOutputReference" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendraranking_execution_plan.KendrarankingExecutionPlanCapacityUnitsOutputReference;

new KendrarankingExecutionPlanCapacityUnitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.resetRescoreCapacityUnits">resetRescoreCapacityUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRescoreCapacityUnits` <a name="resetRescoreCapacityUnits" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.resetRescoreCapacityUnits"></a>

```java
public void resetRescoreCapacityUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.rescoreCapacityUnitsInput">rescoreCapacityUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.rescoreCapacityUnits">rescoreCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rescoreCapacityUnitsInput`<sup>Optional</sup> <a name="rescoreCapacityUnitsInput" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.rescoreCapacityUnitsInput"></a>

```java
public java.lang.Number getRescoreCapacityUnitsInput();
```

- *Type:* java.lang.Number

---

##### `rescoreCapacityUnits`<sup>Required</sup> <a name="rescoreCapacityUnits" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.rescoreCapacityUnits"></a>

```java
public java.lang.Number getRescoreCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnitsOutputReference.property.internalValue"></a>

```java
public IResolvable|KendrarankingExecutionPlanCapacityUnits getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanCapacityUnits">KendrarankingExecutionPlanCapacityUnits</a>

---


### KendrarankingExecutionPlanTagsList <a name="KendrarankingExecutionPlanTagsList" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendraranking_execution_plan.KendrarankingExecutionPlanTagsList;

new KendrarankingExecutionPlanTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.get"></a>

```java
public KendrarankingExecutionPlanTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<KendrarankingExecutionPlanTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>>

---


### KendrarankingExecutionPlanTagsOutputReference <a name="KendrarankingExecutionPlanTagsOutputReference" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kendraranking_execution_plan.KendrarankingExecutionPlanTagsOutputReference;

new KendrarankingExecutionPlanTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|KendrarankingExecutionPlanTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kendrarankingExecutionPlan.KendrarankingExecutionPlanTags">KendrarankingExecutionPlanTags</a>

---



