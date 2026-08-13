# `dataAwsccSsmMaintenanceWindowTask` Submodule <a name="`dataAwsccSsmMaintenanceWindowTask` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmMaintenanceWindowTask <a name="DataAwsccSsmMaintenanceWindowTask" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssm_maintenance_window_task awscc_ssm_maintenance_window_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTask;

DataAwsccSsmMaintenanceWindowTask.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssm_maintenance_window_task#id DataAwsccSsmMaintenanceWindowTask#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSsmMaintenanceWindowTask resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTask;

DataAwsccSsmMaintenanceWindowTask.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTask;

DataAwsccSsmMaintenanceWindowTask.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTask;

DataAwsccSsmMaintenanceWindowTask.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTask;

DataAwsccSsmMaintenanceWindowTask.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccSsmMaintenanceWindowTask.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccSsmMaintenanceWindowTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccSsmMaintenanceWindowTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccSsmMaintenanceWindowTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssm_maintenance_window_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmMaintenanceWindowTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.cutoffBehavior">cutoffBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.loggingInfo">loggingInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference">DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.maxErrors">maxErrors</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.serviceRoleArn">serviceRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList">DataAwsccSsmMaintenanceWindowTaskTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskArn">taskArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskInvocationParameters">taskInvocationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskParameters">taskParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskType">taskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.windowId">windowId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.windowTaskId">windowTaskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `cutoffBehavior`<sup>Required</sup> <a name="cutoffBehavior" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.cutoffBehavior"></a>

```java
public java.lang.String getCutoffBehavior();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `loggingInfo`<sup>Required</sup> <a name="loggingInfo" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.loggingInfo"></a>

```java
public DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference getLoggingInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference">DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference</a>

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.maxConcurrency"></a>

```java
public java.lang.String getMaxConcurrency();
```

- *Type:* java.lang.String

---

##### `maxErrors`<sup>Required</sup> <a name="maxErrors" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.maxErrors"></a>

```java
public java.lang.String getMaxErrors();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.serviceRoleArn"></a>

```java
public java.lang.String getServiceRoleArn();
```

- *Type:* java.lang.String

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.targets"></a>

```java
public DataAwsccSsmMaintenanceWindowTaskTargetsList getTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList">DataAwsccSsmMaintenanceWindowTaskTargetsList</a>

---

##### `taskArn`<sup>Required</sup> <a name="taskArn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskArn"></a>

```java
public java.lang.String getTaskArn();
```

- *Type:* java.lang.String

---

##### `taskInvocationParameters`<sup>Required</sup> <a name="taskInvocationParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskInvocationParameters"></a>

```java
public DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference getTaskInvocationParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference</a>

---

##### `taskParameters`<sup>Required</sup> <a name="taskParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskParameters"></a>

```java
public java.lang.String getTaskParameters();
```

- *Type:* java.lang.String

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskType"></a>

```java
public java.lang.String getTaskType();
```

- *Type:* java.lang.String

---

##### `windowId`<sup>Required</sup> <a name="windowId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.windowId"></a>

```java
public java.lang.String getWindowId();
```

- *Type:* java.lang.String

---

##### `windowTaskId`<sup>Required</sup> <a name="windowTaskId" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.windowTaskId"></a>

```java
public java.lang.String getWindowTaskId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmMaintenanceWindowTaskConfig <a name="DataAwsccSsmMaintenanceWindowTaskConfig" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskConfig;

DataAwsccSsmMaintenanceWindowTaskConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssm_maintenance_window_task#id DataAwsccSsmMaintenanceWindowTask#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsmMaintenanceWindowTaskLoggingInfo <a name="DataAwsccSsmMaintenanceWindowTaskLoggingInfo" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskLoggingInfo;

DataAwsccSsmMaintenanceWindowTaskLoggingInfo.builder()
    .build();
```


### DataAwsccSsmMaintenanceWindowTaskTargets <a name="DataAwsccSsmMaintenanceWindowTaskTargets" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskTargets;

DataAwsccSsmMaintenanceWindowTaskTargets.builder()
    .build();
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters;

DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters.builder()
    .build();
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters;

DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters.builder()
    .build();
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters;

DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters.builder()
    .build();
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters;

DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.builder()
    .build();
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig;

DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig.builder()
    .build();
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig;

DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig.builder()
    .build();
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters;

DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference;

new DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3Prefix">s3Prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfo">DataAwsccSsmMaintenanceWindowTaskLoggingInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `s3Prefix`<sup>Required</sup> <a name="s3Prefix" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3Prefix"></a>

```java
public java.lang.String getS3Prefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.internalValue"></a>

```java
public DataAwsccSsmMaintenanceWindowTaskLoggingInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfo">DataAwsccSsmMaintenanceWindowTaskLoggingInfo</a>

---


### DataAwsccSsmMaintenanceWindowTaskTargetsList <a name="DataAwsccSsmMaintenanceWindowTaskTargetsList" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskTargetsList;

new DataAwsccSsmMaintenanceWindowTaskTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.get"></a>

```java
public DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference;

new DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargets">DataAwsccSsmMaintenanceWindowTaskTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.internalValue"></a>

```java
public DataAwsccSsmMaintenanceWindowTaskTargets getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargets">DataAwsccSsmMaintenanceWindowTaskTargets</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference;

new DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.documentVersion">documentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `documentVersion`<sup>Required</sup> <a name="documentVersion" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.documentVersion"></a>

```java
public java.lang.String getDocumentVersion();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.internalValue"></a>

```java
public DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference;

new DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.clientContext">clientContext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.payload">payload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientContext`<sup>Required</sup> <a name="clientContext" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.clientContext"></a>

```java
public java.lang.String getClientContext();
```

- *Type:* java.lang.String

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.payload"></a>

```java
public java.lang.String getPayload();
```

- *Type:* java.lang.String

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.internalValue"></a>

```java
public DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference;

new DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchLogGroupName">cloudwatchLogGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchOutputEnabled">cloudwatchOutputEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogGroupName`<sup>Required</sup> <a name="cloudwatchLogGroupName" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchLogGroupName"></a>

```java
public java.lang.String getCloudwatchLogGroupName();
```

- *Type:* java.lang.String

---

##### `cloudwatchOutputEnabled`<sup>Required</sup> <a name="cloudwatchOutputEnabled" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchOutputEnabled"></a>

```java
public IResolvable getCloudwatchOutputEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference;

new DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationArn">notificationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationEvents">notificationEvents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationType">notificationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `notificationArn`<sup>Required</sup> <a name="notificationArn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationArn"></a>

```java
public java.lang.String getNotificationArn();
```

- *Type:* java.lang.String

---

##### `notificationEvents`<sup>Required</sup> <a name="notificationEvents" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationEvents"></a>

```java
public java.util.List<java.lang.String> getNotificationEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationType"></a>

```java
public java.lang.String getNotificationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.internalValue"></a>

```java
public DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference;

new DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.cloudwatchOutputConfig">cloudwatchOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHash">documentHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHashType">documentHashType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentVersion">documentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.notificationConfig">notificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3BucketName">outputS3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3KeyPrefix">outputS3KeyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.serviceRoleArn">serviceRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchOutputConfig`<sup>Required</sup> <a name="cloudwatchOutputConfig" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.cloudwatchOutputConfig"></a>

```java
public DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference getCloudwatchOutputConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `documentHash`<sup>Required</sup> <a name="documentHash" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHash"></a>

```java
public java.lang.String getDocumentHash();
```

- *Type:* java.lang.String

---

##### `documentHashType`<sup>Required</sup> <a name="documentHashType" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHashType"></a>

```java
public java.lang.String getDocumentHashType();
```

- *Type:* java.lang.String

---

##### `documentVersion`<sup>Required</sup> <a name="documentVersion" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentVersion"></a>

```java
public java.lang.String getDocumentVersion();
```

- *Type:* java.lang.String

---

##### `notificationConfig`<sup>Required</sup> <a name="notificationConfig" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.notificationConfig"></a>

```java
public DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference getNotificationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference</a>

---

##### `outputS3BucketName`<sup>Required</sup> <a name="outputS3BucketName" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3BucketName"></a>

```java
public java.lang.String getOutputS3BucketName();
```

- *Type:* java.lang.String

---

##### `outputS3KeyPrefix`<sup>Required</sup> <a name="outputS3KeyPrefix" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3KeyPrefix"></a>

```java
public java.lang.String getOutputS3KeyPrefix();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.serviceRoleArn"></a>

```java
public java.lang.String getServiceRoleArn();
```

- *Type:* java.lang.String

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.internalValue"></a>

```java
public DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference;

new DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.input">input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.input"></a>

```java
public java.lang.String getInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.internalValue"></a>

```java
public DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_ssm_maintenance_window_task.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference;

new DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowAutomationParameters">maintenanceWindowAutomationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowLambdaParameters">maintenanceWindowLambdaParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowRunCommandParameters">maintenanceWindowRunCommandParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowStepFunctionsParameters">maintenanceWindowStepFunctionsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowAutomationParameters`<sup>Required</sup> <a name="maintenanceWindowAutomationParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowAutomationParameters"></a>

```java
public DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference getMaintenanceWindowAutomationParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference</a>

---

##### `maintenanceWindowLambdaParameters`<sup>Required</sup> <a name="maintenanceWindowLambdaParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowLambdaParameters"></a>

```java
public DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference getMaintenanceWindowLambdaParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference</a>

---

##### `maintenanceWindowRunCommandParameters`<sup>Required</sup> <a name="maintenanceWindowRunCommandParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowRunCommandParameters"></a>

```java
public DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference getMaintenanceWindowRunCommandParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference</a>

---

##### `maintenanceWindowStepFunctionsParameters`<sup>Required</sup> <a name="maintenanceWindowStepFunctionsParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowStepFunctionsParameters"></a>

```java
public DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference getMaintenanceWindowStepFunctionsParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.internalValue"></a>

```java
public DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters</a>

---



