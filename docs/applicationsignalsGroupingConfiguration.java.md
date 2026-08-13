# `applicationsignalsGroupingConfiguration` Submodule <a name="`applicationsignalsGroupingConfiguration` Submodule" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationsignalsGroupingConfiguration <a name="ApplicationsignalsGroupingConfiguration" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration awscc_applicationsignals_grouping_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_grouping_configuration.ApplicationsignalsGroupingConfiguration;

ApplicationsignalsGroupingConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .groupingAttributeDefinitions(IResolvable|java.util.List<ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.groupingAttributeDefinitions">groupingAttributeDefinitions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#grouping_attribute_definitions ApplicationsignalsGroupingConfiguration#grouping_attribute_definitions}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `groupingAttributeDefinitions`<sup>Required</sup> <a name="groupingAttributeDefinitions" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.groupingAttributeDefinitions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#grouping_attribute_definitions ApplicationsignalsGroupingConfiguration#grouping_attribute_definitions}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.putGroupingAttributeDefinitions">putGroupingAttributeDefinitions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGroupingAttributeDefinitions` <a name="putGroupingAttributeDefinitions" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.putGroupingAttributeDefinitions"></a>

```java
public void putGroupingAttributeDefinitions(IResolvable|java.util.List<ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.putGroupingAttributeDefinitions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApplicationsignalsGroupingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_grouping_configuration.ApplicationsignalsGroupingConfiguration;

ApplicationsignalsGroupingConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_grouping_configuration.ApplicationsignalsGroupingConfiguration;

ApplicationsignalsGroupingConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_grouping_configuration.ApplicationsignalsGroupingConfiguration;

ApplicationsignalsGroupingConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_grouping_configuration.ApplicationsignalsGroupingConfiguration;

ApplicationsignalsGroupingConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApplicationsignalsGroupingConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApplicationsignalsGroupingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApplicationsignalsGroupingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApplicationsignalsGroupingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApplicationsignalsGroupingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.groupingAttributeDefinitions">groupingAttributeDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.groupingAttributeDefinitionsInput">groupingAttributeDefinitionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `groupingAttributeDefinitions`<sup>Required</sup> <a name="groupingAttributeDefinitions" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.groupingAttributeDefinitions"></a>

```java
public ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList getGroupingAttributeDefinitions();
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `groupingAttributeDefinitionsInput`<sup>Optional</sup> <a name="groupingAttributeDefinitionsInput" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.groupingAttributeDefinitionsInput"></a>

```java
public IResolvable|java.util.List<ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions> getGroupingAttributeDefinitionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationsignalsGroupingConfigurationConfig <a name="ApplicationsignalsGroupingConfigurationConfig" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_grouping_configuration.ApplicationsignalsGroupingConfigurationConfig;

ApplicationsignalsGroupingConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .groupingAttributeDefinitions(IResolvable|java.util.List<ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.groupingAttributeDefinitions">groupingAttributeDefinitions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#grouping_attribute_definitions ApplicationsignalsGroupingConfiguration#grouping_attribute_definitions}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `groupingAttributeDefinitions`<sup>Required</sup> <a name="groupingAttributeDefinitions" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.groupingAttributeDefinitions"></a>

```java
public IResolvable|java.util.List<ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions> getGroupingAttributeDefinitions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#grouping_attribute_definitions ApplicationsignalsGroupingConfiguration#grouping_attribute_definitions}.

---

### ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions <a name="ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_grouping_configuration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions;

ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.builder()
    .groupingName(java.lang.String)
    .groupingSourceKeys(java.util.List<java.lang.String>)
//  .defaultGroupingValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.property.groupingName">groupingName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#grouping_name ApplicationsignalsGroupingConfiguration#grouping_name}. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.property.groupingSourceKeys">groupingSourceKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#grouping_source_keys ApplicationsignalsGroupingConfiguration#grouping_source_keys}. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.property.defaultGroupingValue">defaultGroupingValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#default_grouping_value ApplicationsignalsGroupingConfiguration#default_grouping_value}. |

---

##### `groupingName`<sup>Required</sup> <a name="groupingName" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.property.groupingName"></a>

```java
public java.lang.String getGroupingName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#grouping_name ApplicationsignalsGroupingConfiguration#grouping_name}.

---

##### `groupingSourceKeys`<sup>Required</sup> <a name="groupingSourceKeys" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.property.groupingSourceKeys"></a>

```java
public java.util.List<java.lang.String> getGroupingSourceKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#grouping_source_keys ApplicationsignalsGroupingConfiguration#grouping_source_keys}.

---

##### `defaultGroupingValue`<sup>Optional</sup> <a name="defaultGroupingValue" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.property.defaultGroupingValue"></a>

```java
public java.lang.String getDefaultGroupingValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/applicationsignals_grouping_configuration#default_grouping_value ApplicationsignalsGroupingConfiguration#default_grouping_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList <a name="ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_grouping_configuration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList;

new ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.get"></a>

```java
public ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>>

---


### ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference <a name="ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_grouping_configuration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference;

new ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.resetDefaultGroupingValue">resetDefaultGroupingValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultGroupingValue` <a name="resetDefaultGroupingValue" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.resetDefaultGroupingValue"></a>

```java
public void resetDefaultGroupingValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.defaultGroupingValueInput">defaultGroupingValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingNameInput">groupingNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingSourceKeysInput">groupingSourceKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.defaultGroupingValue">defaultGroupingValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingName">groupingName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingSourceKeys">groupingSourceKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultGroupingValueInput`<sup>Optional</sup> <a name="defaultGroupingValueInput" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.defaultGroupingValueInput"></a>

```java
public java.lang.String getDefaultGroupingValueInput();
```

- *Type:* java.lang.String

---

##### `groupingNameInput`<sup>Optional</sup> <a name="groupingNameInput" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingNameInput"></a>

```java
public java.lang.String getGroupingNameInput();
```

- *Type:* java.lang.String

---

##### `groupingSourceKeysInput`<sup>Optional</sup> <a name="groupingSourceKeysInput" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingSourceKeysInput"></a>

```java
public java.util.List<java.lang.String> getGroupingSourceKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultGroupingValue`<sup>Required</sup> <a name="defaultGroupingValue" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.defaultGroupingValue"></a>

```java
public java.lang.String getDefaultGroupingValue();
```

- *Type:* java.lang.String

---

##### `groupingName`<sup>Required</sup> <a name="groupingName" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingName"></a>

```java
public java.lang.String getGroupingName();
```

- *Type:* java.lang.String

---

##### `groupingSourceKeys`<sup>Required</sup> <a name="groupingSourceKeys" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingSourceKeys"></a>

```java
public java.util.List<java.lang.String> getGroupingSourceKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>

---



