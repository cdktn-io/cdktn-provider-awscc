# `connectHoursOfOperation` Submodule <a name="`connectHoursOfOperation` Submodule" id="@cdktn/provider-awscc.connectHoursOfOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectHoursOfOperation <a name="ConnectHoursOfOperation" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation awscc_connect_hours_of_operation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperation;

ConnectHoursOfOperation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .config(IResolvable|java.util.List<ConnectHoursOfOperationConfigA>)
    .instanceArn(java.lang.String)
    .name(java.lang.String)
    .timeZone(java.lang.String)
//  .childHoursOfOperations(IResolvable|java.util.List<ConnectHoursOfOperationChildHoursOfOperations>)
//  .description(java.lang.String)
//  .hoursOfOperationOverrides(IResolvable|java.util.List<ConnectHoursOfOperationHoursOfOperationOverrides>)
//  .parentHoursOfOperations(IResolvable|java.util.List<ConnectHoursOfOperationParentHoursOfOperations>)
//  .tags(IResolvable|java.util.List<ConnectHoursOfOperationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.config">config</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>></code> | Configuration information for the hours of operation: day, start time, and end time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | The time zone of the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.childHoursOfOperations">childHoursOfOperations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>></code> | List of child hours of operations. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.hoursOfOperationOverrides">hoursOfOperationOverrides</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>></code> | One or more hours of operation overrides assigned to an hour of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.parentHoursOfOperations">parentHoursOfOperations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>></code> | List of parent hours of operations. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>></code> | One or more tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.config"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>>

Configuration information for the hours of operation: day, start time, and end time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#config ConnectHoursOfOperation#config}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#instance_arn ConnectHoursOfOperation#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

The time zone of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#time_zone ConnectHoursOfOperation#time_zone}

---

##### `childHoursOfOperations`<sup>Optional</sup> <a name="childHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.childHoursOfOperations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>>

List of child hours of operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#child_hours_of_operations ConnectHoursOfOperation#child_hours_of_operations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#description ConnectHoursOfOperation#description}

---

##### `hoursOfOperationOverrides`<sup>Optional</sup> <a name="hoursOfOperationOverrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.hoursOfOperationOverrides"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>>

One or more hours of operation overrides assigned to an hour of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#hours_of_operation_overrides ConnectHoursOfOperation#hours_of_operation_overrides}

---

##### `parentHoursOfOperations`<sup>Optional</sup> <a name="parentHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.parentHoursOfOperations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>>

List of parent hours of operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#parent_hours_of_operations ConnectHoursOfOperation#parent_hours_of_operations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>>

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#tags ConnectHoursOfOperation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putChildHoursOfOperations">putChildHoursOfOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putHoursOfOperationOverrides">putHoursOfOperationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putParentHoursOfOperations">putParentHoursOfOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetChildHoursOfOperations">resetChildHoursOfOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetHoursOfOperationOverrides">resetHoursOfOperationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetParentHoursOfOperations">resetParentHoursOfOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putChildHoursOfOperations` <a name="putChildHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putChildHoursOfOperations"></a>

