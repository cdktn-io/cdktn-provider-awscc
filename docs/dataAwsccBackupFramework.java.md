# `dataAwsccBackupFramework` Submodule <a name="`dataAwsccBackupFramework` Submodule" id="@cdktn/provider-awscc.dataAwsccBackupFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBackupFramework <a name="DataAwsccBackupFramework" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/backup_framework awscc_backup_framework}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFramework;

DataAwsccBackupFramework.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/backup_framework#id DataAwsccBackupFramework#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBackupFramework resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFramework;

DataAwsccBackupFramework.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFramework;

DataAwsccBackupFramework.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFramework;

DataAwsccBackupFramework.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFramework;

DataAwsccBackupFramework.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccBackupFramework.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccBackupFramework resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccBackupFramework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccBackupFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/backup_framework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBackupFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.deploymentStatus">deploymentStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkArn">frameworkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkControls">frameworkControls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList">DataAwsccBackupFrameworkFrameworkControlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkDescription">frameworkDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkName">frameworkName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkStatus">frameworkStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkTags">frameworkTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList">DataAwsccBackupFrameworkFrameworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `deploymentStatus`<sup>Required</sup> <a name="deploymentStatus" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.deploymentStatus"></a>

```java
public java.lang.String getDeploymentStatus();
```

- *Type:* java.lang.String

---

##### `frameworkArn`<sup>Required</sup> <a name="frameworkArn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkArn"></a>

```java
public java.lang.String getFrameworkArn();
```

- *Type:* java.lang.String

---

##### `frameworkControls`<sup>Required</sup> <a name="frameworkControls" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkControls"></a>

```java
public DataAwsccBackupFrameworkFrameworkControlsList getFrameworkControls();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList">DataAwsccBackupFrameworkFrameworkControlsList</a>

---

##### `frameworkDescription`<sup>Required</sup> <a name="frameworkDescription" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkDescription"></a>

```java
public java.lang.String getFrameworkDescription();
```

- *Type:* java.lang.String

---

##### `frameworkName`<sup>Required</sup> <a name="frameworkName" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkName"></a>

```java
public java.lang.String getFrameworkName();
```

- *Type:* java.lang.String

---

##### `frameworkStatus`<sup>Required</sup> <a name="frameworkStatus" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkStatus"></a>

```java
public java.lang.String getFrameworkStatus();
```

- *Type:* java.lang.String

---

##### `frameworkTags`<sup>Required</sup> <a name="frameworkTags" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.frameworkTags"></a>

```java
public DataAwsccBackupFrameworkFrameworkTagsList getFrameworkTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList">DataAwsccBackupFrameworkFrameworkTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFramework.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBackupFrameworkConfig <a name="DataAwsccBackupFrameworkConfig" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFrameworkConfig;

DataAwsccBackupFrameworkConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/backup_framework#id DataAwsccBackupFramework#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBackupFrameworkFrameworkControls <a name="DataAwsccBackupFrameworkFrameworkControls" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControls.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFrameworkFrameworkControls;

DataAwsccBackupFrameworkFrameworkControls.builder()
    .build();
```


### DataAwsccBackupFrameworkFrameworkControlsControlInputParameters <a name="DataAwsccBackupFrameworkFrameworkControlsControlInputParameters" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFrameworkFrameworkControlsControlInputParameters;

DataAwsccBackupFrameworkFrameworkControlsControlInputParameters.builder()
    .build();
```


### DataAwsccBackupFrameworkFrameworkControlsControlScope <a name="DataAwsccBackupFrameworkFrameworkControlsControlScope" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScope.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFrameworkFrameworkControlsControlScope;

DataAwsccBackupFrameworkFrameworkControlsControlScope.builder()
    .build();
```


### DataAwsccBackupFrameworkFrameworkControlsControlScopeTags <a name="DataAwsccBackupFrameworkFrameworkControlsControlScopeTags" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTags;

DataAwsccBackupFrameworkFrameworkControlsControlScopeTags.builder()
    .build();
```


### DataAwsccBackupFrameworkFrameworkTags <a name="DataAwsccBackupFrameworkFrameworkTags" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFrameworkFrameworkTags;

DataAwsccBackupFrameworkFrameworkTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList <a name="DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList;

new DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.get"></a>

```java
public DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference <a name="DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference;

new DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterName">parameterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterValue">parameterValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParameters">DataAwsccBackupFrameworkFrameworkControlsControlInputParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterName"></a>

```java
public java.lang.String getParameterName();
```

- *Type:* java.lang.String

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterValue"></a>

```java
public java.lang.String getParameterValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.internalValue"></a>

```java
public DataAwsccBackupFrameworkFrameworkControlsControlInputParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParameters">DataAwsccBackupFrameworkFrameworkControlsControlInputParameters</a>

---


### DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference <a name="DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference;

new DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceIds">complianceResourceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceTypes">complianceResourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList">DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScope">DataAwsccBackupFrameworkFrameworkControlsControlScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `complianceResourceIds`<sup>Required</sup> <a name="complianceResourceIds" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceIds"></a>

```java
public java.util.List<java.lang.String> getComplianceResourceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `complianceResourceTypes`<sup>Required</sup> <a name="complianceResourceTypes" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceTypes"></a>

```java
public java.util.List<java.lang.String> getComplianceResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.tags"></a>

```java
public DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList">DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference.property.internalValue"></a>

```java
public DataAwsccBackupFrameworkFrameworkControlsControlScope getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScope">DataAwsccBackupFrameworkFrameworkControlsControlScope</a>

---


### DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList <a name="DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList;

new DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.get"></a>

```java
public DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference <a name="DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference;

new DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTags">DataAwsccBackupFrameworkFrameworkControlsControlScopeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccBackupFrameworkFrameworkControlsControlScopeTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeTags">DataAwsccBackupFrameworkFrameworkControlsControlScopeTags</a>

---


### DataAwsccBackupFrameworkFrameworkControlsList <a name="DataAwsccBackupFrameworkFrameworkControlsList" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFrameworkFrameworkControlsList;

new DataAwsccBackupFrameworkFrameworkControlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.get"></a>

```java
public DataAwsccBackupFrameworkFrameworkControlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccBackupFrameworkFrameworkControlsOutputReference <a name="DataAwsccBackupFrameworkFrameworkControlsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFrameworkFrameworkControlsOutputReference;

new DataAwsccBackupFrameworkFrameworkControlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.controlInputParameters">controlInputParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList">DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.controlName">controlName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.controlScope">controlScope</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference">DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControls">DataAwsccBackupFrameworkFrameworkControls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controlInputParameters`<sup>Required</sup> <a name="controlInputParameters" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.controlInputParameters"></a>

```java
public DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList getControlInputParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList">DataAwsccBackupFrameworkFrameworkControlsControlInputParametersList</a>

---

##### `controlName`<sup>Required</sup> <a name="controlName" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.controlName"></a>

```java
public java.lang.String getControlName();
```

- *Type:* java.lang.String

---

##### `controlScope`<sup>Required</sup> <a name="controlScope" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.controlScope"></a>

```java
public DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference getControlScope();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference">DataAwsccBackupFrameworkFrameworkControlsControlScopeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControlsOutputReference.property.internalValue"></a>

```java
public DataAwsccBackupFrameworkFrameworkControls getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkControls">DataAwsccBackupFrameworkFrameworkControls</a>

---


### DataAwsccBackupFrameworkFrameworkTagsList <a name="DataAwsccBackupFrameworkFrameworkTagsList" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFrameworkFrameworkTagsList;

new DataAwsccBackupFrameworkFrameworkTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.get"></a>

```java
public DataAwsccBackupFrameworkFrameworkTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccBackupFrameworkFrameworkTagsOutputReference <a name="DataAwsccBackupFrameworkFrameworkTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_backup_framework.DataAwsccBackupFrameworkFrameworkTagsOutputReference;

new DataAwsccBackupFrameworkFrameworkTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTags">DataAwsccBackupFrameworkFrameworkTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccBackupFrameworkFrameworkTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupFramework.DataAwsccBackupFrameworkFrameworkTags">DataAwsccBackupFrameworkFrameworkTags</a>

---



