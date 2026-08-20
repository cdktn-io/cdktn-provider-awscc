# `connectUserHierarchyStructure` Submodule <a name="`connectUserHierarchyStructure` Submodule" id="@cdktn/provider-awscc.connectUserHierarchyStructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectUserHierarchyStructure <a name="ConnectUserHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure awscc_connect_user_hierarchy_structure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_structure.ConnectUserHierarchyStructure;

ConnectUserHierarchyStructure.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceArn(java.lang.String)
//  .userHierarchyStructure(ConnectUserHierarchyStructureUserHierarchyStructure)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.userHierarchyStructure">userHierarchyStructure</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a></code> | Information about the hierarchy structure. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#instance_arn ConnectUserHierarchyStructure#instance_arn}

---

##### `userHierarchyStructure`<sup>Optional</sup> <a name="userHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.userHierarchyStructure"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a>

Information about the hierarchy structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#user_hierarchy_structure ConnectUserHierarchyStructure#user_hierarchy_structure}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putUserHierarchyStructure">putUserHierarchyStructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetUserHierarchyStructure">resetUserHierarchyStructure</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putUserHierarchyStructure` <a name="putUserHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putUserHierarchyStructure"></a>

```java
public void putUserHierarchyStructure(ConnectUserHierarchyStructureUserHierarchyStructure value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putUserHierarchyStructure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a>

---

##### `resetUserHierarchyStructure` <a name="resetUserHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetUserHierarchyStructure"></a>

```java
public void resetUserHierarchyStructure()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectUserHierarchyStructure resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_structure.ConnectUserHierarchyStructure;

ConnectUserHierarchyStructure.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_structure.ConnectUserHierarchyStructure;

ConnectUserHierarchyStructure.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_structure.ConnectUserHierarchyStructure;

ConnectUserHierarchyStructure.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_structure.ConnectUserHierarchyStructure;

ConnectUserHierarchyStructure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConnectUserHierarchyStructure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConnectUserHierarchyStructure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConnectUserHierarchyStructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConnectUserHierarchyStructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConnectUserHierarchyStructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructure">userHierarchyStructure</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructureArn">userHierarchyStructureArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructureInput">userHierarchyStructureInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `userHierarchyStructure`<sup>Required</sup> <a name="userHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructure"></a>

```java
public ConnectUserHierarchyStructureUserHierarchyStructureOutputReference getUserHierarchyStructure();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureOutputReference</a>

---

##### `userHierarchyStructureArn`<sup>Required</sup> <a name="userHierarchyStructureArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructureArn"></a>

```java
public java.lang.String getUserHierarchyStructureArn();
```

- *Type:* java.lang.String

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `userHierarchyStructureInput`<sup>Optional</sup> <a name="userHierarchyStructureInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructureInput"></a>

```java
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructure getUserHierarchyStructureInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectUserHierarchyStructureConfig <a name="ConnectUserHierarchyStructureConfig" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_structure.ConnectUserHierarchyStructureConfig;

ConnectUserHierarchyStructureConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceArn(java.lang.String)
//  .userHierarchyStructure(ConnectUserHierarchyStructureUserHierarchyStructure)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.userHierarchyStructure">userHierarchyStructure</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a></code> | Information about the hierarchy structure. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#instance_arn ConnectUserHierarchyStructure#instance_arn}

---

##### `userHierarchyStructure`<sup>Optional</sup> <a name="userHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.userHierarchyStructure"></a>

```java
public ConnectUserHierarchyStructureUserHierarchyStructure getUserHierarchyStructure();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a>

Information about the hierarchy structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#user_hierarchy_structure ConnectUserHierarchyStructure#user_hierarchy_structure}

---

### ConnectUserHierarchyStructureUserHierarchyStructure <a name="ConnectUserHierarchyStructureUserHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_structure.ConnectUserHierarchyStructureUserHierarchyStructure;

ConnectUserHierarchyStructureUserHierarchyStructure.builder()
//  .levelFive(ConnectUserHierarchyStructureUserHierarchyStructureLevelFive)
//  .levelFour(ConnectUserHierarchyStructureUserHierarchyStructureLevelFour)
//  .levelOne(ConnectUserHierarchyStructureUserHierarchyStructureLevelOne)
//  .levelThree(ConnectUserHierarchyStructureUserHierarchyStructureLevelThree)
//  .levelTwo(ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelFive">levelFive</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a></code> | Information about level five. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelFour">levelFour</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a></code> | Information about level four. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelOne">levelOne</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a></code> | Information about level one. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelThree">levelThree</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a></code> | Information about level three. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelTwo">levelTwo</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a></code> | Information about level two. |

---

##### `levelFive`<sup>Optional</sup> <a name="levelFive" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelFive"></a>

```java
public ConnectUserHierarchyStructureUserHierarchyStructureLevelFive getLevelFive();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a>

