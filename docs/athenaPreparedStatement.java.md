# `athenaPreparedStatement` Submodule <a name="`athenaPreparedStatement` Submodule" id="@cdktn/provider-awscc.athenaPreparedStatement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaPreparedStatement <a name="AthenaPreparedStatement" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_prepared_statement awscc_athena_prepared_statement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_prepared_statement.AthenaPreparedStatement;

AthenaPreparedStatement.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .queryStatement(java.lang.String)
    .statementName(java.lang.String)
    .workGroup(java.lang.String)
//  .description(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.queryStatement">queryStatement</a></code> | <code>java.lang.String</code> | The query string for the prepared statement. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.statementName">statementName</a></code> | <code>java.lang.String</code> | The name of the prepared statement. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.workGroup">workGroup</a></code> | <code>java.lang.String</code> | The name of the workgroup to which the prepared statement belongs. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the prepared statement. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `queryStatement`<sup>Required</sup> <a name="queryStatement" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.queryStatement"></a>

- *Type:* java.lang.String

The query string for the prepared statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_prepared_statement#query_statement AthenaPreparedStatement#query_statement}

---

##### `statementName`<sup>Required</sup> <a name="statementName" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.statementName"></a>

- *Type:* java.lang.String

The name of the prepared statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_prepared_statement#statement_name AthenaPreparedStatement#statement_name}

---

##### `workGroup`<sup>Required</sup> <a name="workGroup" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.workGroup"></a>

- *Type:* java.lang.String

The name of the workgroup to which the prepared statement belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_prepared_statement#work_group AthenaPreparedStatement#work_group}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the prepared statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_prepared_statement#description AthenaPreparedStatement#description}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.resetDescription"></a>

```java
public void resetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AthenaPreparedStatement resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.isConstruct"></a>

```java
import io.cdktn.providers.awscc.athena_prepared_statement.AthenaPreparedStatement;

AthenaPreparedStatement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.athena_prepared_statement.AthenaPreparedStatement;

AthenaPreparedStatement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.athena_prepared_statement.AthenaPreparedStatement;

AthenaPreparedStatement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.athena_prepared_statement.AthenaPreparedStatement;

AthenaPreparedStatement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AthenaPreparedStatement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AthenaPreparedStatement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AthenaPreparedStatement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AthenaPreparedStatement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_prepared_statement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AthenaPreparedStatement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.queryStatementInput">queryStatementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.statementNameInput">statementNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.workGroupInput">workGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.queryStatement">queryStatement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.statementName">statementName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.workGroup">workGroup</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `queryStatementInput`<sup>Optional</sup> <a name="queryStatementInput" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.queryStatementInput"></a>

```java
public java.lang.String getQueryStatementInput();
```

- *Type:* java.lang.String

---

##### `statementNameInput`<sup>Optional</sup> <a name="statementNameInput" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.statementNameInput"></a>

```java
public java.lang.String getStatementNameInput();
```

- *Type:* java.lang.String

---

##### `workGroupInput`<sup>Optional</sup> <a name="workGroupInput" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.workGroupInput"></a>

```java
public java.lang.String getWorkGroupInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `queryStatement`<sup>Required</sup> <a name="queryStatement" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.queryStatement"></a>

```java
public java.lang.String getQueryStatement();
```

- *Type:* java.lang.String

---

##### `statementName`<sup>Required</sup> <a name="statementName" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.statementName"></a>

```java
public java.lang.String getStatementName();
```

- *Type:* java.lang.String

---

##### `workGroup`<sup>Required</sup> <a name="workGroup" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.workGroup"></a>

```java
public java.lang.String getWorkGroup();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaPreparedStatementConfig <a name="AthenaPreparedStatementConfig" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.athena_prepared_statement.AthenaPreparedStatementConfig;

AthenaPreparedStatementConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .queryStatement(java.lang.String)
    .statementName(java.lang.String)
    .workGroup(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.queryStatement">queryStatement</a></code> | <code>java.lang.String</code> | The query string for the prepared statement. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.statementName">statementName</a></code> | <code>java.lang.String</code> | The name of the prepared statement. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.workGroup">workGroup</a></code> | <code>java.lang.String</code> | The name of the workgroup to which the prepared statement belongs. |
| <code><a href="#@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the prepared statement. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `queryStatement`<sup>Required</sup> <a name="queryStatement" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.queryStatement"></a>

```java
public java.lang.String getQueryStatement();
```

- *Type:* java.lang.String

The query string for the prepared statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_prepared_statement#query_statement AthenaPreparedStatement#query_statement}

---

##### `statementName`<sup>Required</sup> <a name="statementName" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.statementName"></a>

```java
public java.lang.String getStatementName();
```

- *Type:* java.lang.String

The name of the prepared statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_prepared_statement#statement_name AthenaPreparedStatement#statement_name}

---

##### `workGroup`<sup>Required</sup> <a name="workGroup" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.workGroup"></a>

```java
public java.lang.String getWorkGroup();
```

- *Type:* java.lang.String

The name of the workgroup to which the prepared statement belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_prepared_statement#work_group AthenaPreparedStatement#work_group}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.athenaPreparedStatement.AthenaPreparedStatementConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the prepared statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/athena_prepared_statement#description AthenaPreparedStatement#description}

---