```java
public void putChildHoursOfOperations(IResolvable|java.util.List<ConnectHoursOfOperationChildHoursOfOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putChildHoursOfOperations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>>

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putConfig"></a>

```java
public void putConfig(IResolvable|java.util.List<ConnectHoursOfOperationConfigA> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>>

---

##### `putHoursOfOperationOverrides` <a name="putHoursOfOperationOverrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putHoursOfOperationOverrides"></a>

```java
public void putHoursOfOperationOverrides(IResolvable|java.util.List<ConnectHoursOfOperationHoursOfOperationOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putHoursOfOperationOverrides.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>>

---

##### `putParentHoursOfOperations` <a name="putParentHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putParentHoursOfOperations"></a>

```java
public void putParentHoursOfOperations(IResolvable|java.util.List<ConnectHoursOfOperationParentHoursOfOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putParentHoursOfOperations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ConnectHoursOfOperationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>>

---

##### `resetChildHoursOfOperations` <a name="resetChildHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetChildHoursOfOperations"></a>

```java
public void resetChildHoursOfOperations()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHoursOfOperationOverrides` <a name="resetHoursOfOperationOverrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetHoursOfOperationOverrides"></a>

```java
public void resetHoursOfOperationOverrides()
```

##### `resetParentHoursOfOperations` <a name="resetParentHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetParentHoursOfOperations"></a>

```java
public void resetParentHoursOfOperations()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectHoursOfOperation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperation;

ConnectHoursOfOperation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperation;

ConnectHoursOfOperation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperation;

ConnectHoursOfOperation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperation;

ConnectHoursOfOperation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConnectHoursOfOperation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConnectHoursOfOperation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConnectHoursOfOperation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConnectHoursOfOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConnectHoursOfOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.childHoursOfOperations">childHoursOfOperations</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList">ConnectHoursOfOperationChildHoursOfOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList">ConnectHoursOfOperationConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationArn">hoursOfOperationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationOverrides">hoursOfOperationOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList">ConnectHoursOfOperationHoursOfOperationOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.parentHoursOfOperations">parentHoursOfOperations</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList">ConnectHoursOfOperationParentHoursOfOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList">ConnectHoursOfOperationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.childHoursOfOperationsInput">childHoursOfOperationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.configInput">configInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationOverridesInput">hoursOfOperationOverridesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.parentHoursOfOperationsInput">parentHoursOfOperationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `childHoursOfOperations`<sup>Required</sup> <a name="childHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.childHoursOfOperations"></a>

```java
public ConnectHoursOfOperationChildHoursOfOperationsList getChildHoursOfOperations();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList">ConnectHoursOfOperationChildHoursOfOperationsList</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.config"></a>

```java
public ConnectHoursOfOperationConfigAList getConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList">ConnectHoursOfOperationConfigAList</a>

---

##### `hoursOfOperationArn`<sup>Required</sup> <a name="hoursOfOperationArn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationArn"></a>

```java
public java.lang.String getHoursOfOperationArn();
```

- *Type:* java.lang.String

---

##### `hoursOfOperationOverrides`<sup>Required</sup> <a name="hoursOfOperationOverrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationOverrides"></a>

```java
public ConnectHoursOfOperationHoursOfOperationOverridesList getHoursOfOperationOverrides();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList">ConnectHoursOfOperationHoursOfOperationOverridesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parentHoursOfOperations`<sup>Required</sup> <a name="parentHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.parentHoursOfOperations"></a>

```java
public ConnectHoursOfOperationParentHoursOfOperationsList getParentHoursOfOperations();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList">ConnectHoursOfOperationParentHoursOfOperationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tags"></a>

```java
public ConnectHoursOfOperationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList">ConnectHoursOfOperationTagsList</a>

---

##### `childHoursOfOperationsInput`<sup>Optional</sup> <a name="childHoursOfOperationsInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.childHoursOfOperationsInput"></a>

```java
public IResolvable|java.util.List<ConnectHoursOfOperationChildHoursOfOperations> getChildHoursOfOperationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.configInput"></a>

```java
public IResolvable|java.util.List<ConnectHoursOfOperationConfigA> getConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `hoursOfOperationOverridesInput`<sup>Optional</sup> <a name="hoursOfOperationOverridesInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationOverridesInput"></a>

```java
public IResolvable|java.util.List<ConnectHoursOfOperationHoursOfOperationOverrides> getHoursOfOperationOverridesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>>

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentHoursOfOperationsInput`<sup>Optional</sup> <a name="parentHoursOfOperationsInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.parentHoursOfOperationsInput"></a>

```java
public IResolvable|java.util.List<ConnectHoursOfOperationParentHoursOfOperations> getParentHoursOfOperationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ConnectHoursOfOperationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectHoursOfOperationChildHoursOfOperations <a name="ConnectHoursOfOperationChildHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationChildHoursOfOperations;

ConnectHoursOfOperationChildHoursOfOperations.builder()
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.property.id">id</a></code> | <code>java.lang.String</code> | The identifier for the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.property.name">name</a></code> | <code>java.lang.String</code> | The name of the hours of operation. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The identifier for the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#id ConnectHoursOfOperation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}

---

### ConnectHoursOfOperationConfig <a name="ConnectHoursOfOperationConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationConfig;

ConnectHoursOfOperationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .config(IResolvable|java.util.List<ConnectHoursOfOperationConfigA>)
    .instanceArn(java.lang.String)
    .name(java.lang.String)
    .timeZone(java.lang.String)
//  .childHoursOfOperations(IResolvable|java.util.List<ConnectHoursOfOperationChildHoursOfOperations>)
//  .description(java.lang.String)
//  .hoursOfOperationOverrides(IResolvable|java.util.List<ConnectHoursOfOperationHoursOfOperationOverrides>)
//  .parentHoursOfOperations(IResolvable|java.util.List<ConnectHoursOfOperationParentHoursOfOperations>)
//  .tags(IResolvable|java.util.List<ConnectHoursOfOperationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.config">config</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>></code> | Configuration information for the hours of operation: day, start time, and end time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | The time zone of the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.childHoursOfOperations">childHoursOfOperations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>></code> | List of child hours of operations. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.hoursOfOperationOverrides">hoursOfOperationOverrides</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>></code> | One or more hours of operation overrides assigned to an hour of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.parentHoursOfOperations">parentHoursOfOperations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>></code> | List of parent hours of operations. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>></code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.config"></a>

```java
public IResolvable|java.util.List<ConnectHoursOfOperationConfigA> getConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>>

Configuration information for the hours of operation: day, start time, and end time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#config ConnectHoursOfOperation#config}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#instance_arn ConnectHoursOfOperation#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

The time zone of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#time_zone ConnectHoursOfOperation#time_zone}

---

##### `childHoursOfOperations`<sup>Optional</sup> <a name="childHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.childHoursOfOperations"></a>

```java
public IResolvable|java.util.List<ConnectHoursOfOperationChildHoursOfOperations> getChildHoursOfOperations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>>

List of child hours of operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#child_hours_of_operations ConnectHoursOfOperation#child_hours_of_operations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#description ConnectHoursOfOperation#description}

---

##### `hoursOfOperationOverrides`<sup>Optional</sup> <a name="hoursOfOperationOverrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.hoursOfOperationOverrides"></a>

```java
public IResolvable|java.util.List<ConnectHoursOfOperationHoursOfOperationOverrides> getHoursOfOperationOverrides();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>>

One or more hours of operation overrides assigned to an hour of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#hours_of_operation_overrides ConnectHoursOfOperation#hours_of_operation_overrides}

---

##### `parentHoursOfOperations`<sup>Optional</sup> <a name="parentHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.parentHoursOfOperations"></a>

```java
public IResolvable|java.util.List<ConnectHoursOfOperationParentHoursOfOperations> getParentHoursOfOperations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>>

List of parent hours of operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#parent_hours_of_operations ConnectHoursOfOperation#parent_hours_of_operations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ConnectHoursOfOperationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>>

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#tags ConnectHoursOfOperation#tags}

---

### ConnectHoursOfOperationConfigA <a name="ConnectHoursOfOperationConfigA" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationConfigA;

ConnectHoursOfOperationConfigA.builder()
    .day(java.lang.String)
    .endTime(ConnectHoursOfOperationConfigEndTime)
    .startTime(ConnectHoursOfOperationConfigStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.day">day</a></code> | <code>java.lang.String</code> | The day that the hours of operation applies to. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.endTime">endTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | The end time that your contact center closes. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | The start time that your contact center opens. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

The day that the hours of operation applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#day ConnectHoursOfOperation#day}

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.endTime"></a>

```java
public ConnectHoursOfOperationConfigEndTime getEndTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

The end time that your contact center closes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#end_time ConnectHoursOfOperation#end_time}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.startTime"></a>

```java
public ConnectHoursOfOperationConfigStartTime getStartTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

The start time that your contact center opens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#start_time ConnectHoursOfOperation#start_time}

---

### ConnectHoursOfOperationConfigEndTime <a name="ConnectHoursOfOperationConfigEndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationConfigEndTime;

ConnectHoursOfOperationConfigEndTime.builder()
    .hours(java.lang.Number)
    .minutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | The hours. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | The minutes. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---

### ConnectHoursOfOperationConfigStartTime <a name="ConnectHoursOfOperationConfigStartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationConfigStartTime;

ConnectHoursOfOperationConfigStartTime.builder()
    .hours(java.lang.Number)
    .minutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | The hours. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | The minutes. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---

### ConnectHoursOfOperationHoursOfOperationOverrides <a name="ConnectHoursOfOperationHoursOfOperationOverrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationHoursOfOperationOverrides;

ConnectHoursOfOperationHoursOfOperationOverrides.builder()
//  .effectiveFrom(java.lang.String)
//  .effectiveTill(java.lang.String)
//  .hoursOfOperationOverrideId(java.lang.String)
//  .overrideConfig(IResolvable|java.util.List<ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig>)
//  .overrideDescription(java.lang.String)
//  .overrideName(java.lang.String)
//  .overrideType(java.lang.String)
//  .recurrenceConfig(ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.effectiveFrom">effectiveFrom</a></code> | <code>java.lang.String</code> | The date from which the hours of operation override would be effective. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.effectiveTill">effectiveTill</a></code> | <code>java.lang.String</code> | The date till which the hours of operation override would be effective. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.hoursOfOperationOverrideId">hoursOfOperationOverrideId</a></code> | <code>java.lang.String</code> | The Resource Identifier for the hours of operation override. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideConfig">overrideConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>></code> | Configuration information for the hours of operation override: day, start time, and end time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideDescription">overrideDescription</a></code> | <code>java.lang.String</code> | The description of the hours of operation override. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideName">overrideName</a></code> | <code>java.lang.String</code> | The name of the hours of operation override. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideType">overrideType</a></code> | <code>java.lang.String</code> | The type of hours of operation override. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.recurrenceConfig">recurrenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a></code> | Configuration for recurring hours of operation overrides. |

---

##### `effectiveFrom`<sup>Optional</sup> <a name="effectiveFrom" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.effectiveFrom"></a>

```java
public java.lang.String getEffectiveFrom();
```

- *Type:* java.lang.String

The date from which the hours of operation override would be effective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#effective_from ConnectHoursOfOperation#effective_from}

---

##### `effectiveTill`<sup>Optional</sup> <a name="effectiveTill" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.effectiveTill"></a>

```java
public java.lang.String getEffectiveTill();
```

- *Type:* java.lang.String

The date till which the hours of operation override would be effective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#effective_till ConnectHoursOfOperation#effective_till}

---

##### `hoursOfOperationOverrideId`<sup>Optional</sup> <a name="hoursOfOperationOverrideId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.hoursOfOperationOverrideId"></a>

```java
public java.lang.String getHoursOfOperationOverrideId();
```

- *Type:* java.lang.String

The Resource Identifier for the hours of operation override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#hours_of_operation_override_id ConnectHoursOfOperation#hours_of_operation_override_id}

---

##### `overrideConfig`<sup>Optional</sup> <a name="overrideConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideConfig"></a>

```java
public IResolvable|java.util.List<ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig> getOverrideConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>>

Configuration information for the hours of operation override: day, start time, and end time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#override_config ConnectHoursOfOperation#override_config}

---

##### `overrideDescription`<sup>Optional</sup> <a name="overrideDescription" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideDescription"></a>

```java
public java.lang.String getOverrideDescription();
```

- *Type:* java.lang.String

The description of the hours of operation override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#override_description ConnectHoursOfOperation#override_description}

---

##### `overrideName`<sup>Optional</sup> <a name="overrideName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideName"></a>

```java
public java.lang.String getOverrideName();
```

- *Type:* java.lang.String

The name of the hours of operation override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#override_name ConnectHoursOfOperation#override_name}

---

##### `overrideType`<sup>Optional</sup> <a name="overrideType" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideType"></a>

```java
public java.lang.String getOverrideType();
```

- *Type:* java.lang.String

The type of hours of operation override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#override_type ConnectHoursOfOperation#override_type}

---

##### `recurrenceConfig`<sup>Optional</sup> <a name="recurrenceConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.recurrenceConfig"></a>

```java
public ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig getRecurrenceConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a>

Configuration for recurring hours of operation overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#recurrence_config ConnectHoursOfOperation#recurrence_config}

---

### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig;

ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.builder()
//  .day(java.lang.String)
//  .endTime(ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime)
//  .startTime(ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.day">day</a></code> | <code>java.lang.String</code> | The day that the hours of operation override applies to. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.endTime">endTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a></code> | The new end time that your contact center closes for the overriden days. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a></code> | The new start time that your contact center opens for the overriden days. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

The day that the hours of operation override applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#day ConnectHoursOfOperation#day}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.endTime"></a>

```java
public ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime getEndTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a>

The new end time that your contact center closes for the overriden days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#end_time ConnectHoursOfOperation#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.startTime"></a>

```java
public ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime getStartTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a>

The new start time that your contact center opens for the overriden days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#start_time ConnectHoursOfOperation#start_time}

---

### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime;

ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | The hours. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | The minutes. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---

### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime;

ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | The hours. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | The minutes. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---

### ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig <a name="ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig;

ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig.builder()
//  .recurrencePattern(ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig.property.recurrencePattern">recurrencePattern</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a></code> | Pattern for recurring hours of operation overrides. |

---

##### `recurrencePattern`<sup>Optional</sup> <a name="recurrencePattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig.property.recurrencePattern"></a>

```java
public ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern getRecurrencePattern();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a>

Pattern for recurring hours of operation overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#recurrence_pattern ConnectHoursOfOperation#recurrence_pattern}

---

### ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern <a name="ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern;

ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.builder()
//  .byMonth(java.util.List<java.lang.Number>)
//  .byMonthDay(java.util.List<java.lang.Number>)
//  .byWeekdayOccurrence(java.util.List<java.lang.Number>)
//  .frequency(java.lang.String)
//  .interval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byMonth">byMonth</a></code> | <code>java.util.List<java.lang.Number></code> | List of months (1-12) for recurrence pattern. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byMonthDay">byMonthDay</a></code> | <code>java.util.List<java.lang.Number></code> | List of month days (-1 to 31) for recurrence pattern. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byWeekdayOccurrence">byWeekdayOccurrence</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#by_weekday_occurrence ConnectHoursOfOperation#by_weekday_occurrence}. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.frequency">frequency</a></code> | <code>java.lang.String</code> | The frequency of recurrence for hours of operation overrides. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#interval ConnectHoursOfOperation#interval}. |

---

##### `byMonth`<sup>Optional</sup> <a name="byMonth" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byMonth"></a>

```java
public java.util.List<java.lang.Number> getByMonth();
```

- *Type:* java.util.List<java.lang.Number>

List of months (1-12) for recurrence pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#by_month ConnectHoursOfOperation#by_month}

---

##### `byMonthDay`<sup>Optional</sup> <a name="byMonthDay" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byMonthDay"></a>

```java
public java.util.List<java.lang.Number> getByMonthDay();
```

- *Type:* java.util.List<java.lang.Number>

List of month days (-1 to 31) for recurrence pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#by_month_day ConnectHoursOfOperation#by_month_day}

---

##### `byWeekdayOccurrence`<sup>Optional</sup> <a name="byWeekdayOccurrence" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byWeekdayOccurrence"></a>

```java
public java.util.List<java.lang.Number> getByWeekdayOccurrence();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#by_weekday_occurrence ConnectHoursOfOperation#by_weekday_occurrence}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

The frequency of recurrence for hours of operation overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#frequency ConnectHoursOfOperation#frequency}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#interval ConnectHoursOfOperation#interval}.

---

### ConnectHoursOfOperationParentHoursOfOperations <a name="ConnectHoursOfOperationParentHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationParentHoursOfOperations;

ConnectHoursOfOperationParentHoursOfOperations.builder()
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.property.id">id</a></code> | <code>java.lang.String</code> | The identifier for the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.property.name">name</a></code> | <code>java.lang.String</code> | The name of the hours of operation. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The identifier for the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#id ConnectHoursOfOperation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}

---

### ConnectHoursOfOperationTags <a name="ConnectHoursOfOperationTags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationTags;

ConnectHoursOfOperationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#key ConnectHoursOfOperation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_hours_of_operation#value ConnectHoursOfOperation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectHoursOfOperationChildHoursOfOperationsList <a name="ConnectHoursOfOperationChildHoursOfOperationsList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationChildHoursOfOperationsList;

new ConnectHoursOfOperationChildHoursOfOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.get"></a>

```java
public ConnectHoursOfOperationChildHoursOfOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectHoursOfOperationChildHoursOfOperations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>>

---


### ConnectHoursOfOperationChildHoursOfOperationsOutputReference <a name="ConnectHoursOfOperationChildHoursOfOperationsOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference;

new ConnectHoursOfOperationChildHoursOfOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectHoursOfOperationChildHoursOfOperations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>

---


### ConnectHoursOfOperationConfigAList <a name="ConnectHoursOfOperationConfigAList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationConfigAList;

new ConnectHoursOfOperationConfigAList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get"></a>

```java
public ConnectHoursOfOperationConfigAOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectHoursOfOperationConfigA> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>>

---


### ConnectHoursOfOperationConfigAOutputReference <a name="ConnectHoursOfOperationConfigAOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationConfigAOutputReference;

new ConnectHoursOfOperationConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime">putEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndTime` <a name="putEndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime"></a>

```java
public void putEndTime(ConnectHoursOfOperationConfigEndTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---

##### `putStartTime` <a name="putStartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime"></a>

```java
public void putStartTime(ConnectHoursOfOperationConfigStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTime">endTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference">ConnectHoursOfOperationConfigEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference">ConnectHoursOfOperationConfigStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTime"></a>

```java
public ConnectHoursOfOperationConfigEndTimeOutputReference getEndTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference">ConnectHoursOfOperationConfigEndTimeOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTime"></a>

```java
public ConnectHoursOfOperationConfigStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference">ConnectHoursOfOperationConfigStartTimeOutputReference</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.dayInput"></a>

```java
public java.lang.String getDayInput();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTimeInput"></a>

```java
public IResolvable|ConnectHoursOfOperationConfigEndTime getEndTimeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTimeInput"></a>

```java
public IResolvable|ConnectHoursOfOperationConfigStartTime getStartTimeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectHoursOfOperationConfigA getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>

---


### ConnectHoursOfOperationConfigEndTimeOutputReference <a name="ConnectHoursOfOperationConfigEndTimeOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationConfigEndTimeOutputReference;

new ConnectHoursOfOperationConfigEndTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectHoursOfOperationConfigEndTime getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---


### ConnectHoursOfOperationConfigStartTimeOutputReference <a name="ConnectHoursOfOperationConfigStartTimeOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationConfigStartTimeOutputReference;

new ConnectHoursOfOperationConfigStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectHoursOfOperationConfigStartTime getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesList <a name="ConnectHoursOfOperationHoursOfOperationOverridesList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationHoursOfOperationOverridesList;

new ConnectHoursOfOperationHoursOfOperationOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.get"></a>

```java
public ConnectHoursOfOperationHoursOfOperationOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectHoursOfOperationHoursOfOperationOverrides> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>>

---


### ConnectHoursOfOperationHoursOfOperationOverridesOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference;

new ConnectHoursOfOperationHoursOfOperationOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putOverrideConfig">putOverrideConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putRecurrenceConfig">putRecurrenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetEffectiveFrom">resetEffectiveFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetEffectiveTill">resetEffectiveTill</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetHoursOfOperationOverrideId">resetHoursOfOperationOverrideId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideConfig">resetOverrideConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideDescription">resetOverrideDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideName">resetOverrideName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideType">resetOverrideType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetRecurrenceConfig">resetRecurrenceConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOverrideConfig` <a name="putOverrideConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putOverrideConfig"></a>

```java
public void putOverrideConfig(IResolvable|java.util.List<ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putOverrideConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>>

---

##### `putRecurrenceConfig` <a name="putRecurrenceConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putRecurrenceConfig"></a>

```java
public void putRecurrenceConfig(ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putRecurrenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a>

---

##### `resetEffectiveFrom` <a name="resetEffectiveFrom" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetEffectiveFrom"></a>

```java
public void resetEffectiveFrom()
```

##### `resetEffectiveTill` <a name="resetEffectiveTill" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetEffectiveTill"></a>

```java
public void resetEffectiveTill()
```

##### `resetHoursOfOperationOverrideId` <a name="resetHoursOfOperationOverrideId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetHoursOfOperationOverrideId"></a>

```java
public void resetHoursOfOperationOverrideId()
```

##### `resetOverrideConfig` <a name="resetOverrideConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideConfig"></a>

```java
public void resetOverrideConfig()
```

##### `resetOverrideDescription` <a name="resetOverrideDescription" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideDescription"></a>

```java
public void resetOverrideDescription()
```

##### `resetOverrideName` <a name="resetOverrideName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideName"></a>

```java
public void resetOverrideName()
```

##### `resetOverrideType` <a name="resetOverrideType" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideType"></a>

```java
public void resetOverrideType()
```

##### `resetRecurrenceConfig` <a name="resetRecurrenceConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetRecurrenceConfig"></a>

```java
public void resetRecurrenceConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideConfig">overrideConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.recurrenceConfig">recurrenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveFromInput">effectiveFromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveTillInput">effectiveTillInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.hoursOfOperationOverrideIdInput">hoursOfOperationOverrideIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideConfigInput">overrideConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideDescriptionInput">overrideDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideNameInput">overrideNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideTypeInput">overrideTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.recurrenceConfigInput">recurrenceConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveFrom">effectiveFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveTill">effectiveTill</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.hoursOfOperationOverrideId">hoursOfOperationOverrideId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideDescription">overrideDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideName">overrideName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideType">overrideType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `overrideConfig`<sup>Required</sup> <a name="overrideConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideConfig"></a>

```java
public ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList getOverrideConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList</a>

---

##### `recurrenceConfig`<sup>Required</sup> <a name="recurrenceConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.recurrenceConfig"></a>

```java
public ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference getRecurrenceConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference</a>

---

##### `effectiveFromInput`<sup>Optional</sup> <a name="effectiveFromInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveFromInput"></a>

```java
public java.lang.String getEffectiveFromInput();
```

- *Type:* java.lang.String

---

##### `effectiveTillInput`<sup>Optional</sup> <a name="effectiveTillInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveTillInput"></a>

```java
public java.lang.String getEffectiveTillInput();
```

- *Type:* java.lang.String

---

##### `hoursOfOperationOverrideIdInput`<sup>Optional</sup> <a name="hoursOfOperationOverrideIdInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.hoursOfOperationOverrideIdInput"></a>

```java
public java.lang.String getHoursOfOperationOverrideIdInput();
```

- *Type:* java.lang.String

---

##### `overrideConfigInput`<sup>Optional</sup> <a name="overrideConfigInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideConfigInput"></a>

```java
public IResolvable|java.util.List<ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig> getOverrideConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>>

---

##### `overrideDescriptionInput`<sup>Optional</sup> <a name="overrideDescriptionInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideDescriptionInput"></a>

```java
public java.lang.String getOverrideDescriptionInput();
```

- *Type:* java.lang.String

---

##### `overrideNameInput`<sup>Optional</sup> <a name="overrideNameInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideNameInput"></a>

```java
public java.lang.String getOverrideNameInput();
```

- *Type:* java.lang.String

---

##### `overrideTypeInput`<sup>Optional</sup> <a name="overrideTypeInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideTypeInput"></a>

```java
public java.lang.String getOverrideTypeInput();
```

- *Type:* java.lang.String

---

##### `recurrenceConfigInput`<sup>Optional</sup> <a name="recurrenceConfigInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.recurrenceConfigInput"></a>

```java
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig getRecurrenceConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a>

---

##### `effectiveFrom`<sup>Required</sup> <a name="effectiveFrom" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveFrom"></a>

```java
public java.lang.String getEffectiveFrom();
```

- *Type:* java.lang.String

---

##### `effectiveTill`<sup>Required</sup> <a name="effectiveTill" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveTill"></a>

```java
public java.lang.String getEffectiveTill();
```

- *Type:* java.lang.String

---

##### `hoursOfOperationOverrideId`<sup>Required</sup> <a name="hoursOfOperationOverrideId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.hoursOfOperationOverrideId"></a>

```java
public java.lang.String getHoursOfOperationOverrideId();
```

- *Type:* java.lang.String

---

##### `overrideDescription`<sup>Required</sup> <a name="overrideDescription" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideDescription"></a>

```java
public java.lang.String getOverrideDescription();
```

- *Type:* java.lang.String

---

##### `overrideName`<sup>Required</sup> <a name="overrideName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideName"></a>

```java
public java.lang.String getOverrideName();
```

- *Type:* java.lang.String

---

##### `overrideType`<sup>Required</sup> <a name="overrideType" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideType"></a>

```java
public java.lang.String getOverrideType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverrides getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference;

new ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList;

new ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.get"></a>

```java
public ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>>

---


### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference;

new ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putEndTime">putEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putStartTime">putStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndTime` <a name="putEndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putEndTime"></a>

```java
public void putEndTime(ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putEndTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a>

---

##### `putStartTime` <a name="putStartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putStartTime"></a>

```java
public void putStartTime(ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a>

---

##### `resetDay` <a name="resetDay" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetDay"></a>

```java
public void resetDay()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.endTime">endTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.endTime"></a>

```java
public ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference getEndTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.startTime"></a>

```java
public ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.dayInput"></a>

```java
public java.lang.String getDayInput();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.endTimeInput"></a>

```java
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime getEndTimeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.startTimeInput"></a>

```java
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime getStartTimeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference;

new ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference;

new ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.putRecurrencePattern">putRecurrencePattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resetRecurrencePattern">resetRecurrencePattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecurrencePattern` <a name="putRecurrencePattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.putRecurrencePattern"></a>

```java
public void putRecurrencePattern(ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.putRecurrencePattern.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a>

---

##### `resetRecurrencePattern` <a name="resetRecurrencePattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resetRecurrencePattern"></a>

```java
public void resetRecurrencePattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.recurrencePattern">recurrencePattern</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.recurrencePatternInput">recurrencePatternInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recurrencePattern`<sup>Required</sup> <a name="recurrencePattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.recurrencePattern"></a>

```java
public ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference getRecurrencePattern();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference</a>

---

##### `recurrencePatternInput`<sup>Optional</sup> <a name="recurrencePatternInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.recurrencePatternInput"></a>

```java
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern getRecurrencePatternInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference;

new ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByMonth">resetByMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByMonthDay">resetByMonthDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByWeekdayOccurrence">resetByWeekdayOccurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetInterval">resetInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetByMonth` <a name="resetByMonth" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByMonth"></a>

```java
public void resetByMonth()
```

##### `resetByMonthDay` <a name="resetByMonthDay" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByMonthDay"></a>

```java
public void resetByMonthDay()
```

##### `resetByWeekdayOccurrence` <a name="resetByWeekdayOccurrence" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByWeekdayOccurrence"></a>

```java
public void resetByWeekdayOccurrence()
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetFrequency"></a>

```java
public void resetFrequency()
```

##### `resetInterval` <a name="resetInterval" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetInterval"></a>

```java
public void resetInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthDayInput">byMonthDayInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthInput">byMonthInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byWeekdayOccurrenceInput">byWeekdayOccurrenceInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonth">byMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthDay">byMonthDay</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byWeekdayOccurrence">byWeekdayOccurrence</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `byMonthDayInput`<sup>Optional</sup> <a name="byMonthDayInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthDayInput"></a>

```java
public java.util.List<java.lang.Number> getByMonthDayInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `byMonthInput`<sup>Optional</sup> <a name="byMonthInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthInput"></a>

```java
public java.util.List<java.lang.Number> getByMonthInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `byWeekdayOccurrenceInput`<sup>Optional</sup> <a name="byWeekdayOccurrenceInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byWeekdayOccurrenceInput"></a>

```java
public java.util.List<java.lang.Number> getByWeekdayOccurrenceInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.frequencyInput"></a>

```java
public java.lang.String getFrequencyInput();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `byMonth`<sup>Required</sup> <a name="byMonth" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonth"></a>

```java
public java.util.List<java.lang.Number> getByMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `byMonthDay`<sup>Required</sup> <a name="byMonthDay" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthDay"></a>

```java
public java.util.List<java.lang.Number> getByMonthDay();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `byWeekdayOccurrence`<sup>Required</sup> <a name="byWeekdayOccurrence" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byWeekdayOccurrence"></a>

```java
public java.util.List<java.lang.Number> getByWeekdayOccurrence();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a>

---


### ConnectHoursOfOperationParentHoursOfOperationsList <a name="ConnectHoursOfOperationParentHoursOfOperationsList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationParentHoursOfOperationsList;

new ConnectHoursOfOperationParentHoursOfOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.get"></a>

```java
public ConnectHoursOfOperationParentHoursOfOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectHoursOfOperationParentHoursOfOperations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>>

---


### ConnectHoursOfOperationParentHoursOfOperationsOutputReference <a name="ConnectHoursOfOperationParentHoursOfOperationsOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference;

new ConnectHoursOfOperationParentHoursOfOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectHoursOfOperationParentHoursOfOperations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>

---


### ConnectHoursOfOperationTagsList <a name="ConnectHoursOfOperationTagsList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationTagsList;

new ConnectHoursOfOperationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.get"></a>

```java
public ConnectHoursOfOperationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConnectHoursOfOperationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>>

---


### ConnectHoursOfOperationTagsOutputReference <a name="ConnectHoursOfOperationTagsOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_hours_of_operation.ConnectHoursOfOperationTagsOutputReference;

new ConnectHoursOfOperationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectHoursOfOperationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>

---