Information about level five.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#level_five ConnectUserHierarchyStructure#level_five}

---

##### `levelFour`<sup>Optional</sup> <a name="levelFour" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelFour"></a>

```java
public ConnectUserHierarchyStructureUserHierarchyStructureLevelFour getLevelFour();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a>

Information about level four.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#level_four ConnectUserHierarchyStructure#level_four}

---

##### `levelOne`<sup>Optional</sup> <a name="levelOne" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelOne"></a>

```java
public ConnectUserHierarchyStructureUserHierarchyStructureLevelOne getLevelOne();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a>

Information about level one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#level_one ConnectUserHierarchyStructure#level_one}

---

##### `levelThree`<sup>Optional</sup> <a name="levelThree" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelThree"></a>

```java
public ConnectUserHierarchyStructureUserHierarchyStructureLevelThree getLevelThree();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a>

Information about level three.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#level_three ConnectUserHierarchyStructure#level_three}

---

##### `levelTwo`<sup>Optional</sup> <a name="levelTwo" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelTwo"></a>

```java
public ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo getLevelTwo();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a>

Information about level two.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#level_two ConnectUserHierarchyStructure#level_two}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelFive <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelFive" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_structure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive;

ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.builder()
//  .hierarchyLevelArn(java.lang.String)
//  .hierarchyLevelId(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>java.lang.String</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.name">name</a></code> | <code>java.lang.String</code> | The name of the hierarchy level. |

---

##### `hierarchyLevelArn`<sup>Optional</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.hierarchyLevelArn"></a>

```java
public java.lang.String getHierarchyLevelArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `hierarchyLevelId`<sup>Optional</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.hierarchyLevelId"></a>

```java
public java.lang.String getHierarchyLevelId();
```

- *Type:* java.lang.String

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelFour <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelFour" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_structure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour;

ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.builder()
//  .hierarchyLevelArn(java.lang.String)
//  .hierarchyLevelId(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>java.lang.String</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.name">name</a></code> | <code>java.lang.String</code> | The name of the hierarchy level. |

---

##### `hierarchyLevelArn`<sup>Optional</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.hierarchyLevelArn"></a>

```java
public java.lang.String getHierarchyLevelArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `hierarchyLevelId`<sup>Optional</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.hierarchyLevelId"></a>

```java
public java.lang.String getHierarchyLevelId();
```

- *Type:* java.lang.String

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelOne <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelOne" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_structure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne;

ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.builder()
//  .hierarchyLevelArn(java.lang.String)
//  .hierarchyLevelId(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>java.lang.String</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.name">name</a></code> | <code>java.lang.String</code> | The name of the hierarchy level. |

---

##### `hierarchyLevelArn`<sup>Optional</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.hierarchyLevelArn"></a>

```java
public java.lang.String getHierarchyLevelArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `hierarchyLevelId`<sup>Optional</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.hierarchyLevelId"></a>

```java
public java.lang.String getHierarchyLevelId();
```

- *Type:* java.lang.String

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelThree <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelThree" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_structure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree;

ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.builder()
//  .hierarchyLevelArn(java.lang.String)
//  .hierarchyLevelId(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>java.lang.String</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.name">name</a></code> | <code>java.lang.String</code> | The name of the hierarchy level. |

---

##### `hierarchyLevelArn`<sup>Optional</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.hierarchyLevelArn"></a>

```java
public java.lang.String getHierarchyLevelArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `hierarchyLevelId`<sup>Optional</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.hierarchyLevelId"></a>

```java
public java.lang.String getHierarchyLevelId();
```

- *Type:* java.lang.String

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_structure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo;

ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.builder()
//  .hierarchyLevelArn(java.lang.String)
//  .hierarchyLevelId(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>java.lang.String</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.name">name</a></code> | <code>java.lang.String</code> | The name of the hierarchy level. |

---

##### `hierarchyLevelArn`<sup>Optional</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.hierarchyLevelArn"></a>

```java
public java.lang.String getHierarchyLevelArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `hierarchyLevelId`<sup>Optional</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.hierarchyLevelId"></a>

```java
public java.lang.String getHierarchyLevelId();
```

- *Type:* java.lang.String

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_structure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference;

new ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetHierarchyLevelArn">resetHierarchyLevelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetHierarchyLevelId">resetHierarchyLevelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHierarchyLevelArn` <a name="resetHierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetHierarchyLevelArn"></a>

```java
public void resetHierarchyLevelArn()
```

##### `resetHierarchyLevelId` <a name="resetHierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetHierarchyLevelId"></a>

```java
public void resetHierarchyLevelId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArnInput">hierarchyLevelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelIdInput">hierarchyLevelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelArnInput`<sup>Optional</sup> <a name="hierarchyLevelArnInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArnInput"></a>

```java
public java.lang.String getHierarchyLevelArnInput();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelIdInput`<sup>Optional</sup> <a name="hierarchyLevelIdInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelIdInput"></a>

```java
public java.lang.String getHierarchyLevelIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelArn`<sup>Required</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArn"></a>

```java
public java.lang.String getHierarchyLevelArn();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelId`<sup>Required</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelId"></a>

```java
public java.lang.String getHierarchyLevelId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelFive getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_structure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference;

new ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetHierarchyLevelArn">resetHierarchyLevelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetHierarchyLevelId">resetHierarchyLevelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHierarchyLevelArn` <a name="resetHierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetHierarchyLevelArn"></a>

```java
public void resetHierarchyLevelArn()
```

##### `resetHierarchyLevelId` <a name="resetHierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetHierarchyLevelId"></a>

```java
public void resetHierarchyLevelId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArnInput">hierarchyLevelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelIdInput">hierarchyLevelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelArnInput`<sup>Optional</sup> <a name="hierarchyLevelArnInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArnInput"></a>

```java
public java.lang.String getHierarchyLevelArnInput();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelIdInput`<sup>Optional</sup> <a name="hierarchyLevelIdInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelIdInput"></a>

```java
public java.lang.String getHierarchyLevelIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelArn`<sup>Required</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArn"></a>

```java
public java.lang.String getHierarchyLevelArn();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelId`<sup>Required</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelId"></a>

```java
public java.lang.String getHierarchyLevelId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelFour getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_structure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference;

new ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetHierarchyLevelArn">resetHierarchyLevelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetHierarchyLevelId">resetHierarchyLevelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHierarchyLevelArn` <a name="resetHierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetHierarchyLevelArn"></a>

```java
public void resetHierarchyLevelArn()
```

##### `resetHierarchyLevelId` <a name="resetHierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetHierarchyLevelId"></a>

```java
public void resetHierarchyLevelId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArnInput">hierarchyLevelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelIdInput">hierarchyLevelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelArnInput`<sup>Optional</sup> <a name="hierarchyLevelArnInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArnInput"></a>

```java
public java.lang.String getHierarchyLevelArnInput();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelIdInput`<sup>Optional</sup> <a name="hierarchyLevelIdInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelIdInput"></a>

```java
public java.lang.String getHierarchyLevelIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelArn`<sup>Required</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArn"></a>

```java
public java.lang.String getHierarchyLevelArn();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelId`<sup>Required</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelId"></a>

```java
public java.lang.String getHierarchyLevelId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelOne getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_structure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference;

new ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetHierarchyLevelArn">resetHierarchyLevelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetHierarchyLevelId">resetHierarchyLevelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHierarchyLevelArn` <a name="resetHierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetHierarchyLevelArn"></a>

```java
public void resetHierarchyLevelArn()
```

##### `resetHierarchyLevelId` <a name="resetHierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetHierarchyLevelId"></a>

```java
public void resetHierarchyLevelId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArnInput">hierarchyLevelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelIdInput">hierarchyLevelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelArnInput`<sup>Optional</sup> <a name="hierarchyLevelArnInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArnInput"></a>

```java
public java.lang.String getHierarchyLevelArnInput();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelIdInput`<sup>Optional</sup> <a name="hierarchyLevelIdInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelIdInput"></a>

```java
public java.lang.String getHierarchyLevelIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelArn`<sup>Required</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArn"></a>

```java
public java.lang.String getHierarchyLevelArn();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelId`<sup>Required</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelId"></a>

```java
public java.lang.String getHierarchyLevelId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelThree getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_structure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference;

new ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetHierarchyLevelArn">resetHierarchyLevelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetHierarchyLevelId">resetHierarchyLevelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHierarchyLevelArn` <a name="resetHierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetHierarchyLevelArn"></a>

```java
public void resetHierarchyLevelArn()
```

##### `resetHierarchyLevelId` <a name="resetHierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetHierarchyLevelId"></a>

```java
public void resetHierarchyLevelId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArnInput">hierarchyLevelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelIdInput">hierarchyLevelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArn">hierarchyLevelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelId">hierarchyLevelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelArnInput`<sup>Optional</sup> <a name="hierarchyLevelArnInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArnInput"></a>

```java
public java.lang.String getHierarchyLevelArnInput();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelIdInput`<sup>Optional</sup> <a name="hierarchyLevelIdInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelIdInput"></a>

```java
public java.lang.String getHierarchyLevelIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelArn`<sup>Required</sup> <a name="hierarchyLevelArn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArn"></a>

```java
public java.lang.String getHierarchyLevelArn();
```

- *Type:* java.lang.String

---

##### `hierarchyLevelId`<sup>Required</sup> <a name="hierarchyLevelId" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelId"></a>

```java
public java.lang.String getHierarchyLevelId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_user_hierarchy_structure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference;

new ConnectUserHierarchyStructureUserHierarchyStructureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFive">putLevelFive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFour">putLevelFour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelOne">putLevelOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelThree">putLevelThree</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelTwo">putLevelTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelFive">resetLevelFive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelFour">resetLevelFour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelOne">resetLevelOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelThree">resetLevelThree</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelTwo">resetLevelTwo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLevelFive` <a name="putLevelFive" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFive"></a>

```java
public void putLevelFive(ConnectUserHierarchyStructureUserHierarchyStructureLevelFive value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFive.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a>

---

##### `putLevelFour` <a name="putLevelFour" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFour"></a>

```java
public void putLevelFour(ConnectUserHierarchyStructureUserHierarchyStructureLevelFour value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFour.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a>

---

##### `putLevelOne` <a name="putLevelOne" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelOne"></a>

```java
public void putLevelOne(ConnectUserHierarchyStructureUserHierarchyStructureLevelOne value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelOne.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a>

---

##### `putLevelThree` <a name="putLevelThree" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelThree"></a>

```java
public void putLevelThree(ConnectUserHierarchyStructureUserHierarchyStructureLevelThree value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelThree.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a>

---

##### `putLevelTwo` <a name="putLevelTwo" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelTwo"></a>

```java
public void putLevelTwo(ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelTwo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a>

---

##### `resetLevelFive` <a name="resetLevelFive" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelFive"></a>

```java
public void resetLevelFive()
```

##### `resetLevelFour` <a name="resetLevelFour" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelFour"></a>

```java
public void resetLevelFour()
```

##### `resetLevelOne` <a name="resetLevelOne" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelOne"></a>

```java
public void resetLevelOne()
```

##### `resetLevelThree` <a name="resetLevelThree" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelThree"></a>

```java
public void resetLevelThree()
```

##### `resetLevelTwo` <a name="resetLevelTwo" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelTwo"></a>

```java
public void resetLevelTwo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFive">levelFive</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFour">levelFour</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOne">levelOne</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThree">levelThree</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwo">levelTwo</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFiveInput">levelFiveInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFourInput">levelFourInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOneInput">levelOneInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThreeInput">levelThreeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwoInput">levelTwoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `levelFive`<sup>Required</sup> <a name="levelFive" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFive"></a>

```java
public ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference getLevelFive();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference</a>

---

##### `levelFour`<sup>Required</sup> <a name="levelFour" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFour"></a>

```java
public ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference getLevelFour();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference</a>

---

##### `levelOne`<sup>Required</sup> <a name="levelOne" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOne"></a>

```java
public ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference getLevelOne();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference</a>

---

##### `levelThree`<sup>Required</sup> <a name="levelThree" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThree"></a>

```java
public ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference getLevelThree();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference</a>

---

##### `levelTwo`<sup>Required</sup> <a name="levelTwo" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwo"></a>

```java
public ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference getLevelTwo();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference</a>

---

##### `levelFiveInput`<sup>Optional</sup> <a name="levelFiveInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFiveInput"></a>

```java
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelFive getLevelFiveInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a>

---

##### `levelFourInput`<sup>Optional</sup> <a name="levelFourInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFourInput"></a>

```java
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelFour getLevelFourInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a>

---

##### `levelOneInput`<sup>Optional</sup> <a name="levelOneInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOneInput"></a>

```java
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelOne getLevelOneInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a>

---

##### `levelThreeInput`<sup>Optional</sup> <a name="levelThreeInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThreeInput"></a>

```java
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelThree getLevelThreeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a>

---

##### `levelTwoInput`<sup>Optional</sup> <a name="levelTwoInput" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwoInput"></a>

```java
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo getLevelTwoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectUserHierarchyStructureUserHierarchyStructure getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a>

---



